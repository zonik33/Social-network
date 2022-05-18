import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {updateNewMessageText, updateNewPostText} from "./redux/state";


const App = (props) => {
  
  
  return (
    <BrowserRouter>
    <div className="wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
    <Routes>
        <Route path="/dialogs/*" element= 
        {<Dialogs state = {props.state.messagePage}
                  dispatch = {props.dispatch} />}/>
        <Route path="/profile" element=
        {<Profile profilePage = {props.state.profilePage}
                  dispatch = {props.dispatch} />} />
        <Route path="/news" element= {<News/>}/>
        <Route path="/music" element= {<Music/>}/>
        <Route path="/settings" element= {<Settings/>}/>
    
    </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
};
export default App;
