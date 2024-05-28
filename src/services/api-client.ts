import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0097543f712d4070b05e422bc35e67d8'
    }
});