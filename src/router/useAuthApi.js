import api from "@/api";
import axios from "axios";



const isAuthenticated = () =>
{
    return axios.get('http://localhost:8000/api/isAuthenticated');
}


export default {

    isAuthenticated,

}