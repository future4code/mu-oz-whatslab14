import React from "react";


export default class Inputs extends React.Component{

  consoleMessages = () => {
    //console.log(this.props.messages)
    return this.props.messages.map((item,index) => {
  
      return <div key={index}>
        <p><strong>{item.usuario}{': '}</strong>{item.mensagem}</p>
        
        </div>

       
    });
}

render() 
{
    return(
        <div>
            {this.consoleMessages()}
            
        </div>
    )
}

}

 
  







