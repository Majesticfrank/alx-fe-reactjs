/* eslint-disable no-undef */
import axios from 'axios';

const apiclient = axios.create({
    baseURL:process.env.REACT_APP_API_GITHUB_API_BASE_URL
});

export const fetchGitHubUser = async(username)=>{
    try{
        const response = await apiclient.get(`/users/${username}`);
    return response.data;
    }catch(error){
        console.error("Error fetching data",error);
        throw error;
    }
};

