import React , {Component} from 'react';
import UsersService from "./UserServices";
import UsersList from "./UsersList";

const usersService = new UsersService();

class UserCreateUpdate extends Component {

    constructor(props) {

        super(props);

        this.state = {
            userName: '',
            group:''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleGroupChange = this.handleGroupChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNameChange(event) {
        this.setState({userName: event.target.value});
    }
    handleGroupChange(event) {
        this.setState({group: event.target.value});
    }


  renderRedirect () {
        return <UsersList />
        // console.dir(this.props)

  }
    handleCreate() {

        usersService.createUser(
            {
                "username": this.state.userName,
                "groups": this.state.group
            }
        ).then(() => {
            return this.renderRedirect()
            // alert("User created!");
        }).catch((e) => {
            alert('There was an error! Please re-check your form.'+ e );
        });
    }

    handleSubmit(event) {
        this.handleCreate();
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input className="form-control" type="text" value={this.state.userName} onChange={this.handleNameChange}/>
                    <label>Group:</label>
                    <input className="form-control" type="text" value={this.state.group} onChange={this.handleGroupChange}/>
                    <input className="btn btn-primary" type="submit" value="Submit"/>
                </div>
            </form>
        );
    }
}

export default UserCreateUpdate;