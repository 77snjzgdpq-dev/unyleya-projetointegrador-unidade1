import Header from "../../components/header";
import Footer from "../../components/footer";
import { useEffect, type PropsWithChildren } from "react";
import { useLocation } from "react-router-dom"

type UserTemplateProps = PropsWithChildren & {
  title: string;
};

export default function UserTemplate({ title, children }: UserTemplateProps) {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0,0);
  },[pathname]);
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <Header />

      <main className="flex-1 px-6 py-6 max-w-7xl mx-auto w-full">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        {children}
      </main>

      <Footer />

    </div>
  );
}
