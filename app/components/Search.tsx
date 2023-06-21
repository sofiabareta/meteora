'use client'

import { useState, useEffect } from 'react';
import Button from './Button';

function Search({ style })  {
    return(
        <form action="" className={`flex justify-center ${style.padding}`}>
            <input className="border border-black mr-2 text-sm p-2" type='text' placeholder='Digite o produto' />
            <Button text={"Buscar"} styleClasses={"py-2 px-2.5 border border-black"}/>
        </form>
    )
}

export default Search