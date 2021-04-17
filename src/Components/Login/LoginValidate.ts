

export type ValidateType = {
    login?: string
    password?: string
    rememberMe?: string
}
export const validate = (values: { login: string | any[]; password: string | any[]; rememberMe: any; }) => {
    const errors:ValidateType = {};
    if (!values.login) {
        errors.login = 'Required';
    } else if (values.login.length > 15) {
        errors.login = 'Must be 15 characters or less';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length > 20) {
        errors.password = 'Must be 20 characters or less';
    }

    if (!values.rememberMe) {
        errors.rememberMe = 'Required';
    }

    return errors;
};


