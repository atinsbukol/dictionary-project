import React, {useState} from "react";
import axios from "axios";
import Results from "./Results"
import "./Dictionary.css";



export default function Dictionary (props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword)
    // to hold an object, use {}
    let [results, setResults] = useState(null)
    let [loaded, setLoaded] = useState(false)

    function handleResponse (response)
    { console.log(response.data[0]);
        setResults(response.data[0])

    }

    function search () {
        // documentation: https://api.dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse)

    }




    function handleSubmit (event){
        event.preventDefault()
        search()
    
    
}
   
function handleKeywordChange (event) {
        setKeyword(event.target.value)

    }

    function load () {
        setLoaded(true);
        search()
    }


    if (loaded) {

    
    return (<div className="Dictionary">
        
        <section>
            <h1>What are you looking for?</h1>
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
        </form>
        <div className="hint">
            Suggested words: sunset, wine, man ...

        </div>
        </section>
        <Results results = {results} />

    </div> );
    } else {
        load()
        return "loading..."
    }
} 