import Image from "next/image"
import Layout from "@/components/layout"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
    return (

        <Layout
            title="Nosotros"
            description="Sobre nosotros, guitarLA, tienda de musica"
        >
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>

                <div className={styles.contenido}>
                    <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />

                    <div>
                        <p>
                            Donec tempor, augue sit amet faucibus dapibus, ante ligula scelerisque dolor, eu vestibulum arcu nisi vel massa. Aenean consectetur, felis vitae facilisis sagittis, mi lectus pulvinar nisi, et semper magna est at augue. Aliquam erat volutpat. Aenean tincidunt mi mi, a pharetra ipsum rutrum eget. Etiam eu ligula nec nisl commodo sollicitudin at eu elit. 
                        </p>
                        <p>
                            Sed bibendum purus in gravida interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eu nunc a libero laoreet dignissim. Duis dignissim elit orci, vel mollis leo cursus ut. Sed finibus tellus eu leo euismod rhoncus. Aliquam commodo justo a turpis sollicitudin, quis egestas tortor gravida. 
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
