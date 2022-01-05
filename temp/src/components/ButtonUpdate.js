import React, {Component} from 'react';
import {Navigate} from "react-router-dom";

class ButtonUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showForm: false
        }
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate() {

        this.setState(
            {showForm: true}
        )
    }

    render() {
        return (
            <>
                {this.state.showForm &&
                    <Navigate to={`/users/${this.props.pk}`}/>}
                <button type="button" className="btn btn-outline-success"
                        onClick={() => this.handleUpdate(this.props.pk)}>Update
                </button>
            </>
        )
    }
}

export default ButtonUpdate;