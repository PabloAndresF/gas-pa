import React from 'react';
import userIcon from "../Image-icons/user.svg";
import gasPais from "../Image-icons/MiConv.com__Gas-País-400x400.svg"
import lupa from "../Image-icons/lupa.svg"
import Puntos from "../Image-icons/puntos.svg";

const Header = () => {
    return (
        <div className=" flex  md:flex-wrap  md:flex-row mx-4 justify-around mt-10 shadow-lg shadow-green-400">
            <div className='flex col '>
                <img src={gasPais} className=" relative w-12 h-12 md:w-52 md:h-52 md:-mt-20" alt="gasPais" />
                <img src={userIcon} className="relative ml-6 md:w-8 md:mt-1 md:h-8 md:ml-28 w-5" alt="userIcon" />
            </div>
            <p className=' text-yellow-400 md:mt-2  font-sans md:text-xl text-xs mt-4 '> Facturas</p>
            <div>
                <input type="text" className="placeholder-gray-300 border-2 border-green-400 md:w-96 -md:mr-20 md:h-7 rounded-md w-32 h-5 mt-3 text-xs" placeholder=' 🔍Nombre usuario' />
            </div>
            <div>
                <button className=" md:w-7 md:h-7 border-2 border-green-400 rounded-md h-5 mt-3"><img  className=' w-3 md:w-6' src={lupa} alt={"Lupa"} /> </button>
            </div>
            <div>
                <img  className='md:w-8 mt-3 w-4' src={Puntos} alt="Puntos" />
            </div>
        </div>
    );
}


export default Header;