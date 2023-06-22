'use client'

type ButtonParams = {
    buttonType: string,
    styleClasses: string,
    text: string
};

function Button({ buttonType, styleClasses, text }:ButtonParams)  {
    return(
        <button type="submit" className={styleClasses}>{text}</button>
    )
}

export default Button