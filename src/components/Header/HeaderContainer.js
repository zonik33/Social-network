import Header from "./Header";
import React from "react";
import {authMe} from "../../redux/auth-reducer";
import {connect} from "react-redux";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return <Header {...this.props}></Header>
    }
}

const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
})
export default connect(mapStateToProps, {
     authMe})(HeaderContainer);
