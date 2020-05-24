import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/images/logo.png'
import api from './services/api'
import data from './data.json'
function App() {
  const [ personagens, setPersonagens ] = useState([])

  async function getPersonagens(){
    const response = await api.get('character')        
    setPersonagens(response.data)
    console.log(response.data)
  }
  useEffect(() => {
    getPersonagens()
  }, [])
  return (
    <div className="App">
      <img src={logo} alt="logo" className='logo'/>
      <h1>Consumo de API Dragon Ball Z</h1>
      <h2>Desenvolvido por Carlos Eduardo</h2>
      <div className="personagens">
        {
          data.map(personagem =>(
            <div className='cards'>
              <p>Personagem : <p className='value'>{personagem.name} </p> </p>
              <p>Espécie: <p className='value'>{personagem.species}</p></p> 
              <p>Planeta de Origem : <p className='value'>{personagem.originPlanet}</p> </p>
              <p>Série: <p className='value'>{personagem.series}</p> </p>              
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
