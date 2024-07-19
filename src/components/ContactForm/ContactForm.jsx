import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { nanoid } from "nanoid";

const ContactForm = ({ addContact }) => {
    const initialValues = {
        name: '',
        number: ''
    };


    const validationSchema = Yup.object ({
        name: Yup.string()
            .min(3, "Must be at least 3 characters")
            .max(50, "Must be 50 characters or less")
            .required("Required"),
        number: Yup.string()
            .min(3, "Must be at least 3 characters")
            .max(50, "Must be 50 characters or less")
            .required("Required")
        
    });

    const onSubmit = (values, { resetForm }) => {
        const newContact ={
            id: nanoid(),
            ...values
        };
        addContact(newContact);
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        > 
        {formik =>(
            <Form>
                <div>
                    <label htmlFor="name">Name</label>
                    <Field type="text" id="name" name="name"/>
                    <ErrorMessage name="name" component="div"/>
                </div>
                <div>
                    <label htmlFor="number">Number</label>
                    <Field type="text" id="number" name="number"/>
                    <ErrorMessage name="number" component="div"/>
                </div>
                <button type="submit">Add contact</button>
            </Form>
        )}
        </Formik>   
    )
}

export default ContactForm