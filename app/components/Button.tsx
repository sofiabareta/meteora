'use client'

function Button({ type, styleClasses, text })  {
    return(
        <button type={type} className={styleClasses}>{text}</button>
    )
}

export default Button