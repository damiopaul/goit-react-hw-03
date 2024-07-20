import { useEffect, useState } from 'react'
import ContactForm from "./ContactForm/ContactForm.jsx"
import ContactList from "./ContactList/ContactList.jsx"
import SearchBox from './SearchBox/SearchBox.jsx';
import css from "./App.module.css"





// export default function App () {
//  const [contacts, setContacts] = useState ([
//   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
// ]);
// console.log (contacts)

//   return (
//     <div>
//   <h1>Phonebook</h1>
//   {/* <ContactForm /> */}
//   {/* <SearchBox /> */}
//   <ContactList contacts = {contacts}/>
// </div>

//   )
// }
const defaultContacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
]
const App = () => {
      const [contacts, setContacts] = useState(() => {
        const savedContacts = localStorage.getItem("contacts");
        return savedContacts ? JSON.parse(savedContacts) : defaultContacts;
      })

      const [searchValue, setSearchValue] = useState ("")

      useEffect (() => {
        window.localStorage.setItem("contacts",  JSON.stringify(contacts))
      }, [contacts])

      const handleChange = (evt) => {
        setSearchValue(evt.target.value);
      }
      
      const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchValue.toLowerCase()))


      const deleteContact = (contactId) => {
        setContacts (prevContacts => prevContacts.filter(contact => contact.id !== contactId))
      }

      const addContact = (newContact) => {
        setContacts (prevContacts => [...prevContacts, newContact]);
      }


      return (
        <div className={css.container}>
          <h1>Phonebook</h1>
          <ContactForm addContact={addContact} />
          <SearchBox value={searchValue} onChange={handleChange}/>
          <ContactList contacts = {filteredContacts} onDelete={deleteContact}/>
          
        </div>
      )


};



export default App