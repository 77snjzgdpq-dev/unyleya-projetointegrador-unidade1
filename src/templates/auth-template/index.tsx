import type { PropsWithChildren } from "react"
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";

type AuthTemplanteProps = PropsWithChildren & {};

export default function AuthTemplate(props: AuthTemplanteProps) {
    const navigate = useNavigate();

    return(
        <div className="min-h-screen flex flex-col">
            <div className="bg-primary flex justify-between p-2">
                 <button onClick={() => navigate("/")}>
                    <h1 className="text-white text-[30px] font-bold">Unybay</h1>
                </button>
                
                <div />
            </div>
            
            <div className="flex flex-1 flex-col px-[10px] py-[20px] justify-center">
                {props.children}
            </div>
                
            <Footer />
        </div>
    )
}