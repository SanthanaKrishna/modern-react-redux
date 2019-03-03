import axios from 'axios';

const KEY ='AIzaSyDUE2sf8JeRRT79BH_vA5tMU01KtFUCgAo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
