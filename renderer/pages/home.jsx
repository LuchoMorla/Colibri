import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios'

function Home() {

let escucharEventoClick = () => {
    console.log('perfecto funciono evento');

    //recibimos parametros de busqueda de clientes a llamar....


//cliente dara clic en buscar

// me conecto a OpenIA
/* const configuration = new Configuration({
    organization: "org-Isolf1XQIlRTNoy81FsMmxrO",
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines(); */
};
  return (
    <React.Fragment>
      <Head>
        <title>Colibri</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
        <div class="buscadorContenedor" >
            <section class="main-logo">
                <Image src="https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg" alt="" width={750} height={100} />
            </section>
            <section class="main-input">
                <div class="main-input-container">
                    <span class="search-icon">

                    </span>
                    <input type="text" id="inputBuscadorColibri" />
                </div>
            </section>
            <section class="main-buttons">
                <div><button id="botonBucar" onClick={() => escucharEventoClick()}>Buscar con Colibri</button></div>
                <div><button>I am Feeling lucky and alright.</button></div>
            </section>
        </div>
        <Image src="https://www.aynimar.com/_next/static/media/logo-Aynimar.c247031e.svg" alt="logo Aynimar developers" width={50} height={50}/>
      </div>
    </React.Fragment>
  );
};

export default Home;
