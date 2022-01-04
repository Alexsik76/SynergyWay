import React, {Component} from "react";
import UsersService from "./UserServices";
import {Navigate} from "react-router-dom";

const usersServices = new UsersService();

class UserSimpleUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            groups: '',
            leave_page: false
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleGroupChange = this.handleGroupChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        usersServices.getUser(this.props.userId).then((result) => {
                this.setState({
                    username: result.username,
                    pk: result.pk,
                    groups: result.groups,
                })
            }
        )
    }

    handleNameChange(event) {
        this.setState(
            {
                username: event.target.value,
            })
    }

    handleGroupChange(event) {
        this.setState({
            groups: event.target.value,
        })
    }

    handleUpdate() {
        usersServices.updateUser(
            {
                pk: this.state.pk,
                username: this.state.username,
                groups: this.state.groups
            }
        ).then(() => {
            this.setState({leave_page: true})
        }).catch((e) => {
            alert('There was an error! Please re-check your form.' + e);
        });
    }

    handleSubmit(event) {
        this.handleUpdate();
        event.preventDefault();
    }

    render() {
        return (
            <>{this.state.leave_page &&
                <Navigate to='/users/'/>}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input className="form-control" type="text" value={this.state.username}
                               onChange={this.handleNameChange}/>
                        <label>Group:</label>
                        <input className="form-control" type="text" value={this.state.groups}
                               onChange={this.handleGroupChange}/>
                        <input className="btn btn-primary" type="submit" value="Submit"/>
                    </div>
                </form>
            </>
        );
    }
}

export default UserSimpleUpdate;