import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {updateNewMessageText, updateNewPostText} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
  
  
  return (
    <BrowserRouter>
    <div className="wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
    <Routes>
        <Route path="/dialogs/*" element = {
            <DialogsContainer store = {props.store} />}/>
        <Route path="/profile" element= {
            <Profile store = {props.store}/>} />
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
