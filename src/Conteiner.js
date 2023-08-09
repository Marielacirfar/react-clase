import { useEffect, useState } from "react"
import Presentacional from "./Presentacional"
function Conteiner(){
    //Estados
    const [data, setdata] = useState([])
    useEffect(()=>{
         getProductos()
        }, [])
    //Efectos
    const getProductos =()=>{
       /*console.log("Arranca el pedido a la api")
        setTimeout(()=>{
            console.log("terminoo el pedido")
            let data = [{id:1, nombre: "Horacio" } ,{id:2, nombre: "Juan"}]
            setdata(data)
    
        },3000)*/

    /*const nueva_promesa =new Promise(()=> {})*/
    const resultado_del_fetch = fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => setdata(json))

    console.log(resultado_del_fetch)
        

    }
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