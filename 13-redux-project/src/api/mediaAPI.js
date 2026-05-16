import axios from 'axios'

const UNPLASH_KEY = import.meta.env.VITE_UNPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY


export async function getImages(query,page=1) {
    const getImagesFromUnplash = await axios.get("https://api.unsplash.com/search/photos",{
        params: {query,page},
        headers: {Authorization: `Client-ID ${UNPLASH_KEY}`}
    })
    console.log(getImagesFromUnplash.data);
    return {
        photos: getImagesFromUnplash.data.results,
        total_pages: getImagesFromUnplash.data.total_pages
    }
}


export async function getVidoes(query,page=1,per_page=15) {
    const getVideosFromPexels = await axios.get("https://api.pexels.com/v1/videos/search",{
        params: {query,page},
        headers: {Authorization: PEXELS_KEY}
    })
    console.log(getVideosFromPexels.data)
    return getVideosFromPexels.data.videos
}

export async function getGIFs(query,offset=0,limit=20) {
    const getGIFsFromGIPHY = await axios.get("https://api.giphy.com/v1/gifs/search",{
        params: {
            api_key: GIPHY_KEY,
            q: query,
            limit: limit,
            offset: offset
        }
    })
    console.log(getGIFsFromGIPHY.data)
    return {
        gifs: getGIFsFromGIPHY.data.data,
        count: getGIFsFromGIPHY.data.pagination.count,
        offset: getGIFsFromGIPHY.data.pagination.offset,
        total_count: getGIFsFromGIPHY.data.pagination.total_count
    }
}