 import { apiSlice } from "./apiSlice";
 const USER_URL ='/api/user';

 export const userApiSlice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(data)=>({
                url:`${USER_URL}/login`,
                method:'POST',
                body:data,
            })
        })
    })
 })

 export const {useLoginMutation} =userApiSlice;