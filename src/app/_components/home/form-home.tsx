import Link from "next/link";

import { cn } from "@/app/_lib/utils";
import DotPattern from "../ui/dot-pattern";
import ShinyButton from "../ui/shiny-button";

const FormHome = () => {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
        )}
      />
      <div className="relative z-10 w-full items-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium leading-none lg:text-5xl">
            Crie seu{" "}
            <span className="block font-bold text-primary">
              Currículo Perfeito
            </span>{" "}
            em Minutos
          </h1>

          <p className="mx-auto mt-4 max-w-xl italic text-muted-foreground lg:text-lg">
            Com a <span className="font-bold text-primary">Amora</span>, você
            gera currículos profissionais de forma rápida e gratuita. Transforme
            suas habilidades em oportunidades!
          </p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link href="/dashboard" className="text-muted-foreground">
            <ShinyButton>
              <p className="font-semibold italic text-primary-foreground">
                🍇 Comece Agora
              </p>
            </ShinyButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FormHome;
