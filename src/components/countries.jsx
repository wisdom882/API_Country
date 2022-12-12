import React, {useState, useEffect} from 'react'
import './countries.css'
const url = 'https://restcountries.com/v3.1/all'

const Countries = () => {
    const [countries, setCountries] = useState([])

    const fetchCountryData = async () => {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
        
    }

    useEffect(() => {
        fetchCountryData()
    }, [])
    return(
        <>
           <section className="grid">
            {countries.map((country) => {
                    const {name, population, flags, capital, numericCode, region} = country
                    return <article key={numericCode}>
                        <div>
                            <img src={flags.png} alt={name}/>
                                <div className="info">
                                <h2>{name.common}</h2>
                                <h4>Population: <span>{population}</span></h4>
                                <h4>Region: <span>{region}</span></h4>
                                <h4>Capital: <span>{capital}</span></h4>
                                </div>
                        </div>
                    </article>
                })}
           </section>
        </>
    )
}

export default Countries