import { fetchFromAPI } from "../config/api";

// VERTICALS

export const login = async (data) => {
    // const res = await fetchFromAPI("login", data);
    const res = await fetch('http://localhost:3000/login',{
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return res;
}

// JOBS 

export const createUser = async (title, type) => {
    const res = await fetchFromAPI("getJobByTypeAndTitle", {title: title, type: type});
    return res;
}
