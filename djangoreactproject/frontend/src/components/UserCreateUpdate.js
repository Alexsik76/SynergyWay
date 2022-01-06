import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import UsersService from './UserServices'

const usersService = new UsersService()

class UserCreateUpdate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      action: 'create',
      userName: '',
      group: '',
      leave_page: false
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleGroupChange = this.handleGroupChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange (event) {
    this.setState({ userName: event.target.value })
  }

  handleGroupChange (event) {
    this.setState({ group: event.target.value })
  }

  handleCreate () {
    usersService.createUser(
      {
        username: this.state.userName,
        groups: this.state.group
      }
    ).then(() => {
      this.setState({ leave_page: true })
    }).catch((e) => {
      alert('There was an error! Please re-check your form.' + e)
    })
  }

  handleUpdate () {
    console.log(this.state.userName, this)
    usersService.updateUser(
      {
        username: this.state.userName,
        groups: this.state.group
      }
    ).then(() => {
      this.setState({ leave_page: true })
    }).catch((e) => {
      alert('There was an error! Please re-check your form.' + e)
    })
  }

  handleSubmit (event) {
    this.state.action === 'create' ? this.handleCreate() : this.handleUpdate()
    event.preventDefault()
  }
  // componentDidMount() {
  //     const id = this.props.match.params.id;
  //
  // }

  render () {
    // if (this.state.leave_page) {
    //     return <Navigate to='/users/'/>
    // }
    return (
            <>{this.state.leave_page &&
                <Navigate to='/users/'/>}
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input className="form-control" type="text" value={this.state.userName}
                           onChange={this.handleNameChange}/>
                    <label>Group:</label>
                    <input className="form-control" type="text" value={this.state.group}
                           onChange={this.handleGroupChange}/>
                    <input className="btn btn-primary" type="submit" value="Submit"/>
                </div>
            </form>
            </>
    )
  }
}

export default UserCreateUpdate
