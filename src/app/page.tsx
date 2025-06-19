import SocialIcons from "@/components/SocialIcons";
import { Button } from "@/components/ui/button";
import Work from "@/components/Work";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Hackathones from "@/components/Hackathones";
import Image from "next/image";
const Home = () => {
  return (
    <div>
      <div className="flex flex-wrap-reverse md:flex-nowrap justify-between gap-x-20 lg:py-10 py-6">
        <div className="pt-4 md:pt-0">
          <h1 className="md:text-5xl text-3xl font-bold pb-5 font-serif tracking-tight decoration-border/75 decoration-2">
            Hi Pavan here 👋
          </h1>
          <p className="text-foreground pb-3 text-[17px] font-[400] tracking-wide">
            19 year old web developer from Ahmedabad
          </p>
          <p className="text-foreground  text-[17px] tracking-wide font-400">
            I like to develop full-stack website and playing chess with cup of
            tea
          </p>
          <p className="text-lg  text-primary font-semibold tracking-wide pt-5 flex  md:items-center">
            Find proffesional information regarding me{" "}
            <ArrowDownRight className="size-5 ml-2 w-fit md:block hidden" />
          </p>
        </div>
        <div>
          <Image
            src="/cover_image.png"
            alt="cover iamge"
            className="bg-cover rounded-md"
            width={200}
            height={250}
          />
        </div>
      </div>
      <div className="flex items-center space-x-12">
        <Link
          href="https://drive.google.com/file/d/1CSxXt_O0avpVehhkRLaUqU98L7dKmc0h/view?usp=drive_link"
          target="_blank"
        >
          <Button variant="outline" className="text-base">
            Resume
            <ArrowRight className="pt-[2px]" />
          </Button>
        </Link>
        <SocialIcons />
      </div>
      <div className="pt-16">
        <Tabs defaultValue="work" className="flex w-full flex-col">
          <TabsList>
            <TabsTrigger className="w-full" value="work">
              Work
            </TabsTrigger>
            <TabsTrigger className="w-full" value="education">
              Education
            </TabsTrigger>
          </TabsList>
          <TabsContent value="work">
            <Work />
          </TabsContent>
          <TabsContent value="education">
            <Education />
          </TabsContent>
        </Tabs>
      </div>
      <div className="md:mt-20 mt-12">
        <Projects />
      </div>
      <div className="md:mt-20 mt-12">
        <Hackathones />
      </div>
    </div>
  );
};

export default Home;
