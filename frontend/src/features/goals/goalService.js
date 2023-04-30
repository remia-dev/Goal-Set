import axios from "axios";
axios.defaults.baseURL = `http://localhost:5000`


const API_URL = "/api/goals/"




// Create goals
const createGoal = async(goalData, token) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.post(API_URL, goalData, config)

    return response.data
}


// Get User Goals
const getGoals = async(token) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.get(API_URL, config)

    return response.data
}

// Delete Goals

const deleteGoal = async(goalID, token) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    // Why am i not using response here? lmao fixed it

    const response = await axios.delete(API_URL + goalID, config)
    return response.data

}

const goalService = {
    createGoal,
    getGoals,
    deleteGoal
}


export default goalService