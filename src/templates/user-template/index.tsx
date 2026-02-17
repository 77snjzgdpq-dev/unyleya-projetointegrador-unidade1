import Footer from "../../components/footer";
import Header from "../../components/header";
import type { PropsWithChildren } from "react";

type UserTemplateProps = PropsWithChildren & {
  title: string;
};

export default function UserTemplate(props: UserTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <main className="flex flex-1 flex-col px-6 py-6 max-w-6xl mx-auto w-full">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          {props.title}
        </h1>

        {props.children}
      </main>

      <Footer />
    </div>
  );
}
