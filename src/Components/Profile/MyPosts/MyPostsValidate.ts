export type ValidateType = {
    text?: string
}
export const validate = (values: { text: string; }) => {

    const errors:ValidateType = {};
    if (values.text.trim() === ''){
        errors.text = 'The field must not be empty';
    }
    else if (values.text.length > 200) {
        errors.text = 'Must be 200 characters or less';
    }
    return errors
}