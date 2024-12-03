import axios from "axios";

const instance=axios.create({
    baseURL:"http://8.219.203.38:5000",   //baseURL: "http://localhost:5000"
});

export default instance;