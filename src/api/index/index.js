    import axios from "axios";
    import {createContext} from "react";

    const api = axios.create({
        baseURL: "http://localhost:3004/", timeout: 30000, headers: {"Content-Type": "application/json"},
    });
    const ContextApi = createContext(api);
    export {api, ContextApi};
