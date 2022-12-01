import styles from './index.module.sass'
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuthField} from "@/models/interfaces/authField.interface";
import {useState} from "react";
import Link from "next/link";
import Icon from "@/components/ui/icon/Icon";
import {signIn} from "next-auth/react";
import {toast} from 'react-toastify';
import {signUp} from "next-auth-sanity/client";
import {useRouter} from "next/router";

const AuthPage = () => {
    const [typeForm, setTypeForm] = useState<'login' | 'register'>('login')
    const [isVisible, setIsVisible] = useState(false)
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<IAuthField>({
        mode: 'onChange'
    })

    const isReg = typeForm === 'register'

    const { push } = useRouter()

    const onSubmit: SubmitHandler<IAuthField> = async data => {
        if (isReg) {
            await signUp(data)
        } else {
            const response = await signIn('sanity-login', {
                redirect: false,
                ...data,
            })
            if (response.error) {
                toast.error(response.error)
                return
            }

            await push('/profile')
        }
    }

    return (
        <div className={styles.auth}>
            <div className={styles.auth__wrapper}>
                <div className={styles.auth__header}>
                    <Icon href="/" name="arrow_back_ios_new"/>
                </div>
                <div className={styles.auth__welcome}>
                    <h2>Hey there,</h2>
                    {typeForm == 'login' ?
                        (<h1>Welcome Back</h1>) :
                        (<h1>Create an Account</h1>)}
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.auth__form}>
                    {isReg && (
                        <>
                            <div className={styles.auth__field__wrapper}>
                                <div className={styles.auth__field}>
                                    <span className='material-icons-outlined'>person</span>
                                    <input {...register('name', {
                                        required: true
                                    })}
                                           type="text" placeholder="First name"/>
                                </div>
                                {errors.email && <span>This is a required field!</span>}
                            </div>
                            <div className={styles.auth__field__wrapper}>
                                <div className={styles.auth__field}>
                                    <span className='material-icons-outlined'>person</span>
                                    <input {...register('surname', {
                                        required: true
                                    })}
                                           type="text" placeholder="Last name"/>
                                </div>
                                {errors.email && <span>This is a required field!</span>}
                            </div>
                        </>
                    )}

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
                        {errors.password && <span>Password must be longer than 6 characters</span>}
                    </div>
                    <button className={styles.auth__button} type='submit'>
                        <span className='material-icons-outlined'>login</span>
                        <div>{typeForm == 'register' ? 'Register' : 'Login'}</div>
                    </button>
                </form>
                <Link href='/pages' className={styles.auth__link}>
                    <h5>Forgot your password?</h5>
                </Link>
            </div>

            <button onClick={() => setTypeForm('register')}>
                <h5>Don’t have an account yet? Register</h5>
            </button>
        </div>
    )
}

export default AuthPage
