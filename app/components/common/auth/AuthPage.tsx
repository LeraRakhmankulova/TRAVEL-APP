import styles from './index.module.sass'
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuthField} from "@/models/interfaces/authField.interface";
import {useState} from "react";

const AuthPage = () => {
    const [isVisible, setIsVisible] = useState(true)
    const {register, handleSubmit, formState: {errors}} = useForm<IAuthField>({
        mode: "onChange"
    })

    const onSubmit: SubmitHandler<IAuthField> = (data) => {
        console.log(data)
    }

    return (
        <div className={styles.auth}>
            <div className={styles.auth__wrapper}>
                <div className={styles.auth__welcome}>
                    <h2>Hey there,</h2>
                    <h1>Welcome Back</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.auth__form}>
                    <div className={styles.auth__field__wrapper}>
                        <div className={styles.auth__field}>
                            <span className='material-icons-outlined'>mail</span>
                            <input {...register('email', {
                                required: true,
                                pattern: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                            })}
                                   type="text" placeholder="Email"/>
                        </div>
                        {errors.email && <span>Email is invalid</span>}
                    </div>
                    <div className={styles.auth__field__wrrapper}>
                        <div className={styles.auth__field}>
                            <span className='material-icons-outlined'>lock</span>
                            <input type="password" placeholder="Password"
                                   {...register('password', {required: true, minLength: 6})}/>
                            <span className='material-icons-outlined' onClick={() => setIsVisible(!isVisible)}>
                                {isVisible ? "visibility" : "visibility_off"}</span>
                        </div>
                        {errors.password && <span>Password is invalid</span>}
                    </div>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default AuthPage

//вынести инпуты