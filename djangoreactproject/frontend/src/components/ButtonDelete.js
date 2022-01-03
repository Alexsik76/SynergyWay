import React, {Component} from 'react';

class ButtonDelete extends Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(pk) {
        this.props.service.delete({pk: pk}).then(
            () => {
                console.log('Deleted')
                this.props.onUsersChange(pk)
            });
    }

    render() {
        return (<button type="button" className="btn btn-outline-danger"
                        onClick={() => this.handleDelete(this.props.pk)}> Delete
            </button>
        )
    }
}

export default ButtonDelete;