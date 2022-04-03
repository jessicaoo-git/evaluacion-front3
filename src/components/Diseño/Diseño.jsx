//! Paso 4 Crear la lógica del diseño
import Reac, {Component} from 'react';
import Historias from  "../Historias/Historias";
import data from "../data.json";
import Botones from "../Botones/Botones";
import Historial from "../Historial/Historial";

//Paso 4.1 creo un array vacio para pushear el historial
const historial =[];
export default class Diseño extends Component{
//Paso 4.2 creo el constructor con el estado inicial de
//las props q son un contador para contar las historias
//y un string para colocar las selecciones anteriores.

constructor(props){
    super(props);
    this.state={
        contador: 0,
        seleccionAnterior: '', 
    };
}
//Paso 4.3 Utilizo el ciclo de vida ComponentDidUpdate
//para actualizar el estado del constructor 
componentDidUpdate(estadoPrevio){
 
    if(estadoPrevio.contador !== this.state.contador){
        historial.push(this.state.seleccionAnterior);
    }
}
handleClick = (element) =>{
    


    const actual = element.target.id;
    const anterior = this.state.seleccionAnterior === '' ? 'B': this.state.seleccionAnterior;
    const contador = this.state.contador;
    

    if(contador >= 7){
        alert('Fin');
        
    }else if (actual === 'A' && anterior === 'B' ){
        this.setState({
            contador: contador + 1,
            seleccionAnterior: actual,
        });
       
    }else if (actual === anterior ){
        this.setState({
            contador: contador +2,
            seleccionAnterior: actual,
        });
    }else if (actual === 'B' && anterior === 'A' ){
        this.setState({
            contador: contador +3,
            seleccionAnterior: actual,
        });
    }

    };

    render() {
        return(
            <>
            <Historias contador={[this.state.contador]}/>
            <Botones
                handleClick ={this.handleClick}
                //El this.state.contador me indica la posición del array en el objeto data
                opcionA={data[this.state.contador].opciones.a}
                opcionB={data[this.state.contador].opciones.b}          
            />
            <Historial
                seleccionAnterior={this.state.seleccionAnterior}
                historial={historial.map(
                    (historial, i) => (
                        <li key={i}>{historial}</li>
                    ),
                    data[this.state.contador].id
                )}
            />
        
         </>
        );
    }
}
