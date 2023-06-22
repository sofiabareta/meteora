'use client'

import { useState, useEffect } from 'react';
import Button from './Button';

type Props = {
    style: {
        padding: string
    }
}

function Search({ style }: Props)  {
    return(
        <form action="" className={`flex justify-center ${style.padding}`}>
            <input className="border border-black mr-2 text-sm p-2" type='text' placeholder='Digite o produto' />
            <Button buttonType="submit" text={"Buscar"} styleClasses={"py-2 px-2.5 border border-black"}/>
        </form>
    )
}

export default Search