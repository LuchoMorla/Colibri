import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { OpenAIApi, Configuration } from 'openai';/* 
import axios from 'axios'; */
import Deudor from '../Components/Deudor';
import Image from 'next/image';

function Next() {
  const [thePaper, setPaper] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [listadoConversation, setConversacion ]= useState([]);

  // me conecto a OpenIA
  async function login(event) {
    event.preventDefault();
    const configuration = new Configuration({
      organization: "org-Isolf1XQIlRTNoy81FsMmxrO",
      apiKey: process.env.OPENAI_API_KEY,
    });
    console.log('configuracion:', configuration);
    const openai = new OpenAIApi(configuration);
    console.log('instance:', openai);
    const response = await openai.listEngines();
    console.log('first response', response);
  };
/* const configuration = {
  organization: "org-Isolf1XQIlRTNoy81FsMmxrO",
  apiKey: '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',
}; */

const handleInputChange = (event) => {
  setInputValue(event.target.value);
};

/* const funcionConectar = async () => {
  event.preventDefault();
console.log('instance:', openai);
const response = await openai.listEngines();
  console.log('first response', response);
}

funcionConectar(); */

let escucharEventoClick = async () => {
  console.log('perfecto funciono evento');
 

  //recibimos parametros de busqueda de clientes a llamar....
  let acrededorSaid = document.getElementById('inputBuscadorColibri').value;
  /* const savingConversation = listadoConversation.push(acrededorSaid); */
  setConversacion([...listadoConversation, acrededorSaid]);

  console.log('guadando conversacion', listadoConversation);
  console.log('leeremos el listado: ');
  console.log(listadoConversation);
  
//cliente dara clic en buscar despues de tratar los datos procedemos a setear el valor del input
console.log('valor de input: ', inputValue);

setInputValue('');

console.log('valor de input despues de setear: ', inputValue);
//Enviar proms y generacion de tokens
  /* const responseGeneration = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'digamos que tu eres un abogado, que me dirias si me estuvieses llamado para darme algun consejo?'
  }); 
   //prompt: 'Quiero que actues como si fueras un abogado experto en cobranzas que se encuentra realizando llamadas a los acreededores de credito de un banco y que se encuentran en mora, tu te encargaras en comunicarte con ellos, trata de ser respetuoso, no tratar de tú, tratar al cliente de usted.',
  console.log('final Response', responseGeneration); */
  //vamos a eliminar del input e texto escrito anteriormente
  console.log('fin de la funcion');
};

  useEffect(() => {
    listadoConversation.map((oracion) => {
      setPaper(oracion);
      /* thePaper.value = 
        <p>
          {oracion}
        </p>
      ; */
    });
  }, [listadoConversation]);


  // imprimir dentro de papel contenedor de cliente e imprimir dentro de papel contenedor de respuestas de OPENAI
  return (
    <React.Fragment>
    <Head>
      <title>Colibri</title>
    </Head>
    <div>
      <p>
        ⚡ Electron + Next.js ⚡ -
        <Link href="/home">
          <a>Go to next home | login</a>
        </Link>
      </p>
      <div className="buscadorContenedor" >
          <section className="main-logo">
              <Image src="https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg" alt="" width={750} height={100} />
          </section>
          <section>
            <div>
              <p>Este es el papel: </p>
              <div className='paper'>{thePaper}</div>
{/*               <div>
                <p> */}
                  {useEffect(() => {
                    listadoConversation.map((dice) => (
                    <Deudor dice={dice} key={listadoConversation.indexOf(`${dice}`)}></Deudor>
                  ))}, [listadoConversation]
                  )}
{/*                 </p>
              </div> */}
            </div>
          </section>
          <section className="main-input">
              <div className="main-input-container">
                  <span className="search-icon">
                  </span>
                  <input type="text" id="inputBuscadorColibri" onChange={() => handleInputChange} />
              </div>
          </section>
          <section className="main-buttons">
              <div><button id="botonBucar" onClick={() => escucharEventoClick()}>Buscar con Colibri</button></div>
              <div><button  onClick={() => login()} >I am Feeling lucky and alright.</button></div>
          </section>
      </div>
      <Image src="https://www.aynimar.com/_next/static/media/logo-Aynimar.c247031e.svg" alt="logo Aynimar developers" width={50} height={50}/>
    </div>
  </React.Fragment>
  );
};

export default Next;
