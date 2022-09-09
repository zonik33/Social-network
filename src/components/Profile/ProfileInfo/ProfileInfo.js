import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
  return (
    <div>
      <div>
        <img src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"></img>
      </div>
      <div className={s.item}>
          <img src={props.profile.photos.large}/>
          <br/>
          ava + description
      </div>
      </div>
  );
};
export default ProfileInfo;
