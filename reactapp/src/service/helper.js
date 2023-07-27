import axios from "axios";
import { getToken } from '../auth';


<<<<<<< HEAD
export const BASE_URL='https://8080-aafcdfaccacecbefdccdeaeaadbdbabf.project.examly.io';
=======
export const BASE_URL='https://8080-cfeacaaecbacecbefdccdeaeaadbdbabf.project.examly.io';
>>>>>>> 9b2078126a42e5bf5ec7861f38c9f43be6f53b47

export const myAxios=axios.create({
    baseURL:BASE_URL
});

export const privateAxios=axios.create({
    baseURL:BASE_URL
});

// privateAxios.interceptors.request.use(config=>{
//     const token = getToken();
//     if(token){
//         config.headers.common.Authorization='Bearer ${token}'
//         return config;
//     }
// },error=>Promise.reject(error))
privateAxios.interceptors.request.use(
    (config) => {
      const token = getToken();
      // console.log(token);
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
        // console.log(config);
      }
  
      return config;
    },
    (error) => Promise.reject(error)
  );