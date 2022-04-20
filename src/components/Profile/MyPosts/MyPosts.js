import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  
let postElements = 
props.postData.map( (p) => <Post message = {p.message} like = {p.like} />);
  return (
    <div className={s.content}>
      <div className={s.item}><h3>My posts</h3></div>
      <div>
        <textarea></textarea>
        </div>
        <div>
        <button>Add</button>
      </div>
      { postElements }
    </div>
  );
};
export default MyPosts;
