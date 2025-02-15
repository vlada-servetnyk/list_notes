import { Formik, Form, Field } from "formik";
import s from './FormAdd.module.css'

const FormAdd = ({addNote}) => {


    const initialValues = {
        name: ''
    }
    const handleSubmit = (values, actions) => {
        const newNote = {
            id: crypto.randomUUID(),
            name: values.name
        }
        addNote(newNote);
		actions.resetForm();
	};

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={s.form}>
                <Field
                    className={s.input}
                    type="text"
                    name="name" />
                <button className={s.btn_add} type="submit">Add note</button>
            </Form>
        </Formik>
    )
};

export default FormAdd;