import axios from 'axios'; // axios vai nos permitir conversar com o backend

// const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVhNDRhODVmLTNlNmItNDQ0My05ZjY2LTFkOTc0YzQ5ODkwMCIsImVtYWlsIjoidGVzdGluZy11c2VyQG5hdmUucnMiLCJpYXQiOjE1OTc4NjI0NzF9.Gs4ubTvwkV75kZAkeYS8dlNgXDZMuZFWN89ISd7ZrrI';

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0M2VjNGJmLTUwZGEtNDcyYS04NDRjLWFkZmI1NzQwOTMzYiIsImVtYWlsIjoidGVzdGluZy11c2VyLW5ld0BuYXZlLnJzIiwiaWF0IjoxNTk3ODY5MjUzfQ.1ZAenEADXzPWDnss3AgLuJb3NvrIbxNRQI-wqjxWvrU';

const api = axios.create({
    baseURL: 'https://navedex-api.herokuapp.com/v1',
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
}); // aqui fica a conexão com o backend, e deve ficar o link para ele




export default api; // usaremos 'api' sempre que formos fazer conexão com a api