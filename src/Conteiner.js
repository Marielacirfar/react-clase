import { useEffect, useState } from "react"
import Presentacional from "./Presentacional"
function Conteiner(){
    //Estados
    const [data, setdata] = useState([])
    //Efectos
    useEffect(()=>{
         getProductos()
        }, [])
    //Acciones
    const getProductos =()=>{
  
    const resultado_del_fetch = fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => setdata(json))

    console.log(resultado_del_fetch)
        

    }
    //Vista
    return(
        <Presentacional data={data}/>
       
    )
   
       //vista
      /* if(data.length==0){
        return(
            <div>
                <h2>Cargando....</h2>
            </div>
        )
       }else{
        return(
            <div>
                <p>Data cargada</p>
            </div>
        )
       }*/

    


   
}


export default Conteiner