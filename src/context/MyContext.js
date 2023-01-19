// import { createContext, useState, useEffect } from 'react';
// import React from 'react'


// export const MyContext = createContext();

// export function ContextProvider({children}){
    
//     const [ carrinhoCounter, setCarrinhoCounter ] = useState(0);
//     const [ produtos, setProdutos ] = useState([]);  // Armazena os Produtos Pesquisados
//     const [ produtosOrdem, setProdutosOrdem ] = useState("descricao");  // Armazena a Ordem dos Produtos Pesquisados
//     const [ posicaoOrdem, setPosicaoOrdem ] = useState("asc");  // Armazena a Ordem dos Registros Pesquisados (asc ou desc);
//     const [ paginaAtual, setPaginaAtual ] = useState(1);
//     const [ paginaTotal, setPaginaTotal ] = useState(1);
//     const [ ultimaPesquisaProdutos, setUltimaPesquisaProdutos ] = useState("");
//     const [ showLoading, setShowLoading ] = useState(false);
//     const [ meuCarrinho, setMeuCarrinho ] = useState([]);
//     const [ meuCupomDesconto, setMeuCupomDesconto ] = useState([]);
//     // const [ enderecos , setEnderecos ] = useState([{
//     //     IdsEnderecos: 0,
//     //     IdsLojaEnderecos: 0,
//     //     IdClientesEnderecos: 0,
//     //     IdLojaEnderecos: 0,
//     //     Bacen: 0,
//     //     ApelidoEnd: '',
//     //     Rua: '',
//     //     Numero: '',
//     //     Complemento: '',
//     //     Bairro: '',
//     //     Iduf: '',
//     //     Idcidade: '',
//     //     Cep: '',
//     //     Referencia: '',
//     //     PadraoEnderecos: 0,
//     //     AtivoEnderecos: 0,
//     //     ExtUf: '',
//     //     ExtCidade: '',
//     //     Latitude: '',
//     //     Longitude: ''
//     // }]);
//     const [ enderecos , setEnderecos ] = useState([]);
//     const [ idContexto , setIdContexto ] = useState(0);
//     const [ idLojaContexto , setIdLojaContexto ] = useState(0);

//     return(
//         <MyContext.Provider value={{ carrinhoCounter, setCarrinhoCounter, produtos, setProdutos, produtosOrdem, setProdutosOrdem, paginaAtual, setPaginaAtual, paginaTotal, setPaginaTotal, ultimaPesquisaProdutos, setUltimaPesquisaProdutos, showLoading, setShowLoading, posicaoOrdem, setPosicaoOrdem, meuCarrinho, setMeuCarrinho, meuCupomDesconto, setMeuCupomDesconto, enderecos , setEnderecos , idContexto , setIdContexto , idLojaContexto , setIdLojaContexto }}>
//             {children}
//         </MyContext.Provider>
//     )
// }
