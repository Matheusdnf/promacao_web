import Link from 'next/link'


export default function Home(){

    return (

        <div>           

            <div>

                <h1>

                    Viva Santana!

                </h1>
                {/* Através disso vc só carregará o que for importante */}
                {/* Forma nova utilizando do link fornecido pelo react */}
                <Link href="/novarota">Rota1</Link> <br/><br/>
                {/* Forma antiga utilizando do a para levar as próximas páginas */}
                <a href="/novarota">Rota 1, jeito antigo</a>

            </div>

        </div>       

    )

}