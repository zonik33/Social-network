import React from "react";
import "./Profile.module.css";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import withRouter from "../Users/withRouter";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        let authorizedUserId = this.props.authorizedUserId;
        if (userId) {
            this.props.getUserProfile(userId);
            this.props.getStatus(userId);
        }else{
            if (this.props.isAuth) {
                this.props.getUserProfile(authorizedUserId);
                this.props.getStatus(authorizedUserId);
        }
    }
    }


    render() {

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.id,

});

export default compose(withRouter,
    connect(mapStateToProps,
        {getUserProfile, getStatus, updateStatus}),
    withAuthRedirect)(ProfileContainer)
