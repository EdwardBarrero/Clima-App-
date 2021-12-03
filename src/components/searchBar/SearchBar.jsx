import React, { useState } from 'react'
import './searchBar.css'

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('')
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            onSearch(city)
            setCity('')
        }} >
            <input className="inputSearch" type="text" placeholder=" Ciudad..." value={city} onChange={e => setCity(e.target.value)} />
            <input className="btnInput" type="submit" value="Agregar" />
        </form>
    )
}

export default SearchBar
