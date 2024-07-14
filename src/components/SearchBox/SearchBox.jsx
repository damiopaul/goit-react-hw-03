




export default function SearchBox ({searchValue, onChange}) {

    return (
        <div>
            <input
             type="text"
             name="Search"
             value={searchValue}
             onChange={onChange} />
        </div>
    )
    
}