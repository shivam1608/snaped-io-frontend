import { inter, rubik } from "@/app/layout";
import clsx from "clsx";
import Image from "next/image";

const ForthSection = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-8 px-4 sm:px-6 md:px-8 lg:px-20 py-12 lg:py-20 bg-custom-gradient2">
      <div className="w-full md:w-2/4 pt-6">
        <h2
          className={clsx(
            "text-2xl lg:text-3xl tracking-wider font-bold text-foreground/80",
            rubik.className
          )}
        >
          No One to Record? Let Our AI Characters Do It for You!
        </h2>
        <p
          className={clsx(
            "text-lg lg:text-xl text-secondary-foreground/80 tracking-wider leading-6 mt-4",
            inter.className
          )}
        >
          Forget the hassle of finding someone to record your videos. With our
          AI characters, you can instantly generate professional videos with
          realistic avatars. They'll speak your script, deliver your message,
          and bring your ideas to life, all without the need for a camera crew
          or voice actor. Just choose your AI character, customize it, and hit
          play
        </p>
      </div>
      <div className="w-full md:w-2/4">
        <Image
          src="/use-case.png"
          alt="video"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default ForthSection;
