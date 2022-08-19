
import React from 'react';
import ReactDOM from 'react-dom';
import Pedido from './pedido';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

const App = ()=>{
    return (
        //componente principal
    <div className='container border rounded mt-2'>

        <div className='row border-bottom m-2'>
            <h1 className='display-5 text-center'>Seus pedidos</h1>
        </div>

        <div className="row">
            <div className="col-sm-8 col-md-6 m-2">
                {/*Entrada do primeiro pedido*/}
                <Pedido 
                data='19/08/2022' 
                icone="fa-solid fa-hdd fa-2x" 
                titulo="Kingston"
                descricao="SSD Kingston A400 - SATA"/>
            </div>
        </div>

        {/*linha para o segundo pedido */}
        <div className="row">
            <div className="col-sm-8 col-md-6 m-2">
                {/*Entrada do segundo pedido*/}
                <Pedido 
                data='20/08/2022' 
                icone="fa-solid fa-book fa-2x" 
                titulo="Livro"
                descricao="Concrete Mathematics - Donald Knuth"/>
            </div>
        </div>

        {/*linha para o terceiro pedido */}
        <div className="row">
            <div className="col-sm-8 col-md-6 m-2">
                {/*Entrada do terceiro pedido*/}
                <Pedido 
                data='21/08/2022' 
                icone="fa-solid fa-laptop fa-2x" 
                titulo="Notebook"
                descricao="Notebook Dell - 8Gb - i5"/>      
            </div>
        </div>

    </div>

    )
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)