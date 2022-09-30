/*const APIKey = 'pyKG2EnzcpE30RwldHY6fLV4XY5aGaGC'

const getCityUrl = cityName => `http://dataservice.accuweather.com/locations/v1/cities/search?apykey=${APIKey}&q=${cityName}`

const getCityData = async cityName => {
    try {
        const cityUrl = getCityUrl(cityName)
        const response = await fetch(cityUrl)

       if (!response.ok) {
        throw new Error('não foi possivel obter os dados')
       }

       console.log(await response.json())
    } catch({name, messege}) {
        alert(`${name}: ${messege}`)
    }
}
getCityData()*/



const APIKey = 'pyKG2EnzcpE30RwldHY6fLV4XY5aGaGC'
const getcityUrl = cityName => `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityData = async cityName => {
    try {
        const cityUrl = getcityUrl(cityName)
        const response = await fetch(cityUrl)

        if (!response.ok) {
            throw new Error('não foi possivel obter os dados')
        }

       const [cityData] = await response.json()
       return cityData
    }catch ({name, message }) {
        alert(`${name}: ${message}`)
    }
}

const getCityWeather = async cityName => {
    try {
        const { Key } = await getCityData(cityName)
        const cityWeatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}`
        const response = await fetch(cityWeatherUrl)

        if (!response.ok) {
            throw new Error('não foi possivel obter os dados')
        }

       const [cityWeatherData] = await response.json()
       debugger
       return cityWeatherData
    }catch ({name, message }) {
        alert(`${name}: ${message}`)
    }
}

getCityWeather('São Paulo')

