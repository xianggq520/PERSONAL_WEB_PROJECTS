import axios from "../index";

export function fetch_a(url, config){
    return axios.get(url, config);
}

export function fetch_b(url, config){
    return axios.get(url, config);
}