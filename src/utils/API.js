import axios from 'axios'

const ARCGISValidator = axios.create({
    baseURL: `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?f=json&x=x`
})

export { ARCGISValidator }