//Paso 1 Mostrar las historias para mostrar las historias tengo q importar el json

import React, {Component} from 'react';
import data from '../data.json';

export default class Historias extends Component{
    render(){
        return(
            /*importo el json con la data y contiene un contador q se encargara
            de contarme la cantidad*/
            <>
            <h2 className='historia'>  {data[this.props.contador].historia}</h2>
            </>
        )
    }
} 
