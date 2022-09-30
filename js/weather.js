

const APIKey = 'pyKG2EnzcpE30RwldHY6fLV4XY5aGaGC'
const getcityUrl = cityName => `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const fetchData = async url => {
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error('não foi possivel obter os dados')
        }

       return response.json()
    }catch ({name, message }) {
        alert(`${name}: ${message}`)
    }
}

const getCityData = cityName => fetchData(getcityUrl(cityName))

getCityData('São Paulo')
.then(console.log)

/*const getCityWeather = async cityName => {
    try {
        const { Key } = await getCityData(cityName)
        const cityWeatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}`
        const response = await fetch(cityWeatherUrl)

        if (!response.ok) {
            throw new Error('não foi possivel obter os dados')
        }

       const [cityWeatherData] = await response.json()
       
       return cityWeatherData
    }catch ({name, message }) {
        alert(`${name}: ${message}`)
    }
}

getCityWeather('São Paulo')

*/