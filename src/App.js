import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {
  
  
  return (
    <BrowserRouter>
    <div className="wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
    <Routes>
        <Route path="/dialogs/*" element= {<Dialogs dialogsData = {props.dialogsData} messageData = {props.messageData} />}/>
        <Route path="/profile" element={<Profile postData = {props.postData} />} />
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
