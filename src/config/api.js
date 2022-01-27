import Parse from 'parse'
import { getCredencials } from "./credentials"

const {apiId, jsKey, urlServer} = getCredencials();

export const fetchFromAPI = async ( url, params) => {
    Parse.initialize(apiId, jsKey);
    Parse.serverURL = urlServer;
    Parse.User.enableUnsafeCurrentUser();
    return await Parse.Cloud.run(url, params);
}

