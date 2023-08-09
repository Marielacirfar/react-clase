import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Conteiner from "./Conteiner"

//Mi primer componente
/*
Componentes:
1- Son funciones
2- Van en mayuscula!!!
3- Todos tienen retorno (return) Es la vista
4- Siempre deben retornar un solo elemento(html o componente)


 */

function App() {
  
  
  return (
   <> 
   {/*Comentarios en jsx */}
    <Header/>
    <Main>
     
    </Main>
    
    <Conteiner/>
    <Footer/>
    
   </>
  );
}

export default App;
