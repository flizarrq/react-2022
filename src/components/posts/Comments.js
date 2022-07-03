import React from 'react';
import {useForm} from "react-hook-form";
import {createComments} from "../../services/comments.service/Comment.service";

function Comments() {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: 'name', email: 'emai.@gmail.com', phone: '+380'
        }
    });

    const submit = (obj) => {
        console.log(obj);
        createComments(obj).then(({data}) => console.log(data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('name', {required: true})}/>
                {
                    errors.name && <span>empty str !!!</span>
                }
                <input type="text" {...register('email', {required: true})}/>
                <input type="numbers" {...register('phone', {required: true})}/>
                <button>save</button>
            </form>
        </div>
    );
}

export default Comments;