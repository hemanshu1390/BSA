import Asettingbtn from "../components/Admin/Asettingbtn";
import Asidebar from "../components/Admin/Asidebar";
// import Cpass from "../components/Admin/cp";
import Mnavbar from "../components/Admin/mnavbar";



export default function Asettingm(){

    return(
         <>
  <div className=" ">
      <div className="2xl:container mx-auto w-full ">
           
           <div className="">            <Mnavbar />
           </div>

           {/* flex w-full */}
            <div className="static ">          
            <Asettingbtn/>
                <div className="absolute top-36 ps-2  bg-[#2196f3]">
                 <Asidebar/>
                </div>
            </div>
        </div>   </div>
         </>


    )






}