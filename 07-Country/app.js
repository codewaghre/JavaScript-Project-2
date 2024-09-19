
// Dom 
const countriesContainer = document.querySelector('.countries-container')
const filterByRegion = document.querySelector('.filter-by-region')
const searchInput = document.querySelector('.search-container input')
const themeChanger = document.querySelector('.theme-changer')

let allCountriesData 

//fetch the data
fetch("https://restcountries.com/v3.1/all")
    .then((resp) => resp.json())
    .then((data) => {
        renderCountries(data)
        allCountriesData = data
    }
)

// ReUse code for fetch country
function renderCountries(data) {
     countriesContainer.innerHTML = ''
    data.forEach(country => {
            const countryCard = document.createElement("a")
            countryCard.classList.add("country-card")
            countryCard.href = `./country.html?name=${country.name.common}`

            countryCard.innerHTML = `
            <img src="${country.flags.svg}" alt="flag">
                <div class="card-text">
                <h3 class="card-title">${country.name.common}</h3>
                <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
                <p><b>Region: </b>${country.region}</p>
                <p><b>Capital: </b>${country.capital?.[0]}</p>
            </div>
            `
            countriesContainer.append(countryCard)

        })
}


//filter 
filterByRegion.addEventListener('change', (e) => {
  fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
    .then((res) => res.json())
    .then(renderCountries)
})

// Search 
searchInput.addEventListener('input',  (e) => {
  const filteredCountries = allCountriesData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
  renderCountries(filteredCountries)
})


//Dark mode
themeChanger.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})