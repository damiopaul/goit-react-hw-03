import { Formik, Form } from 'formik';
import css from "./Contact.module.css"


export default function Contact ({id, name, number, onDelete}) {

    return (
       <li className={css.contactItem}>
        <div className={css.contactData}>
       <p>{name}</p>  
       <p>{number}</p>
       </div>
       <button onClick ={()=> onDelete(id)}>Delete</button>

       
       </li>

    )
}