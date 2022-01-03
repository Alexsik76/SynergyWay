import React, {Component} from 'react';

import UsersServices from './UserServices';
import ButtonDelete from './ButtonDelete';

const usersServices = new UsersServices();

class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
        this.onUsersChange = this.onUsersChange.bind(this)
    }

    componentDidMount() {

        usersServices.getUsers().then((result) => {
            this.setState({'users': result})
        });
    }

    onUsersChange(pk) {
        let newArr = this.state.users.filter(function (obj) {
            return obj.pk !== pk;
        });
        this.setState({users: newArr})
    }

    render() {
        return (
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
                            <td>{c.pk}  </td>
                            <td>{c.username}</td>
                            <td>{c.groups}</td>
                            <td>
                                < ButtonDelete pk={c.pk}
                                               onUsersChange={this.onUsersChange}
                                               service = {usersServices}
                                />
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UsersList;

