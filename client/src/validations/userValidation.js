import * as yup from 'yup';

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// eslint-disable-next-line import/prefer-default-export
export const userSchema = yup.object().shape({
  username: yup.string().min(5).max(20).required('Please enter username'),
  password: yup.string().min(5).max(20).required('Please enter password'),
  fullName: yup.string().min(5).max(20),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Please enter valid phone number')
    .min(7)
    .max(17),
});
