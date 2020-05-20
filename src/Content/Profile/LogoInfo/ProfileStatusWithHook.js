import React, {useEffect, useState} from 'react';

const ProfileStatusWithHook = React.memo((props) => {


    // deactivateEditMode = () => {
    //     (this.state.status === "") ?
    //         this.setState({
    //             status: "Hey Hey!!!",
    //             editMode:false
    //         }) :
    //         this.setState({
    //             editMode: false
    //         });
    //     this.props.updateStatus(this.state.status)
    // };


    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect(() =>{
        setStatus(props.status);},
        [props.status]);


    let activateEditMode = () => {
        setEditMode(true)
    };
    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
        debugger;
    };
    const changeStatus = (e) => {
        setStatus(e.currentTarget.value
        );
    };
    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status}</span>
            </div>}

            {editMode &&
            <div>
                <input onChange={changeStatus} value={status} autoFocus={true} onBlur={deactivateEditMode}/>
            </div>}
        </div>
    )
});


export default ProfileStatusWithHook;