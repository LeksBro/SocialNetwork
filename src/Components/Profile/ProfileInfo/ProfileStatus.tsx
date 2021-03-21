import React, {ChangeEvent} from "react";
type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}
class ProfileStatus extends React.Component<ProfileStatusType>{

    state = {
        editMod: false,
        status: this.props.status,
    }
    activeEditMod = () => {
        this.setState({
            editMod: true
        })

    }
    deactivateEditMod = () => {
        this.setState({
            editMod: false
        })
        this.props.updateStatus(this.state.status)

    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
}

render() {
   return <div>
       {!this.state.editMod &&
       <div><span onDoubleClick={this.activeEditMod}>{this.props.status || '-----'}</span></div>}

       {this.state.editMod &&
       <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMod} value={this.state.status}/></div>}
   </div>
    
}
}
export default  ProfileStatus
