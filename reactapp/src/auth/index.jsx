//isLoggedIn
export const isLoggedIn=()=>{
    let data=localStorage.getItem("data")
    if(data==null) return false;
    
    else return true;
};

//doLogin=> data=>set to localstorage
export const doLogin=(data,next)=>{
    localStorage.setItem("data",JSON.stringify(data));
    next()  
};

//doLogout=> remove from localStorage
export const doLogout=()=>{
    localStorage.removeItem("data")
    //next()
};
//get currentUser
export const getCurrentUserDetail=()=>{
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem("data")).user;
    } else{
        return undefined;
    }
};

export const getToken=()=>{
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem("data")).token;
    } else{
        return null;
    }
}