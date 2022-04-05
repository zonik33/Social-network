import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div className={s.content}>
      <div className={s.item}><h3>My posts</h3></div>
      <div>
        <textarea></textarea>
        </div>
        <div>
        <button>Add</button>
      </div>
      <Post message="Hi, how are u?" like="5" />
      <Post message="Its my first post" like="25" />
    </div>
  );
};
export default MyPosts;
