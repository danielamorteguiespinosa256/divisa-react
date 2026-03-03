import { useEffect, useState } from 'react'

const App = () => {
  const [divisas , setDivisas] = useState([])
  const [seleccion, setSeleccion] = useState('')
  const [divisaDefinitiva, setdivisaDefinitiva] = useState (null)
  const [valorinput , valorInput] = useState ('hola')
  const [operacion, setOperacion] = useState ('0')

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

  const calcularConvercion = () => {
    if (!valorInput || !divisaDefinitiva) return 0
    return(valorInput  / divisaDefinitiva.ultimoCierre).toFixed(2)
  }

  const calcularoperacion = () =>{
    const resultadoConvercion = calcularConvercion()
    setOperacion(resultadoConvercion)

    
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

      <button onClick={operacion}>convertir</button>
      <p id="resultado">
        
      </p>
    </div>
  )
}

export default App