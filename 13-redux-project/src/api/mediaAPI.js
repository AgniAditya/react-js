import axios from 'axios'

const UNPLASH_KEY = import.meta.env.VITE_UNPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY


export async function getImages(query,page=1,per_page=10) {
    const getImagesFromUnplash = await axios.get("https://api.unsplash.com/search/photos",{
        params: {query,page,per_page},
        headers: {Authorization: `Client-ID ${UNPLASH_KEY}`}
    })

    return getImagesFromUnplash.data.results
}


export async function getVidoes(query,page=1,per_page=10) {
    const getVideosFromPexels = await axios.get("https://api.pexels.com/v1/videos/search",{
        params: {query,page,per_page},
        headers: {Authorization: PEXELS_KEY}
    })

    return getVideosFromPexels.data.videos
}

export async function getGIFs(query,page=1,per_page=10) {
    const getGIFsFromGIPHY = await axios.get("https://api.giphy.com/v1/gifs/search",{
        params: {
            api_key: GIPHY_KEY,
            q: query,
            limit: per_page
        }
    })

    return getGIFsFromGIPHY.data.data
}