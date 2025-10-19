import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import AnimatedContent from "./AnimatedContent";

export default function Hero() {
  return (
    <div className="mx-auto motion-preset-fade">
      <AnimatedContent duration={1.5} delay={0.1}>
        <div id="image-section">
          <Image
            src="https://avatars.githubusercontent.com/u/124599?v=4"
            alt="Shadcn"
            width={200}
            height={200}
            className="rounded-full mx-auto motion-preset-fade "
          />
        </div>
      </AnimatedContent>
      <AnimatedContent duration={1.5} delay={0.2}>
        <div className="border w-fit display flex gap-2 mx-auto my-10 items-center p-2 rounded-md">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-orange-700 dark:text-orange-100 bg-orange-100 dark:bg-orange-700 rounded-sm p-2">
            Hey!
          </h3>
          <span className="text-2xl">I'm</span>
          <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
            Sibil Sarjam Soren
          </h3>
        </div>
      </AnimatedContent>
      <AnimatedContent duration={1.5} delay={0.4}>
        <div className="mx-auto w-fit">
          <h2 className="scroll-m-20 pb-2 text-5xl font-semibold tracking-tight first:mt-0 text-center">
            I'm a <b>Full-Stack</b> Engineer!
          </h2>
          <h3 className="scroll-m-20 text-4xl font-semibold tracking-tight text-center">
            Based in India 🇮🇳
          </h3>
        </div>
      </AnimatedContent>
      <AnimatedContent duration={1.5} delay={0.6}>
        <div className="mx-auto w-fit m-10">
          <p className="text-center">
            I build full-stack stuff that actually works and scales. <br />
            Code, design, deploy, maintain - I do it all! <br />I turn complex
            problems into clean, working solutions.
          </p>
        </div>
        <div className="mx-auto w-fit">
          <Button className="cursor-pointer">
            See more <ChevronRight />
          </Button>
        </div>
      </AnimatedContent>
    </div>
  );
}
