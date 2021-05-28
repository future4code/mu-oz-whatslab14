import React from "react";

export default class InputUsuario extends React.Component {
    state = {
        usuario:''
    }

    onChangeUsuario = (event) => {
        this.setState({usuario: event.target.value})
    }

    render(){
    return(
        <div>
            <input name={'usuario'} type={'text'} onChange={this.onChangeUsuario} value ={this.state.usuario} placeholder='Usuário'/>
           
        </div> 
    );
}
}

