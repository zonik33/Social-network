import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
    let postElements = props.postData.map((p) => <Post message={p.message} like={p.like}/>);
    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }
    return (
        <div className={s.content}>
            <div className={s.item}>
                <h3>My posts</h3>
            </div>
            <AddNewPostReduxForm onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postElements}
            </div>

        </div>
    )
}

const AddNewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostText"} placeholder={"Post message"}
                validate={[required, maxLength10]}></Field>
            </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
            )
}
const AddNewPostReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)
export default MyPosts;
