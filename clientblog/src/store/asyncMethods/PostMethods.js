import axios from "axios";
import {CREATE_ERRORS , SET_LOADER , CLOSE_LOADER} from "../types/PostTypes";
const token = localStorage.getItem('myToken');
export const createAction = (postData) => 
{
    return async (dispatch) => {
        dispatch({type : SET_LOADER});
        try 
        {
            const configure = {
                header : {
                    Authorization :`Bearer ${token}`
                }
            }

            const {data} = await axios.post('/create_post' , postData , configure);
            dispatch({type : CLOSE_LOADER});
            console.log(data);
        }  
        catch (error) 
        {
            console.log(error.response);
            const {errors} = error.response.data;
            dispatch({type : CLOSE_LOADER});
            dispatch({type : CREATE_ERRORS , payload : errors});
        }
    };
};