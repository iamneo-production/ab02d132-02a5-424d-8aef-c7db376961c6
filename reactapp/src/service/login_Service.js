import { myAxios } from "./helper";

export const loginUser=(loginDetail)=>{
  return myAxios.post('/api/login',loginDetail).then((response)=>response.data)
}
