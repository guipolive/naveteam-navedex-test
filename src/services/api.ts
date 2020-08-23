import axios from 'axios'; // axios vai nos permitir conversar com o backend
import Cookies from 'universal-cookie';

// Importando o dotenv que nos ajuda a tratar as variáveis de ambiente
require('dotenv').config();


 

const cookies = new Cookies();

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies.get('token')}`
        }
    }); // aqui fica a conexão com o backend, e deve ficar o link para ele
    
    
    
    export function setAccessToken(token: string) {
        cookies.set('token', token);
        api.defaults.headers = {
            Authorization: `Bearer ${cookies.get('token')}`
        }
        console.log('Access Token modificado com sucesso.');
    }

    export function isUserAuthorized() {
        if(cookies.get('token') != 'null'){
            return true;
        }
        else return false;
    }


export default api; // usaremos 'api' sempre que formos fazer conexão com a api