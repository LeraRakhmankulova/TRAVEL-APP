import styles from './index.module.sass'
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuthField} from "@/models/interfaces/authField.interface";

const AuthPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<IAuthField>({
        mode: "onChange"
    })

    const onSubmit: SubmitHandler<IAuthField> = (data) => {
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input {...register('email', {required: true, pattern: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g})}
                       type="text"/>
                {errors.email && <span>Email is invalid</span>}
                <label>Password</label>
                <input type="password"
                       {...register('password', {required: true, minLength: 6})}/>
                {errors.password && <span>Password is invalid</span>}
                <input type="submit" />
            </form>
        </div>
    )
}

export default AuthPage

//вынести инпуты 