import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotes-03-api.herokuapp.com"
})