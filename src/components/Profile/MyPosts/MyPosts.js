import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from 'react';

const MyPosts = (props) => {

// ________Кнопка с колбеком___________
  const ref = React.createRef();
  let addPost = () => {

    let text = ref.current.value;  
    props.addPost(text);
  }


let postElements = 
props.postData.map( (p) => <Post message = {p.message} like = {p.like} />);




  return (
    <div className={s.content}>
      <div className={s.item}><h3>My posts</h3></div>
      <div>
      <textarea ref={ref}></textarea>
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
