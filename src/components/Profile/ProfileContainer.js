import React from "react";
import "./Profile.module.css";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import withRouter from "../Users/withRouter";
import {compose} from "redux";


class ProfileContainer extends React.Component {



    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId){
            userId = 24303;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }



    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status,
    isAuth:state.auth.isAuth,

});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}), withRouter, )(ProfileContainer)
