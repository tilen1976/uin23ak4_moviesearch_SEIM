//import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import { HiSearch} from "react-icons/hi";

export default function Search(){


    return (
    //remove one section, alt fieldset?
        <section className="search-bar">
             <h3>Søk</h3>
            <section className="search-section">
                <form className="find-film">
                    <input type="text" id="title" name="title" className="input-field" placeholder="Tittel..">
                    </input>
                    {/**Lage forstørrelsesglass, fjerne tekst*/}

                    <button type="submit" className="search-btn">
                        <HiSearch className='searc-icon' size={24} />
                    </button>
               
                    {/*<button type="submit" className="search-btn"><MagnifyingGlassIcon />Søk
                    </button>*/}
                </form>
            </section>
        </section>

    )
}
