import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.unsplash.com',
   headers: {
        Authorization: 'Client-ID 90ed05d321a92177e520896816081dea8e1971a1a1a0d70dd146aa290d9df82d'
     }
})