import axios from 'axios';

const instance=axios.create({
    baseURL:"https://my-burger-react-app-b90db.firebaseio.com/"
});

export default instance;