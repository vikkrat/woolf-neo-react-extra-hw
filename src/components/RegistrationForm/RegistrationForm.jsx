import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Обовʼязково'),
    email: Yup.string().email('Невірний формат email').required('Обовʼязково'),
    password: Yup.string().min(6, 'Мінімум 6 символів').required('Обовʼязково'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field type="text" name="name" className={css.input} />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>

        <label className={css.label}>
          Email
          <Field type="email" name="email" className={css.input} />
          <ErrorMessage name="email" component="div" className={css.error} />
        </label>

        <label className={css.label}>
          Password
          <Field type="password" name="password" className={css.input} />
          <ErrorMessage name="password" component="div" className={css.error} />
        </label>

        <button type="submit" className={css.button}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
