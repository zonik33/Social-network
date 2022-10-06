import React from "react";
import styles from "./FormsControls.module.css"

const FormControl = ({input, meta, TypeField, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : ' ')}>
            <div>

                {React.createElement(TypeField, {...input, ...props})}
            </div>
            <div>
                { hasError && <span>{meta.error}</span> }
            </div>
        </div>
    )
}

export const Input = (props) => {
    return <FormControl TypeField={'input'} {...props} />
}
export const Textarea = (props) => {
    return <FormControl TypeField={'textarea'} {...props} />
}
