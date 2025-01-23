import { ReactNode } from "react";
import style from "../styles/second_page.module.css";
export const metadata = {
  title: "Segunda Página",
  description: "Generated by Next.js",
};
// Não passa por montagem,todas as páginas ficaram subordinadas a essa página
interface RootLayout {
  children: ReactNode;
}
//O children é o conteúdo que está sendo passado da página
export default function RootLayout({ children }: RootLayout) {
  return (
    // Colocar coisas que serão aparecidas em várias partes do site (deixando mais leve e rápido)
    <html lang="pt-br">
      <body>
        <h1 className={style.segundo_titulo}>Segunda Página</h1>
        {children}
      </body>
    </html>
  );
}