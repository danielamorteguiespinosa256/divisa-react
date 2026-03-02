import { useEffect, useState } from 'react'

const App = () => {
  const [divisas , setDivisas] = useState([])
  const [seleccion, setSeleccion] = useState('')
  const [divisaDefinitiva, setdivisaDefinitiva] = useState (null)

  useEffect(() =>{
    consultar()
    
  },[

  ])
  
  const consultar = async () =>{
    let url = "https://co.dolarapi.com/v1/cotizaciones"
    const resultado = await fetch(url)
    const data = await resultado.json()
    console.log("las divisas ",data)
    setDivisas(data)
  }

  const cambioDivisa = (idDivisa)=>{
    console.log("divisa seleccionada", idDivisa)
    setSeleccion(idDivisa)
    setdivisaDefinitiva(buscarDivisa(idDivisa))
  }

  const buscarDivisa = (idDivisa) => {
    let divisaEncontrada = divisas.find( objDivisa => objDivisa.moneda === idDivisa)

    return divisaEncontrada

  }

  return(
    <div className="contenedor">
      <h1>convertir desde COP</h1>
      <input type='number' id='valor' placeholder='calidad en pesos (COP)'/>

      <select id="opcionesdeDivisas"
        onChange={(evento) => cambioDivisa(evento.target.value)} >
          <option value="">cargando divisas...</option>
          { divisas &&
            divisas.map( (divisa, index) => (
              <option key={index} value={divisa.moneda}>{divisa.nombre}</option>
            ))

          }
      </select>

      <button>convertir</button>
      <p id="resultado">
        {divisaDefinitiva?.ultimoCierre}
      </p>
    </div>
  )
}

export default App