import styles from './index.module.sass'
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuthField} from "@/models/interfaces/authField.interface";

const AuthPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<IAuthField>({
        mode: "onChange"
    })

    const onSubmit: SubmitHandler<IAuthField> = (data) => {

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input {...register('email', {required: 'Email is invalid :('})}
                       type="text"/>
                {errors.email && <div>{errors.email.message}</div>}
                <label>Password</label>
                <input type="password"
                       {...register('password', {required: 'Password is invalid :( '})}/>
                {errors.passowrd && <div>{errors.password?.message}</div>}
                <input type='submit'/>
            </form>
        </div>
    )
}

export default AuthPage

//вынести инпуты + докинуть валидации