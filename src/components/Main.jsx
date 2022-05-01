import React from 'react';
import Main1 from "../Image-icons/Main1.svg";
import Main2 from "../Image-icons/Main2.svg"



const Main = () => {
    return (
        <div className='md:flex md:flex-row md:justify-around md:m-12 '>
            <section className=' font-semibold text-center mx-6' >
                <img src={Main1} className=" md:w-96 md:h-96 w-96 h-96 " alt="Main" />
                <h1 className='-mt-14'>Generar Factura</h1>
                <p className='Párrafo'>Solo para usuarios registrados</p>
                <button className='font-semibold bg-green-400 w-40 '>Generar</button>
            </section>

            <section className='font-semibold text-center mx-28'>
                <img src={Main2} className=" md:mt-24 w-48 h-48 mt-14 " alt="Main2" />
                <h1 className='relative md:mt-12'>Nuevo Usuario</h1>
                <p className='Párrafo1'>Registrar Datos de nuevos</p>
                <button className='font-semibold bg-green-400 w-40'>Registrar</button>
            </section>
        </div>

    );
}

export default Main;