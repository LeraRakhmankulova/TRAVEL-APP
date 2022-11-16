import styles from './index.module.sass'
import {useForm} from "react-hook-form";
import {IAuthField} from "@/models/interfaces/authField.interface";

const Input = ({label, pattern}) => {
    return (
        <div className={styles.input__wrapper}>
            <div className={styles.input__field}>
                <span className='material-icons-outlined'>mail</span>
                <input {...register({label}, {
                    required: true,
                    pattern: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                })}
                       type="text" placeholder="Email"/>
            </div>
            {errors.email && <span>Email is invalid</span>}
        </div>
    )
}

export default Input