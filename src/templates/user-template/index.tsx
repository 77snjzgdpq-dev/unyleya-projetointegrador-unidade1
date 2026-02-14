import Footer from "../../components/footer"
import Header from "../../components/header"
import type { PropsWithChildren } from "react"

type UserTemplateProps = PropsWithChildren & {
    title: string
}

export default function UserTemplate(props: UserTemplateProps) {
    return(
        <div className="min-h-screen flex flex-col">
            <Header/>
            <div className="flex flex-1 flex-col px-[10px] py-[20px]">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}