import Header from "./Header";
import React from "react";
import * as axios from "axios";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {authMe} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authMe.getMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data;
                    this.props.setAuthUserData(id, email, login);
                }


            })
    }

    render() {
        return <Header {...this.props}></Header>
    }
}

const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
})
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
