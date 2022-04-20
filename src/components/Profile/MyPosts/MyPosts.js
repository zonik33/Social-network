import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  let postData = [
    {id: 1, message: 'Hi, how are u?', like: '5'},
    {id: 2, message: 'Its my first post', like: '25'},
    {id: 3, message: 'HEY', like: '2'},
    {id: 4, message: 'HOW ARE U?', like: '111'}
]
let postElements = 
postData.map( (p) => <Post message = {p.message} like = {p.like} />);
  return (
    <div className={s.content}>
      <div className={s.item}><h3>My posts</h3></div>
      <div>
        <textarea></textarea>
        </div>
        <div>
        <button>Add</button>
      </div>
      {postElements}
    </div>
  );
};
export default MyPosts;
