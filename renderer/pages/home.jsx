import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Home() {

  return (
    <React.Fragment>
      <Head>
        <title>Colibri - Login</title>
      </Head>
      <div>
        <p>
          We have to develop a special login with a validation with payments
          <Link href="/next">
            <a>Go to inside of the app</a>
          </Link>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Home;
