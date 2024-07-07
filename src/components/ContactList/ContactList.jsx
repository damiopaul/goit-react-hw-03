
import { Formik } from 'formik';
import Contact from '../Contact/Contact.jsx';


export default function ContactList ( {contacts} ) {
    return (
        <ul>
            {contacts.map(contact => (
                <Contact key={contact.id} id={contact.id} name={contact.name} number={contact.number}/>
            ))}
        </ul>
    )
}