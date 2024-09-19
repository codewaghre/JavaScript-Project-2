
// quvery string
const countryName = new URLSearchParams(location.search).get('name')
// console.log(countryName);

//Dom
const flagImage = document.querySelector('.country-details img')
const countryNameH1 = document.querySelector('.country-details h1')
const nativeName = document.querySelector('.native-name')
const population = document.querySelector('.population')
const region = document.querySelector('.region')
const subRegion = document.querySelector('.sub-region')
const capital = document.querySelector('.capital')
const topLevelDomain = document.querySelector('.top-level-domain')
const currencies = document.querySelector('.currencies')
const languages = document.querySelector('.languages')
const borderCountries = document.querySelector('.border-countries')
const themeChanger = document.querySelector('.theme-changer')


fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((resp) => resp.json())
    .then(([data]) => {
        // console.log(data)

        //Country  top Domain
        topLevelDomain.innerText = data.tld.join(', ')

        // Country flag
        flagImage.src = data.flags.svg

        // Country  Name
        countryNameH1.innerText = data.name.common

        //Country  populaton
        population.innerText = data.population.toLocaleString('en-IN')

        //Country  region
        region.innerText = data.region


        //Country nativeName
        if (data.name.nativeName) {
            nativeName.innerText = Object.values(data.name.nativeName)[0].common
        } else {
            nativeName.innerText = data.name.common
        }

        // Country Currencies 
        if (data.currencies) {
            currencies.innerText = Object.values(data.currencies)
                .map((currency) => currency.name)
                .join(', ')
        }
        
        //Country Languages 
        if (data.languages) {
            languages.innerText = Object.values(data.languages).join(', ')
        }
        
        //Country Capital
        if (data.capital) {
            capital.innerText = data.capital?.[0]
        }
        
        //Country  Subregion
        if (data.subregion) {
            subRegion.innerText = data.subregion
        }

        // Country Border
        if (data.borders) {
            data.borders.forEach((borders) => {
                // console.log(borders);
                fetch(`https://restcountries.com/v3.1/alpha/${borders}`)
                    .then((resp) => resp.json())
                    .then(([borderCountry]) => {
                        // console.log(borderCountry);

                        const borderCountryTag = document.createElement('a')
                        borderCountryTag.innerText = borderCountry.name.common
                        borderCountryTag.href = `country.html?name=${borderCountry.name.common}`

                        borderCountries.append(borderCountryTag)
                    }
                )
            })
        }

    })

//Dark mode
themeChanger.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})