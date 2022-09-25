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

getCityData('São Paulo')