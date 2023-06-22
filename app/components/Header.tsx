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
            <header className={`flex flex-wrap justify-between px-4 py-5 mb-6 ${bgColor} ${textColor}`}>
                <h1><img src='assets/logo-light.svg'/></h1>
                <button className='text-right text-3xl' onClick={() => setIsClose(!isClose)}>
                    <img src='assets/menu.svg'/>
                </button>
                <nav className={`absolute right-0 top-0 bg-[#343A40] px-6 py-4 ${isClose ? 'hidden' : ''}`}>
                    <button className='width-100 inline-block text-right text-3xl' onClick={() => setIsClose(!isClose)}>X</button>
                    <ul>
                        {
                            navItems.map( (itens, index) => {
                                return <li key={index} className='py-2 border-b border-b-[#CED4DA] last:border-0'><a href="">{itens}</a></li>
                            })
                        }
                    </ul>
                </nav>
            </header>
            <Search style={{ padding: "px-4" }}/>
        </>
    )
}

export default Header