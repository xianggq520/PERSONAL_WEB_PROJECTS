import axios from "../index";

export function fetch_a(...url){
    return axios.get(...url);
}

export function fetch_b(url, config){
    return axios.get(url, config);
}