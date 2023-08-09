import { useRef } from "react"
function Form(){
    //componente de estado no reactivo
    const nombreRef= useRef(null)
    const apellidoRef= useRef(null)
    const handleClick =() =>{
        console.log(nombreRef.current.value)
        console.log(apellidoRef.current.value)
    }
    return(
        <div>
            <input ref={nombreRef} type="text" placeholder="ej : Mariela" id="nombre" />
            <input ref={apellidoRef} type="text" placeholder="ej : Farina" id="apellido" />
            
            <button onClick={handleClick}>Ver valor </button>
        </div>
    )
}
export default Form