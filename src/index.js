
import React from 'react';
import ReactDOM from 'react-dom';
import Pedido from './pedido';
import Cartao from './cartao';
import Feedback from './feedback';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

const App = ()=>{
    /*const produtos = [{
        data: '19/08/2022',
        icone: 'fa-solid fa-hdd fa-2x',
        titulo: 'Kingston',
        descricao: 'SSD Kingston A400 - SATA'
    },
    {
        data: '20/08/2022',
        icone: 'fa-solid fa-book fa-2x',
        titulo: 'Livro',
        descricao: 'Concrete Mathematics - Donald Knuth'
    },
    {
        data: '21/08/2022',
        icone: 'fa-solid fa-laptop fa-2x',
        titulo: 'Notebook',
        descricao: 'Notebook Dell - 8Gb - i5'
    },
    ];

    const produtosForEach = [];
    produtos.forEach((produto) => {
        produtosForEach.push(
            <div className="row">
                <div className="col-sm-8 col-md-6 my-2">
                    <Pedido    
                    data={produto.data} 
                    icone={`fa-solid ${produto.icone} fa-2x`}
                    titulo={produto.titulo}
                    descricao={produto.descricao}
                    />
                </div>
            </div>
            )
        }) */
    
    const textoOK = 'Já chegou';
    const textoNOK ='Ainda não chegou!';
    const funcaoOK = () => alert('Agradecemos a confirmação');
    const funcaoNOK = () => alert('Verificaremos o ocorrido');
    const componenteFeedback = (
        <Feedback
            textoOK={textoOK}
            textoNOK={textoNOK}
            funcaoOK={funcaoOK}
            funcaoNOK={funcaoNOK}
        />
    )
            console.log(componenteFeedback);
    return (
        //componente principal
    <div className='container border rounded mt-2'>

        <div className='row border-bottom my-2'>
            <h1 className='display-5 text-center'>Seus pedidos</h1>
        </div>
        
        {/*
        {
            produtos.map((produto)=>{
                return(
                <div className="row">
                    <div className="col-sm-8 col-md-6 m-2">
                        <Pedido    
                        data={produto.data} 
                        icone={`fa-solid ${produto.icone} fa-2x`}
                        titulo={produto.titulo}
                        descricao={produto.descricao}
                        />
                    </div>
                </div>
                )
            })    
    }
    */}
    {/*
    {produtosForEach}
    */}
        
        <div className="row">
            <div className="col-sm-8 col-md-6 my-2">
                {/*Entrada do primeiro pedido*/}
                <Cartao
                    cabecalho='22/04/2022'>
                {/* componente Pedido é a children de do componente Cartao*/}
                <Pedido 
                icone="fa-solid fa-hdd fa-2x" 
                titulo="Kingston"
                descricao="SSD Kingston A400 - SATA"/>
                {componenteFeedback}
                </Cartao>
            </div>


        {/*linha para o segundo pedido */}
    
            <div className="col-sm-8 col-md-6 my-2">
                {/*Entrada do segundo pedido*/}
                <Cartao cabecalho='23/04/2022'>
                <Pedido 
                icone="fa-solid fa-book fa-2x" 
                titulo="Livro"
                descricao="Concrete Mathematics - Donald Knuth"/>
                {componenteFeedback}
                </Cartao>
            </div>

        {/*linha para o terceiro pedido */}
            <div className="col-sm-8 col-md-6 my-2">
                {/*Entrada do terceiro pedido*/}
                <Cartao cabecalho='24/04/2022'>
                <Pedido 
                icone="fa-solid fa-laptop fa-2x" 
                titulo="Notebook"
                descricao="Notebook Dell - 8Gb - i5"/>  
                {componenteFeedback}
                </Cartao>   
            </div>
        </div>

    </div>

    )
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)