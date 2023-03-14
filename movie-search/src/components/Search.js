//import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import { HiSearch} from "react-icons/hi";

export default function Search({setSearch, getMovies}){
    const handleSubmit = (event) =>{
        event.preventDefault()
    }

    const handleSearch = (event) =>{
        setSearch(event.target.value)
        console.log(event.target.value)

    }
    /*return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Pannekaker.." onChange={handleSearch} />
            <button type="submit" onClick={getRecipes}><MagnifyingGlassIcon/></button>
        </form>
    )
     */

    return (
    //remove one section, alt fieldset?
        <section className="search-bar">
             <h3>Søk</h3>
            <section className="search-section">
                <form onSubmit={handleSubmit} className="find-film">
                    <input type="text" id="title" name="title" placeholder="Tittel.." onChange={handleSearch}/>

                    <button type="submit" className="search-btn" onClick={getMovies}>
                        <HiSearch className='searc-icon' size={24} />
                    </button>
                </form>
            </section>
        </section>

    )
}
