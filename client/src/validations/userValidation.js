import * as yup from 'yup';

export const userSchema = yup.object().shape({
  username: yup.string().min(5).max(20).required('Please enter username'),
  password: yup.string().min(5).max(20).required('Please enter password'),
});

export const registerUserSchema = yup.object().shape({
  username: yup.string().min(5).max(20).required('Please enter username'),
  password: yup.string().min(5).max(20).required('Please enter password'),
});
