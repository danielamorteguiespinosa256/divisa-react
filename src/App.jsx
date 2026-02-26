import { useEffect, useState } from 'react'

const App = () => {
  const [divisas , setDivisas] = useState([])
  useEffect(() =>{
    console.log(consultar)
  })

  const consultar = async () =>{
    let url = "https://co.dolarapi.com/v1/cotizaciones"
    fetch
  }

  return (
    
  <div className="contenedor">
        <h1>Convertir desde COP</h1>
        <input type="number" id="valor" placeholder="Cantidad en pesos (COP)"/>
        
        <select id="opcionesDivisas">
            <option value="">Cargando divisas...</option>
        </select>

        <button>Convertir</button>
        <p id="resultado"></p>
    </div>
  )
}

export default App7