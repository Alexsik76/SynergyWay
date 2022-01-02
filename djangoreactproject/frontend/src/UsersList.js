import React, {Component} from 'react';

import UsersServices from './UserServices';

const usersServices = new UsersServices();

class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        let self = this;
        usersServices.getUsers().then(function (result) {
            self.setState({'users': result})
        });
    }

    handleDelete(e, pk) {
        const self = this;
        usersServices.deleteUser({pk: pk}).then(() => {
            let newArr = self.state.users.filter(function (obj) {
                return obj.pk !== pk;
            });

            self.setState({users: newArr})
        });
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
                                <button type="button" className="btn btn-outline-danger"
                                        onClick={(e) => this.handleDelete(e, c.pk)}> Delete
                                </button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UsersList;

