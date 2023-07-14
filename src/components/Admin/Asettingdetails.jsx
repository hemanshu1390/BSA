import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
 
export default function Adetails() {
  return (  
   
  <>
    <div className="  bg-[#F0ECEC] w-full  h-screen  pt-20    ">
    <Card color="transparent " className="  mx-auto  p-2" shadow={false}>
      <Typography variant="h4" color="blue-gray" className="text-center p-4">
        
      </Typography>
      {/* <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography> */}
       {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ms-12 me-12 "></div> */}
      <form className=" pb-16 w-full grid grid-cols-3 gap-10 items-center">
        
          <Input size="" className="w-32" label="Change Name" />
          <Button className="w-32 mx-auto">Delete</Button>
          <Button className="w-32 mx-auto">Enter</Button> 
          
          <Input size="file" label="Change Profile Picture" />
          <Button type="" className="w-32 mx-auto">Delete</Button>
          <Button className="w-32 mx-auto">Upload</Button>

          <Input type="password" size="" label="Change E-mail" />
          <Button className="w-32 mx-auto">Delete</Button>
          <Button className="w-32 mx-auto">Enter</Button>

          <Input type="password" size="" label="Mob. no." />
          <Button className="w-32 mx-auto">Delete</Button>
          <Button className="w-32 mx-auto">Enter</Button>
          <Input type="password" size="" label="Address" />
          <Button className="w-32 mx-auto">Delete</Button>
          <Button className="w-32 mx-auto">Enter</Button>
        
       

      </form>
    </Card>
    </div>
    </>
 )
}