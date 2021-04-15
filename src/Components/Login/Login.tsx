import React from "react";
import {useFormik} from "formik";

const Login = () => {
    return <div>
        <h1>Login</h1>
        <LoginForm />
    </div>

}
export default Login
export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
export const LoginForm  = () => {
    const formik  = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return <form onSubmit={formik.handleSubmit}>
        <div>
            <input
                placeholder={'Login'}
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}
            />
        </div>
        <div>
            <input
                placeholder={'Password'}
                name='password'
                onChange={formik.handleChange}
                value={formik.values.password}
            />
        </div>
        <div>
            <input
                name='rememberMe'
                onChange={formik.handleChange}
                value={formik.values.rememberMe}
                type={'checkbox'}/> remember me

        </div>
        <div>
            <button type="submit">Login</button>
        </div>
    </form>
}
