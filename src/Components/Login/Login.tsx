import React from "react";
import {useFormik} from "formik";
import {validate} from "./LoginValidate";
import {connect} from "react-redux";
import {loginThunkCreator} from "../Redux/auth-Reducer";
import {StateType} from "../Redux/State";
import {Redirect} from "react-router";

type MapDispatchToPropsType ={
    loginThunkCreator: (email: string, password: string, rememberMe: boolean)=> void
}
type LoginPropsType = {
    loginThunkCreator: (email: string, password: string, rememberMe: boolean )=> void
    isAuth: boolean
}
const Login = (props: LoginPropsType) => {

    if (props.isAuth){
        return  <Redirect to={'/profile'} />
        }

    return <div>
        <h1>Login</h1>
        <LoginForm {...props} />
    </div>
}
export const LoginForm  = (props: LoginPropsType) => {
    const formik  = useFormik({

        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate,
        onSubmit: values => {
            props.loginThunkCreator(values.email, values.password, values.rememberMe)
            alert(JSON.stringify(values, null, 2));
        },

    });

    return <form onSubmit={formik.handleSubmit}>
        <div>
            <input
                type={'text'}
                {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
                <div style={{color: "red"}}>{formik.errors.email}</div>
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
type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect<MapStateToPropsType,MapDispatchToPropsType,{}, StateType>(mapStateToProps,{loginThunkCreator})(Login)
