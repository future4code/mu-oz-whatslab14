// export default class Inputs extends React.Component {
//     state = 
//     {
//         usuario:'',
//         mensagem:'',
//         arrayInputs: []
//     }

//     onChangeInput = (e) => 
//     {
//         this.setState
//         (
//             {usuario: e.target.value},
//             {mensagem: e.target.value}
//         )
        
//     }

//     onClickButton = () => 
//     {
//         this.setState
//         (
//             {
//                  arrayInputs:

//                  [...this.setState.arrayInputs, this.setState.usuario, this.setState.mensagem],

//                   usuario: "",
//                   mensagem:""
                
//             }
//         )
//     }

//     render()
//     {
//     return (

//         <div>

//             <input 
//                    name={'text'}
//                    onChange={this.onChangeInput} 
//                    value ={this.state.usuario} 
//                    placeholder='Usuário'/>
//             <input 
//                    type={'text'}
//                    onChange={this.onChangeInput} 
//                    value ={this.state.mensagem}
//                    placeholder='Mensagem'/>

//             <button 
//              onClick={this.onClickButton}>
//                  Enviar
//              </button>
//              <Inputs  messages={this.state.arrayInputs} />
//         </div> 

//              );

//     }
// }
  