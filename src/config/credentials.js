const API_SERVER = "local" // *** CHANGE TO SELECT YOUR CREDENTIALS ***  ::  "production" || "develop" || 'local' 

const production = {
    urlServer : "",
}



const local = {
    urlServer : "http://localhost:3001/",
   
}


export const getCredencials = () =>{
    switch(API_SERVER){
        case "production":
            return production;
        case "local":
            return local;
        default:
            return production;
    }
}