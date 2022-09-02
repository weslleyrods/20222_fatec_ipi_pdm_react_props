
const Cartao =(props)=>{
    return (
        <div className="card">
            {/*Cabeçalho do cartao*/}
            <div className="card-header text-muted">
                {props.cabecalho}
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default Cartao