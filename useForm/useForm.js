import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm );
    
    //  del event se desestructura el target que contiene name y value entre otros
    const onInputChange = ({target}) =>{
        console.log(target)
        const { name, value } = target;
        // console.log({name, value})
        // ...desestructurando el form state mantiene los demas datos con el operador spread
        setFormState({
            ...formState,
            [ name ]:value
        })
        //  propiedades computadas de los objetos, entonces cambia el name determinado
        // [ name ]:value
    }

    const onResetForm = () => {
        setFormState( initialForm )
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
