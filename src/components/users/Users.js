import React from 'react';
import {useForm} from "react-hook-form";
import  {createUser} from "../../services/user.service/UserService";

function Users() {

    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            defaultValues: {
                name: 'name', username: 'username', email: 'email'
            }
        }
    );

    function submit(obj) {
        createUser(obj).then(result => console.log(result));
    }


    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('name', {required: true})} />
                {
                    errors.name && <span> empty!!!!!</span>
                }
                <input type="text" {...register('username', {required: true})}/>
                <input type="text" {...register('email', {required: true})}/>

                <button>save</button>
            </form>
        </div>
    );
}

export default Users;