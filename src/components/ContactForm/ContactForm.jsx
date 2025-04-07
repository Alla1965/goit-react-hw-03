//Этот компонент создаёт форму для добавления контакта 
//с помощью библиотеки Formik.

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

//Компонент получает один пропс — onAdd,
// функцию для добавления нового контакта(передаётся из App.jsx).

export default function ContactForm({onAdd }) {
const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Мінімум 3 символи')
      .max(50, 'Максимум 50 символів')
      .required("Ім'я обов'язкове"),
    number: Yup.string()
      .min(3, 'Мінімум 3 символи')
      .max(50, 'Максимум 50 символів')
      .required('Номер обов’язковий'),
  });

    return (
       
      <Formik initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
    
            onSubmit={(values, actions) => {
                    const newContact = {
          id: nanoid(),
          name: values.name,
          number: values.number,
             };
console.log(newContact);

             onAdd(newContact);

             actions.resetForm();
      }}>
            <Form className={css.form} >
                <p className={css.label}>Name</p>
             <Field
                 className={css.field}
                 type="text"
                 name="name"
                 placeholder="Name"
          />
          <ErrorMessage name="name" component="div" className={css.error} />
                <p className={css.label}>Phone number</p>
             <Field
                 className={css.field}
                 type="tel"
                 name="number"
                 placeholder="Phone number"
          /> 
           <ErrorMessage name="number" component="div" className={css.error} />

                  <button className={css.btn} type="submit">Add contact</button>
          </Form>
        </Formik>
      );
    };
