'use client'

import { useState, useEffect } from 'react';
import Search from './Search';

type HeaderParams = {
    bgColor: string;
    textColor: string;
};

function Header({ bgColor, textColor }: HeaderParams )  {
    const [text, setText] = useState("")
    const [isClose, setIsClose] = useState(true)

    const navItems = [
        "Home",
        "Nossas Lojas",
        "Novidades",
        "Promoções"
    ]

    useEffect(()=>{
		setText("Hello world");
	}, [])

    return(
        <>
            <header className={`flex flex-wrap md:flex-nowrap ${bgColor} ${textColor}`}>
                <div className='px-4 py-5 w-full flex justify-between items-center md:justify-start'>
                    <h1 className='md:mr-5'><img src='assets/logo-light.svg'/></h1>
                    <button className='text-right text-3xl md:hidden' onClick={() => setIsClose(!isClose)}>
                        <img src='assets/menu.svg' alt="Logo site Meteora"/>
                    </button>
                    <nav className={`absolute right-0 top-0 bg-[#343A40] px-6 py-4 md:relative md:block md:p-0 md:bg-transparent ${isClose ? 'hidden' : ''}`}>
                        <button className='width-100 inline-block text-right text-3xl md:hidden' onClick={() => setIsClose(!isClose)}>X</button>
                        <ul className='md:flex'>
                            {
                                navItems.map( (itens, index) => {
                                    return <li key={index} className='py-2 border-b border-b-[#CED4DA] text-xs last:border-0 md:border-0 md:mr-5 lg:text-base'><a href="">{itens}</a></li>
                                })
                            }
                        </ul>
                    </nav>
                </div>
                <Search style={"p-6 flex-[1_0_100%] bg-white md:flex-initial md:bg-transparent"}/>
            </header>
        </>
    )
}

export default Header