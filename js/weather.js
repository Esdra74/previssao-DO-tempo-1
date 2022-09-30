


const APIKey = 'pyKG2EnzcpE30RwldHY6fLV4XY5aGaGC'
const baseUrl = 'http://dataservice.accuweather.com/'


const getcityUrl = cityName => `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getWeatherUrl = ({ Key }) => 
    `${baseUrl}currentconditions/v1/${Key}?apikey=${APIKey}`

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

    const getCityWeather = async cityName => {
    const [cityData] = await getCityData(cityName)
    return fetchData(getWeatherUrl(cityData))
}

getCityWeather('São Paulo')
.then(console.log)