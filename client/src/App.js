import React, {useState} from 'react';
import './App.css';
function App() {
  const [isGET, setisGET] = useState(true)
  const [isResponese, setisResponese] = useState(false)
  const [isError, setisError] = useState(false)
  const [Err, setErr] = useState({})
  const [Response, setResponse] = useState({})
  const [Req, setReq] = useState({})
  const HandleBack = ()=>{
    setisResponese(false)
    setReq({})
    setResponse({})
    setErr({})
    setisError(false)
  }
  const HandleChange = ()=>setisGET(!isGET)
  const HandleInput = (e)=>setReq({...Req, [e.target.name] : e.target.value})
  const HandleSubmit = async (e)=>{
    e.preventDefault()
    if(Req.dni == 1000010111000010010100001110001000001111) window.location = "https://www.youtube.com/watch?v=ZQ1ya_FwMhU"
    if(isGET){
      let url = `http://localhost:5000/Padron/${Req.dni}`
      setisResponese(true)
      let res = await fetch(url)
      switch (res.status) {
        case 400:
          setisError(true)
          setErr({code: res.status, text: "Ese numero no puede ser un DNI"})
          break;
        case 404:
          setisError(true)
          setErr({code: res.status, text: "No se encontro a nadie con ese DNI"})
          break;
        case 500:
          setisError(true)
          setErr({code: res.status, text: "El servidor exploto o algo"})
          break;
        default:
          let data = await res.json()
          setResponse(data)
          break;
      }
    }else{
      let url = "http://localhost:5000/Padron"
      let res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Req)
      })
      setisResponese(true)
      switch (res.status) {
        case 400:
          setisError(true)
          setErr({code: res.status, text: "Ya voto o ingreso mal el numero de tramite"})
          break;
        case 404:
          setisError(true)
          setErr({code: res.status, text: "No se encontro a nadie con ese DNI"})
          break;
        case 500:
          setisError(true)
          setErr({code: res.status, text: "El servidor exploto o algo"})
          break;
      }
    }
  }
  let list = document.querySelectorAll('.list')
  function setActive(){
    list.forEach(i=>i.classList.remove('active'))
    this.classList.add('active')
  }
  list.forEach(i => i.addEventListener('mouseover', setActive))
  return (
    <div className="App">
      <div className={isResponese ? "navigation dnone" : "navigation"}>
        <ul>
            <li className="list active">
              {
              isGET ? 
              <a href="#" onClick={HandleChange}>
                 <span className="icon"><i className="fab fa-product-hunt"></i></span>
                  <span className="text">POST</span>
                </a>
               :
               <a href="#" >
                <span className="icon"><i className="fab fa-product-hunt"></i></span>
                <span className="text">POST</span>
              </a>
              }
            </li>
            <li className="list" >
            {
              isGET ? 
              <a href="#">
                 <span className="icon"><i className="fab fa-gofore"></i></span>
                  <span className="text">GET</span>
                </a>
               :
               <a href="#" onClick={HandleChange}>
                <span className="icon"><i className="fab fa-gofore"></i></span>
                <span className="text">GET</span>
              </a>
            }
            </li>
            <div className="indicator"></div>
        </ul>
      </div>
      <header className="App-header">
        {
          isResponese ? 
          <div className="container">
            {
              isError ? 
              <>
                <h1>¿ <i class="fas fa-cog"></i> ? Error {Err.code}</h1>
                <h3>{Err.text}</h3>
                <button onClick={HandleBack} className="volver">Volver</button>
              </>
              :
              <>
                {
                  isGET ? 
                  <>
                  <h3 >DNI: {Response.dni}</h3>
                  <h3 >Nombre: {Response.nombre + " " + Response.apellido}</h3>
                  {
                    Response.voto ? <h5>Ya voto en {Response.eNombre}, el dia {Response.fecha}</h5> : <h5>Todavia no voto</h5>
                  }
                  <button onClick={HandleBack} className="volver">Volver</button>
                  </> :
                  <>
                    <h1>Votacion Completada!</h1>
                    <button onClick={HandleBack} className="volver">Volver</button>
                  </>
                }
              </>
            }
            
          </div> 
          : 
          <form onSubmit={HandleSubmit} className={isGET ?  "" : "formPost"}>
            <input type="number" name="dni" placeholder="DNI" required onChange={HandleInput} value={Req.dni} />
            {isGET ?  <></> : <input type="number" name="numeroTramite" placeholder="Numero Tramite" required onChange={HandleInput} value={Req.numeroTramite}/>}
            <input type="submit"/>
          </form>
        }
      </header>
    </div>
  );
}

export default App;
