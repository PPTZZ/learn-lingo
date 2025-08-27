import React from 'react'
import {tv} from 'tailwind-variants'
import cn from "@/lib/cn";


const buttonStyles = tv({
    base: 'rounded-xl px-10 py-2 font-semibold cursor-pointer',
    variants: {
        color: {
            primary: 'bg-gold text-black hover:bg-gold-muted',
            register:'bg-black text-white hover:bg-gold hover:text-black',
        },
        size: {
            lg: 'w-full py-3',
            md: 'w-btn-md py-3',
            sm: 'w-btn-sm py-3',
            register:'w-btn-register',
        }
    }
})

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & React.ComponentProps<typeof buttonStyles> & {
    children: string | React.ReactNode,
    className: string
}


const MainButton = ({children, color, size, className, ...props}: ButtonProps) => {
    return (
        <button className={cn(buttonStyles({color, size}), className)}{...props}>{children}</button>
    )
}
export default MainButton
