"use client";
import { Button } from "@nextui-org/button";

import { Spacer } from "@nextui-org/spacer";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";

export default function Home() {
  const [env, setEnv] = useState<string>("");
  useEffect(() => {
    setEnv(process.env.NEXT_PUBLIC_ENV||"empty");
  }, []);


  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <h2 className=" text-8xl font-extrabold">Welcome</h2>
      <Spacer y={20} />
      <Dialog >
        <DialogTrigger asChild>
          <Button className="text-2xl py-3 font-extrabold " color="primary" variant="shadow">
            Show Enviroment Variable
          </Button>
        </DialogTrigger>
        <DialogContent  className="bg-secondary-50  w-[500px] h-[300px] font-extrabold justify-center items-center border-none  ">
          <DialogHeader>
            <div className="absolute  w-full h-full " />

            <DialogTitle>
              <h1
                className="md:text-4xl text-xl text-white relative z-20"
              >
                Hello World
              </h1>
            </DialogTitle>
            <p className=" text-4xl text-center text-whit opacity-40">{
              env
            }</p>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
