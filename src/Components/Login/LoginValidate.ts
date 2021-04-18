

export type ValidateType = {
    email?: string
    password?: string
    rememberMe?: string
}
export const validate = (values: { email: string; password: string | any[]; rememberMe:  boolean; }) => {
    const errors:ValidateType = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length > 20) {
        errors.password = 'Must be 20 characters or less';
    }

    return errors;
};


