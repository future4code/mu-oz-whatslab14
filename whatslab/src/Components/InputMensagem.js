import React from "react";

export default class InputMensagem extends React.Component {
    state = {
        mensagem:''
    };

    onChangeMensagem = (event) => {
        this.setState({mensagem: event.target.value})
    }

    render(){
    return(
        <div>
            <input name={'mensagem'} type= {'text'} onChange={this.onChangeMensagem} value ={this.state.mensagem} placeholder='Mensagem'/>
            
        </div> 
    );
}
}
