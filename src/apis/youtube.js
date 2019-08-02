import axios from 'axios';

const KEY = 'AIzaSyBz0gz3V4Io4smJCFn1q8Rr8-sIoYWkgxQ';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params :{
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        
    }
});

