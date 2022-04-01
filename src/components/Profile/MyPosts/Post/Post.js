import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png"></img>
      {props.message}
      <div>
        <span>Like: {props.like}</span>
      </div>
    </div>
  );
};
export default Post;
