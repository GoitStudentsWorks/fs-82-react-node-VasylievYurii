// import React from 'react';
import { Formik, Form } from 'formik';
import './useForm.css';
import RadioUseForm from './RadioUseForm/RadioUseForm';
import { object, string, number } from 'yup';
import InputUseForm from './InputUseForm/InputUseForm';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

let userSchema = object({
  name: string().required(),
  email: string().email(),
  sex: string().required(),
  blood: number().required().positive().integer(),
  height: number().required().positive().integer().min(150),
  levelActivity: number().required().positive().integer(),
  currentWeight: number().required().positive().integer().min(35),
  desiredWeight: number().required().positive().integer().min(35),
  birthday: string().required(),
});

const initialValues = {
  name: 'Anna Rybachok',
  email: 'annarybachok@gmail.com',
  height: 0,
  currentWeight: 0,
  desiredWeight: 0,
  blood: 0,
  sex: '',
  levelActivity: 0,
  birthday: '05.05.2020',
};

const UserForm = () => {
  const { userData } = useSelector((state) => state.auth);
  useEffect(() => {
    if (userData) {
      initialValues.email = userData.email;
    }
  }, [userData]);

  const handleSubmit = (values) => {
    const { name, email, ...rest } = values;

    const nameEmailObject = { name, email };
    const restObject = { ...rest };

    console.log(nameEmailObject);
    console.log(restObject);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off" className="formik">
          {errors.email && touched.email && (
            <div className="error-mess">{errors.email}</div>
          )}
          {errors.height && touched.height && (
            <div className="error-mess">{errors.height}</div>
          )}
          {errors.currentWeight && touched.currentWeight && (
            <div className="error-mess">{errors.currentWeight}</div>
          )}
          {errors.desiredWeight && touched.desiredWeight && (
            <div className="error-mess">{errors.desiredWeight}</div>
          )}
          <InputUseForm />
          <RadioUseForm />
          <button type="submit" className="submit-btn">
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
