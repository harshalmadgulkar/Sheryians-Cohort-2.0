import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api/auth",
    withCredentials: true
});

export const register = async (username, email, password) => {
    try {
        const response = await api.post("/register", {
            username,
            email,
            password
        });

        console.log(response);
    } catch (err) {
        console.log(err);
    }
};

export const login = async (username, password) => {
    try {
        const response = await api.post("/login", {
            username,
            password
        });

        console.log(response);

    } catch (err) {
        console.log(err);
    }
};

export const getMe = async () => {
    try {
        const response = await api.get("/get-me");
        return response.data;
    } catch (err) {
        console.log(err);
    }
};