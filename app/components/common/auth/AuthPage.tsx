import styles from './index.module.sass'
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuthField} from "@/models/interfaces/authField.interface";
import {useState} from "react";
import Link from "next/link";
import Icon from "@/components/ui/icon/Icon";

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
                <div className={styles.auth__header}>
                    <Icon href="/" name="arrow_back_ios_new"/>
                </div>
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
                    <div className={styles.auth__field__wrapper}>
                        <div className={styles.auth__field}>
                            <span className='material-icons-outlined'>lock</span>
                            <input type={isVisible ? "text" : "password"} placeholder="Password"
                                   {...register('password', {required: true, minLength: 6})}/>
                            <span className='material-icons-outlined' onClick={() => setIsVisible(!isVisible)}>
                                {isVisible ? "visibility" : "visibility_off"}</span>
                        </div>
                        {errors.password && <span>Password is invalid</span>}
                    </div>
                </form>
                <Link href='/' className={styles.auth__link}>
                    <h5>Forgot your password?</h5>
                </Link>
            </div>
            <button className={styles.auth__button}>
                <span className='material-icons-outlined'>login</span>
                <div>Login</div>
            </button>
            <Link href='/' className={styles.auth__register}>
                <h5>Don’t have an account yet? Register</h5>
            </Link>
        </div>
    )
}

export default AuthPage
