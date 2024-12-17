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
const Home = () => {
  return (
    <div>
      <div className="flex flex-wrap-reverse md:flex-nowrap justify-between gap-x-20 lg:py-10 py-6">
        <div className="pt-4 md:pt-0">
          <h1 className="md:text-5xl text-3xl font-bold pb-5 font-serif tracking-tight decoration-border/75 decoration-2">
            hi Pavan here 👋
          </h1>
          <p className="text-foreground pb-3 text-[17px] font-[400] tracking-wide">
            19 year old web developer from Ahmedabad
          </p>
          <p className="text-foreground  text-[17px] tracking-wide font-400">
            I like to develop full-stack website and playing chess with cup of
            tea
          </p>
          <p className="text-lg  text-primary font-semibold tracking-wide pt-5 flex  md:items-center">
            Find proffesional regarding me{" "}
            <ArrowDownRight className="size-5 animate-bounce ml-2 w-fit md:block hidden" />
          </p>
        </div>
        <div>
          <img
            src="/cover_image.png"
            alt="cover iamge"
            className="h-44 w-72 bg-cover"
          />
        </div>
      </div>
      <div className="flex items-center space-x-12">
        <Link href="https://drive.google.com/file/d/1WetZRXwCy8Xnr8eDZCgmZYBvhj9UJNQ1/view?usp=drive_link" target="_blank">
          <Button variant="outline" className="text-base">
            Resume
            <ArrowRight className="pt-[2px]"/>
          </Button>
        </Link>
        <SocialIcons />
      </div>
      <div className="pt-16">
        <Tabs defaultValue="account" className="flex w-full flex-col">
          <TabsList>
            <TabsTrigger className="w-full" value="account">
              Work
            </TabsTrigger>
            <TabsTrigger className="w-full" value="password">
              Education
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Work />
          </TabsContent>
          <TabsContent value="password">
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
