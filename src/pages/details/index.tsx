import UserTemplate from "../../templates/user-template";

import carousel1 from "../../assets/carrosel1.png";
import { Carousel } from "react-responsive-carousel";

export default function Details () {
    return(
        <UserTemplate title="">
            <p className="text-[30px]">Echo dot (8º geração)</p>
            <div className="flex mt-10 gap-10 justify-center"> 
                <div className="w-[40%]">
                    <Carousel showThumbs={false} >
                        <div>
                            <img src={carousel1} />
                        </div>
                        <div>
                            <img src={carousel1} />
                        </div>
                        <div>
                            <img src={carousel1} />
                        </div>
                    </Carousel>
                </div>
                <div>
                    <div className="shadow-sm bg-white px-10 py-2">
                        <p>Informações do vendedor</p>
                        <p>Jean Carlos Campos Kfouri</p>
                        <p>São Paulo - SP</p>
                        <p>E-mail: carloskfouri@hotmai.com</p>
                        <p>11 9 9999-9999</p>
                    </div>
                    <div className="shadow-sm bg-white px-10 py-2">
                        <p className="text-[30px]">R$ 799,00</p>
                    </div>
                </div>
            </div>
            
            <h3 className="mt-10 text-[20px]">Detelhes do produto</h3>
            
            <div className="mt-3">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                </p>
                 <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                </p>
            </div>
        </UserTemplate>
    )
}