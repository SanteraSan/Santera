import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    changeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    };

    deactivateEditMode = () => {
        (this.state.status === "") ?
            this.setState({
                status: "Hey Hey!!!",
                editMode:false
            }) :
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.state.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input ref={this.newStatusValue} onChange={this.changeStatus} autoFocus={true}
                           onBlur={this.deactivateEditMode} value={this.state.status}/>
                </div>}
            </div>
        )
    }
}

export default ProfileStatus;