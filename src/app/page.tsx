import logo from '../public/static/images/Jabalí Softworks Logo.jpeg'
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <nav>
          <ul className="uppercase flex text-center justify-center font-bold">
            <li className="p-5"><a href="#">Soluciones</a></li>
            <li className="p-5"><a href="#">Descargas</a></li>
            <li className="p-5"><a href="#">Blog</a></li>
            <li className="p-5"><a href="#">Foro</a></li>
            <li className="p-5"><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <main className="flex justify-center m-10 items-center">
        <div className="flex flex-col mr-36">
          <h1 className="font-black text-3xl mb-7">
            Descarga CFDI
            <br />
            Crea Reportes y
            <br />
            Representación
            <br />
            Impresa
          </h1>
          <h2 className="font-medium text-1xl mb-2">
            Una herramienta imprescindible
            <br />
            para el control de tu facturación e impuestos</h2>

          <button className="mt-8 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">PRUÉBALO GRATIS</button>
        </div>

        <div>
          <Image src={logo} alt="Logo de J de Jabalí Softworks" width={400} />
        </div>

      </main>
    </div>
  );
}
