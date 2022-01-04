import React, {Component} from 'react';

import UsersServices from './UserServices';
import TableRow from "./TableRow";
import ButtonDelete from "./ButtonDelete";
import {Link, Outlet} from "react-router-dom";

const usersServices = new UsersServices();

class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
        this.onUsersClick = this.onUsersClick.bind(this)
    }

    componentDidMount() {

        usersServices.getUsers().then((result) => {
            this.setState({'users': result})
        });
    }

    onUsersClick(pk) {
        let newArr = this.state.users.filter(function (obj) {
            return obj.pk !== pk;
        });
        this.setState({users: newArr})
    }

    render() {
        return (
            <>
                <Outlet/>
                <div className="users--list">
                    <table className="table table-hover">
                        <thead key="thead" className="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Group</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.users.map(c =>
                            <tr key={c.pk}>
                                < TableRow user={c}
                                />
                                <td>
                                    <Link
                                        to={`/users/${c.pk}`}
                                        key={c.pk}
                                        className="btn btn-outline-primary">
                                        Update
                                    </Link>

                                </td>
                                <td>
                                    <ButtonDelete pk={c.pk}
                                                  onUsersClick={this.onUsersClick}
                                                  service={usersServices}
                                    />
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

export default UsersList;

