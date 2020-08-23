import axios from 'axios'; // axios vai nos permitir conversar com o backend

// Importando o dotenv que nos ajuda a tratar as variáveis de ambiente
require('dotenv').config();


const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
        headers: {
            'Content-Type': 'application/json'
        }
    }); // aqui fica a conexão com o backend, e deve ficar o link para ele
    
    
    
    export function setAccessToken(token: string) {
        api.defaults.headers = {
            Authorization: `Bearer ${token}`
        }
    }


export default api; // usaremos 'api' sempre que formos fazer conexão com a api