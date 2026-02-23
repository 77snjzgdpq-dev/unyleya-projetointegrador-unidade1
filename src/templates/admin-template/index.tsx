import { useEffect, type PropsWithChildren } from "react"
import Footer from "../../components/footer";
import HeaderAdmin from "../../components/header-admin";
import { useAuthSessionStore } from "../../hooks/use-auth-session";
import { useNavigate } from "react-router-dom";

type AdminTemplatProps = PropsWithChildren & {};

export default function AdminTemplate(props: AdminTemplatProps) {
    const { token } = useAuthSessionStore();
    const navigate = useNavigate();

    useEffect(() => {
        if(!token)
        {
            navigate("/");
        }
    },[])

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