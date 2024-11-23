import * as Yup from 'yup';

// Validation schema using Yup
export const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

// Initial form values
export const initialValues = {
  username: '',
  email: '',
  password: '',
};

// Form submission handler
export const handleSubmit = (values) => {
  console.log('Form submitted:', values);
};