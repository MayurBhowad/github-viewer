import axios from "axios"
import { LOADING, SET_DATA } from "../types.redux";


export const getDataFromApi = (history, string) => dispatch => {
    if (string !== undefined) {
        async function ab() {
            let GithubData = [];
            let userInfo = await axios.get(`https://api.github.com/users/${string}`);
            GithubData.userInfo = userInfo.data;
            let AllRapo = await axios.get(`https://api.github.com/users/${string}/repos?page=2&per_page=20`)
            GithubData.AllRapo = AllRapo.data;
            let stared = await axios.get(`https://api.github.com/users/${string}/starred?page=1&per_page=20`);
            GithubData.stared = stared.data;
            dispatch({ type: LOADING })
            dispatch({ type: SET_DATA, payload: GithubData })
            history.push('/user')
        }
        ab()
    }
}