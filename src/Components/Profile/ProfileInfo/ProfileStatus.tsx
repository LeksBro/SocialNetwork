import React from "react";
type ProfileStatusType = {
    status: string
}
class ProfileStatus extends React.Component<ProfileStatusType>{
    state = {
        editMod: false
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
    }
render() {
   return <div>
       {!this.state.editMod &&
       <div><span onDoubleClick={this.activeEditMod}>{this.props.status}</span></div>}

       {this.state.editMod &&
       <div><input autoFocus={true} onBlur={this.deactivateEditMod} value={this.props.status}/></div>}
   </div>
    
}
}
export default  ProfileStatus
