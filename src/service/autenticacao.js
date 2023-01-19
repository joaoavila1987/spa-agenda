import api from './api';

const autenticacao = async (id, token) => {    
    if (id === undefined) return false;
    const tokenAuth = await api.get(`Clientes/Authenticated/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }}).then(res => {
        return res.data;
    }).catch(err => {        
        console.log(err)
        return false
    });

    return tokenAuth;
}

export default autenticacao;