import type { PropsWithChildren } from "react"
import Footer from "../../components/footer";
import HeaderAdmin from "../../components/header-admin";

type AdminTemplatProps = PropsWithChildren & {};

export default function AdminTemplate(props: AdminTemplatProps) {
    return(
        <div className="min-h-screen flex flex-col">
           <HeaderAdmin />
           <div className="flex flex-1 flex-col px-[10px] py-[20px] justify-center">
                {props.children}
            </div>
                
            <Footer />
        </div>
    )
}