// use es un standar en reack para indicar que es un hook(es una funcion)
import { useState } from "react";
// tiene que tener un retorno lo que necesitemos
// usualmente esta ligado a un ligado a otro hook propi de reack
export const useCounter = ( initialValue = 10) => {

    const [counter, setCounter] = useState( initialValue );

    const increment = ( value = 1) => {//SE LE INDICA EL VALOR POR DEFECTO si no es enviado
        setCounter( (current) => current + value );
    }
    // const decrement = (value = 1) NO FUNCIONA POR QUE RECIVE EL EVENTO CLICK EN TOTALIDAD(VALUE)*
    // EN EL ONCLICK SE DEBE ENVIAR DE OTRA FORMA
    const decrement = (value = 1) => {//SE LE INDICA EL VALOR POR DEFECTO si no es enviado
        if( counter === 1 ) return;
        setCounter( counter - value );
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}