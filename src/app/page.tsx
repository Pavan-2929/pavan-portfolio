import SocialIcons from "@/components/SocialIcons";
import { Button } from "@/components/ui/button";
import Work from "@/components/Work";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Hackathones from "@/components/Hackathones";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="grid grid-cols-1 items-center gap-10 py-8 md:grid-cols-[minmax(0,1fr)_230px] md:gap-10 lg:py-12">
        {/* Introduction */}
        <div className="order-2 md:order-1">
          <h1 className="pb-5 font-serif text-4xl font-bold tracking-tight md:text-5xl">
            Hi Pavan here 👋
          </h1>

          <p className="pb-3 text-[17px] tracking-wide text-foreground">
            21-year-old Software Developer{" "}
          </p>

          <p className="text-[17px] leading-relaxed tracking-wide text-foreground">
            Passionate about building full-stack applications, exploring
            technology, and enjoying a good game of chess with a cup of tea.
          </p>

          <p className="flex items-center pt-5 text-lg font-semibold tracking-wide text-primary">
            Find professional information about me
            <ArrowDownRight className="ml-2 hidden size-5 md:block" />
          </p>

          {/* Resume and Social Links */}
          <div className="mt-9 flex flex-wrap items-center gap-7">
            <Button variant="outline" asChild className="text-base">
              <Link
                href="https://drive.google.com/file/d/1hIU3UmHoIWi36Ulm8PZElMP_Iee3_F8C/view?usp=drive_link"
                target="_blank"
              >
                Resume
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>

            <SocialIcons />
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative h-[220px] w-[220px] shrink-0 overflow-hidden rounded-2xl md:h-[250px] md:w-[250px]">
            {/* Light theme */}
            <Image
              src="/cover_image_light.png"
              alt="Developer workspace with coding, coffee, and chess"
              fill
              priority
              sizes="(max-width: 768px) 220px, 250px"
              className="object-cover dark:hidden"
            />

            {/* Dark theme */}
            <Image
              src="/cover_image_dark.png"
              alt="Developer workspace with coding, coffee, and chess"
              fill
              priority
              sizes="(max-width: 768px) 220px, 250px"
              className="hidden object-cover dark:block"
            />
          </div>
        </div>
      </section>

      {/* Work and Education */}
      <section className="pt-10 md:pt-12">
        <Tabs defaultValue="work" className="flex w-full flex-col">
          <TabsList className="w-full">
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
      </section>

      {/* Projects */}
      <section className="mt-14 md:mt-20">
        <Projects />
      </section>

      {/* Hackathons */}
      <section className="mt-14 md:mt-20">
        <Hackathones />
      </section>
    </div>
  );
};

export default Home;
