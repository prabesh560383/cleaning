import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";

  import { useState } from "react";
   
  export default function ServicesCards({service, img}) {

    const [isActive, setIsActive] = useState(false)
    return (
      <Card
        shadow={false}
        className="relative grid h-[23rem] max-w-[25rem] lg:h-[25rem] xl:h-[25rem] items-end justify-center overflow-hidden text-center m-auto w-5/6 hover:cursor-pointer"
        onMouseEnter={()=>setIsActive(true)}
        onMouseLeave={()=>setIsActive(false)}
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className={`absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center hover:scale-110 transition-all duration-200`}
          style={{backgroundImage: `url(${img})`}}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-3 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className= {!isActive ? 'mb-6 font-large leading-[1.5]' : 'mb-6 font-large leading-[1.5] text-gray-500'}
          >
            {service}
          </Typography>
          
        </CardBody>
      </Card>
    );
  }