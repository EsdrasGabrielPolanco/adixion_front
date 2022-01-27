import { fetchFromAPI } from "../config/api";

// VERTICALS

export const login = async () => {
    const res = await fetchFromAPI("getFatherVerticals");
    return res;
}

// JOBS 

export const createUser = async (title, type) => {
    const res = await fetchFromAPI("getJobByTypeAndTitle", {title: title, type: type});
    return res;
}
