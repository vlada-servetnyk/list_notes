import { Field, Form, Formik } from "formik"
import s from './FormPlayList.module.css'

const FormPlayList = ({addSingl}) => {
    const initialValues = {
        title: '',
        artist: '',
        like: false
    };

    const handleSubmit = (values, actions) => {
        const newSingl = {
            id: crypto.randomUUID(),
            title: values.title,
            artist: values.artist,
            like: false
        };
        addSingl(newSingl);
        actions.resetForm();
        
    };

  return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit} >
          <Form className={s.form}>
              <Field
                  className={s.input}
                  type='text'
                  name='title'
                  placeholder='Title singl'
              />
              <Field
                  className={s.input}
                  type='text'
                  name='artist'
                  placeholder='Artist singl'
              />
              <button className={s.btn_add} type='submit' >Add singl</button>
          </Form>
      
    </Formik>
  )
}

export default FormPlayList
