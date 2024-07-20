import css from "./SearchBox.module.css"




export default function SearchBox ({searchValue, onChange}) {

    return (
        <div className={css.container}>
            <label htmlFor="Search">Find contacts by name</label>
            <input
             type="text"
             name="Search"
             value={searchValue}
             onChange={onChange} />
        </div>
    )
    
}