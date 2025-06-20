import { AuthResponse, LoginPayload, RegisterPayload } from "./data/types";

const BASE_URL = "http://localhost:5000/api";

export const registerUser = async(userData : RegisterPayload) : Promise<AuthResponse> => {
    const res = await fetch(`${BASE_URL}/auth/register`, {
     method : 'POST',
     headers: { 'Content-Type': 'application/json' },
     body : JSON.stringify(userData),
    });

    console.log(userData);

    if(!res.ok){
        const {message} = await res.json();
        throw new Error(message || "Register Failed")
    }
    return res.json();
}

export const loginUser = async(userData : LoginPayload) : Promise<AuthResponse> => {
    const res = await fetch(`${BASE_URL}/auth/login`, {
        method :'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(userData),
    });
console.log(userData);
     if(!res.ok){
        const {message} = await res.json();
        throw new Error(message || "Register Failed")
    }
    return res.json();
}