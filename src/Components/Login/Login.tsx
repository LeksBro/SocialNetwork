import React from "react";
import {useFormik} from "formik";
import {validate} from "./LoginValidate";
const Login = () => {
    return <div>
        <h1>Login</h1>
        <LoginForm />
    </div>

}
export default Login


export const LoginForm  = () => {

    const formik  = useFormik({

        initialValues: {
            login: '',
            password: '',
            rememberMe: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },

    });


    return <form onSubmit={formik.handleSubmit}>
        <div>
            <input
                type={'text'}
                {...formik.getFieldProps('login')}
            />
            {formik.touched.login && formik.errors.login ? (
                <div style={{color: "red"}}>{formik.errors.login}</div>
            ) : null}
        </div>
        <div>
            <input
                type={'text'}
                {...formik.getFieldProps('password')}
            />
           {formik.touched.password && formik.errors.password ? (
                <div style={{color: "red"}}>{formik.errors.password}</div>
            ) : null}
        </div>
        <div>
            <input
                type={'checkbox'}
                {...formik.getFieldProps('rememberMe')}
            />
                {formik.touched.rememberMe && formik.errors.rememberMe ? (
                <div style={{color: "red"}}>{formik.errors.rememberMe}</div>
            ) : null}
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
    </form>
}
