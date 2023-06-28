'use client'

import { useState, useEffect } from 'react';
import Button from './Button';

function Search({ style }: {style: string})  {
    return(
        <form action="" className={`flex justify-center ${style}`}>
            <input className="border border-black mr-2 text-sm p-2" type='text' placeholder='Digite o produto' />
            <Button buttonType="submit" text={"Buscar"} styleClasses={"py-2 px-2.5 border border-black md:border-white"}/>
        </form>
    )
}

export default Search