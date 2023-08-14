import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Conteiner from "./Conteiner"
import MainConChildren from "./MainConChildren";
import MainConRender from "./MainConRender";

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
    {/*<MainConChildren>
    <h1>Titulo</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptate nobis esse beatae alias maiores illo inventore, corporis dignissimos tempora ad, optio molestias, enim vitae? Omnis fugit laborum earum ipsum.</p>
    </MainConChildren>
    
    <MainConRender render={()=>{
      return(
        <h2>Render props</h2>
      )
      
    }}/>*/}
    
    <Conteiner/>
    <Footer/>
    
   </>
  );
}

export default App;
