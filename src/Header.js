import Nav from "./Nav"
import CartWidget from "./CartWidget"
function Header(){
    return(
        <header id="header" className="header flex justify-between py-4 px-2 bg-slate-800 text-white">
            <h1 className="text-white">Mi pagina Web</h1>
            <Nav nombre="Mariela" edad= {43}/>
            <CartWidget/>
        </header>
    )
}
export default Header