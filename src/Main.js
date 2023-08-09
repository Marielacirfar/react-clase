import { useState } from "react"
import logo from "./logo192.png"
import Form from "./Form"
function Main () {
  
  /*<button onClick={toogleMenu}>toogle Menu</button>
  <ul>
    <li>Home</li>
    <li>Productos</li>
    <li>Contacto</li>
  </ul>*/
    let[dark,setdark] = useState(true)
    let[contador, setContador]= useState(0)
    let nombre= "Mariela"
    function nombreEnMayuscula(){
        return nombre.toUpperCase()
      }
      const toogleDark=()=>{
        setdark(!dark)
      }
      
      const suma = ()=> {
        setContador(contador +1)

      }
      const restar =()=>{
        setContador(contador -1)
      }
      const Resetear =()=>{
        setContador(0)
      }

    return(
    <main className={dark ? "p-2 grow bg-slate-600 text-white" : "p-2 grow bg-white"}>

            <h2>Home</h2>
            <img src="" alt="" />
            <img src={logo} alt="" />
            <p>Contador: {contador}</p>
            <button onClick={suma}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={Resetear}>Resetear</button>
            <button onClick={toogleDark}>toogle Dark</button>
            
            
            <p>Bienvenido a la pagina web de {nombreEnMayuscula()}</p>
            <Form/>
    </main>

    )
}
    /*const [show, setShow] =useState(false)
  const toogleMenu =() => {
    setShow(!show)
  }
  if(show){

    <main>
      return(
        <button onClick={toogleMenu}>toogle Menu</button>
      )
     
    </main>
  }else{
    <main>
      return(
        <button onClick={toogleMenu}>toogle Menu</button>
        <ul>
          <li>Home</li>
          <li>Productos</li>
          <li>Contacto</li>
        </ul>
    )
    </main>
    
  }

}*/
export default Main;
