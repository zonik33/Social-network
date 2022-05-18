import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from 'react';
import {updateNewPostText} from "../../../redux/state";

const MyPosts = (props) => {

// ________Кнопка с колбеком___________
  const ref = React.createRef();
  let addPost = () => {
    props.dispatch({type:'ADD-POST'});
  }


let postElements = 
props.postData.map( (p) => <Post message = {p.message} like = {p.like} />);


  let onPostChange = () => {
    let text = ref.current.value;
      props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
  }
    return (
    <div className={s.content}>
      <div className={s.item}><h3>My posts</h3></div>
      <div>
      <textarea onChange={onPostChange} ref={ref} value={props.newPostText} />

        </div>


        <div className="_____ПРОВЕРКА КНОООПКИ_________">
        <button onClick = { addPost }>Add</button>  
      </div>


      <div className={s.posts}>
      { postElements }
      </div>
      
    </div>
  );
};
export default MyPosts;
