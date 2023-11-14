import { useEffect, useRef, useState } from "react";
import styles from './ControlledFormformKeys.module.css'

const formInitalState = {
    username: '',
    password: '',
    age: '',
    gender: 'm',
    swimming: false,
    shopping: false,
    reading: false,
}

const ControlledFormwWithKeys = ({ formRef }) => {
    const [formValues, setFormValues] = useState(formInitalState);
    const usernameInputRef = useRef();
    const isMountedRef = useRef(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        usernameInputRef.current.focus();
    }, []);

    // Execute only on update!!
    useEffect(() => {
        if (!isMountedRef.current) {
            isMountedRef.current = true;
            return;
        }
        console.log('Updated!');
    }, [formValues])


    const changeHandler = (e) => {
        let value = e.target.value;

        // if(e.target.type === 'number'){
        //     value = Number(value);
        // }

        switch (e.target.type) {
            case 'number':
                value = Number(value);
                break;

            case 'checkbox':
                value = e.target.checked;
                break;

            default:
                value = e.target.value;
                break;
        }

        setFormValues(state => ({
            ...state,
            [e.target.name]: value
        }))
    }

    const resetFormHandler = () => {
        setFormValues('')
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formValues);
        resetFormHandler();
    }

    const onCheckboxChange = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.checked
        }))
    };

    const ageValidator = () => {
        let age = formValues.age;
        if (age < 0 || age >= 120) {
            setErrors(state => ({
                ...state,
                age: 'The age is invalid'
            }))
        } else {
            if (errors.age) {

                setErrors(state => ({ ...state, age: '' }))
            }
        }
    }

    const usernameValidator = () => {
        let username = formValues.username;
        console.log(typeof username);
        if (username.length <= 0) {
            setErrors(state => ({
                ...state,
                username: 'You must enter your username!'
            }))
        } else if(typeof username == 'number'){
            setErrors(state => ({
                ...state,
                username: 'It cannot be a number!'
            }))
        }
         else {
            if (errors.username) {
                setErrors(state => ({ ...state, username: '' }))
            }
        }

    }

    return (
        <>
            <h1>Controlled Form w Form Keys</h1>

            <form ref={formRef} onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        ref={usernameInputRef}
                        type="text"
                        id="username"
                        name="username"
                        value={formValues.username}
                        onChange={changeHandler}
                        onBlur={usernameValidator}
                    />
                </div>
                {errors && (
                    <p className={styles.usernameError}>{errors.username}</p>
                ) }

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formValues.password}
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formValues.age}
                        onChange={changeHandler}
                        onBlur={ageValidator}
                        className={errors.age && styles.inputField}
                    />
                    {errors && (
                        <p className={styles.ageError}>{errors.age}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="gender" onChange={changeHandler} value={formValues.gender}>
                        <option value="f">Female</option>
                        <option value="m">Male</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <h3>Hobbies</h3>
                    <label htmlFor="hobbies">Swimming</label>
                    <input type="checkbox" name="swimming" id="swimming" checked={formValues.swimming} onChange={changeHandler} />
                    <label htmlFor="hobbies">Shopping</label>
                    <input type="checkbox" name="shopping" id="shopping" checked={formValues.shopping} onChange={changeHandler} />
                    <label htmlFor="hobbies">Reading</label>
                    <input type="checkbox" name="reading" id="reading" checked={formValues.reading} onChange={changeHandler} />
                </div>

                <div>
                    <button type="submit">Register</button>
                    <button type="button" onClick={resetFormHandler}> Reset</button>
                </div>
            </form>


        </>
    )
}


export default ControlledFormwWithKeys;