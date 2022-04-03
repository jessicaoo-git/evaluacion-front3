//Paso 3 Creo el historial
import React, {Component} from 'react';
export default class Historial extends Component{
    render(){
        const {seleccionAnterior} = this.props;
        
        return (
            

            <div className='recordatorio'>  
                <h3>Selección anterior:{seleccionAnterior}</h3>
                <h4>Historial de opciones elegidas:</h4>
                <ul>{this.props.historial}</ul>
            </div>

        )
    }
}