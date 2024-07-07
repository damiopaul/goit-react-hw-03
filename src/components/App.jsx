import { useState } from 'react'
// import ContactForm from "./ContactForm/ContactForm.jsx"
import ContactList from "./ContactList/ContactList.jsx"
import SearchBox from './SearchBox/SearchBox.jsx';





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

const App = () => {
      const [contacts, setContacts] = useState ([
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ]
      )

      const [searchValue, setSearchValue] = useState ('')



      return (
        <div>
          <h1>Phonebook</h1>
          <ContactList contacts = {contacts}/>
          <SearchBox />
        </div>
      )


};



export default App