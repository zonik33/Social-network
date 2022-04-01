import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div className="content">
      <div className="item">My posts</div>
      <div>
        <textarea></textarea>
        <button>Add</button>
      </div>
      <Post message="Hi, how are u?" like="5" />
      <Post message="Its my first post" like="25" />
    </div>
  );
};
export default MyPosts;
