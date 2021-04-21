import React, {ChangeEvent, useEffect, useState} from "react";
import {ProfileStatusType} from "./ProfileStatus";

const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const activateMode = () => {
        setEditMode(true)
    }
    const deactivateEditMod = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateMode}>{props.status || '----'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus value={status} onBlur={deactivateEditMod} onChange={onStatusChange}/>
            </div>}
        </div>
    )
}
export default ProfileStatusWithHooks