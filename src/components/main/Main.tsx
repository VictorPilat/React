import "./main.css"
import { ReactNode } from "react"

interface MainProps {
    children?: ReactNode
}

export function Main(props: MainProps) {
    const {children} = props
    
    return <main className="main">
    <div className="content">
        {children}
    </div>
</main>
}