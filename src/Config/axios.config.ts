import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://lavishly-fogless-sang.ngrok-free.dev/",
    timeout: 180000,
    headers: {
        'Content-Type': 'application/json',
        "ngrok-skip-browser-warning": "true",
    },
});

axiosInstance.interceptors.request.use((config) => {
    config.headers.set('ngrok-skip-browser-warning', 'true');
    return config;
});