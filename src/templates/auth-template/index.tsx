import type { PropsWithChildren } from "react"
import Footer from "../../components/footer";

type AuthTemplanteProps = PropsWithChildren & {};

export default function AuthTemplate(props: AuthTemplanteProps) {
    return(
        <div className="min-h-screen flex flex-col">
            <div className="bg-primary flex justify-between p-2">
                <h1 className="text-white text-[30px] font-bold">Unybay</h1>
                <div />
            </div>
            
            <div className="flex flex-1 flex-col px-[10px] py-[20px] justify-center">
                {props.children}
            </div>
                
            <Footer />
        </div>
    )
}