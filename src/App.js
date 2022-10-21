import React, {Component} from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className="wrapper">
                    <HeaderContainer/>
                    <Nav/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path="/dialogs/*" element={
                                <DialogsContainer store={this.props.store}/>}/>
                            <Route path='/profile/:userId' element={
                                <ProfileContainer/>}/>
                            <Route path='/profile/*' element={
                                <ProfileContainer/>}/>
                            <Route path="/users" element={
                                <UsersContainer/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>

                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})
export default compose(
    connect(mapStateToProps,{initializeApp}))(App);
