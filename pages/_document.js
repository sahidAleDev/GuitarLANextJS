import { Html, Head, Main, NextScript } from 'next/document'

/*
    ! _Documente tiene el mayor nivel
    La funcion de Document, nos permite acceder a todo el componente o todo el documento de esta pagina
    , incluye el html, el head y el body. Para ello se importan una serie de componentes

    * Head -> Poner css externo, como fuentes o normalize

*/

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet"/>
                <link rel='stylesheet' href='https://necolas.github.io/normalize.css/8.0.1/normalize.css'/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
