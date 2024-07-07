import { Formik, Form } from 'formik';
import css from "./Contact.module.css"


export default function Contact ({id, name, number}) {

    return (
       <li className={css.contactItem}>
        <div className={css.contactData}>
       <p>{name}</p>  
       <p>{number}</p>
       </div>

       <Formik initialValues={{}} onSubmit={() => {}}>
            <Form>
                <button type="submit">Delete</button>
            </Form>
        </Formik>
       </li>

    )
}