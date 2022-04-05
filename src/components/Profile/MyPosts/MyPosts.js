import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  let postData = [
    {id: 1, message: 'Hi, how are u?', like: '5'},
    {id: 2, message: 'Its my first post', like: '25'}
]
  return (
    <div className={s.content}>
      <div className={s.item}><h3>My posts</h3></div>
      <div>
        <textarea></textarea>
        </div>
        <div>
        <button>Add</button>
      </div>
      <Post message = {postData[0].message} like = {postData[0].like} />
      <Post message = {postData[1].message} like = {postData[1].like} />
    </div>
  );
};
export default MyPosts;
