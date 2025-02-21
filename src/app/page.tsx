"use client"; // Necessário para usar eventos no Next.js App Router

import { useRef } from "react";
import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TypingEffect from "@/components/TypingEffect";
import { Separator } from "@/components/ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  //
  const initRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  //
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollToSection = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  //
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      {/* MENU FIXO NO TOPO */}
      <header className="fixed top-0 left-0 w-full bg-gray-800 p-4 flex justify-center gap-6 shadow-md z-10">
        <Button onClick={() => scrollToSection(initRef)} variant="ghost">
          Início
        </Button>
        <Button onClick={() => scrollToSection(aboutRef)} variant="ghost">
          Sobre
        </Button>
        <Button onClick={() => scrollToSection(projectsRef)} variant="ghost">
          Projetos
        </Button>
        <Button onClick={() => scrollToSection(contactRef)} variant="ghost">
          Contato
        </Button>
      </header>

      {/* INIT */}

      <section
        ref={initRef}
        className="h-screen flex items-center justify-center text-center"
      >
        <div className="flex flex-row items-center">
          {/* Texto */}
          <div className="w-96">
            <div className="flex flex-col items-center">
              <div></div>
              <TypingEffect />
              <Separator className="my-4" />

              <AlertDialog>
                <AlertDialogTrigger>Full Stack Developer</AlertDialogTrigger>
                <AlertDialogContent className="bg-gray-700 border-slate-500">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-slate-200">
                      O que é um Full Stack Developer?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-slate-300">
                      Um Full Stack Developer é um desenvolvedor que trabalha
                      tanto no frontend quanto no backend, criando interfaces,
                      lógica de negócios e gerenciando bancos de dados em uma
                      aplicação.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogAction className="text-slate-200">
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <Button
                className="mt-4"
                variant="ghost"
                onClick={() => scrollToSection(projectsRef)}
              >
                Ver Projetos
              </Button>
            </div>
          </div>
          <div className="ml-28">
            <Avatar className="w-96 h-96 rounded-full">
              <AvatarImage src="/me.JPEG" alt="Erick Nascimento" />
              <AvatarFallback className="w-96 h-96 rounded-full bg-gray-800" />
            </Avatar>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section
        ref={aboutRef}
        className="h-screen flex items-center justify-center bg-gray-800"
      >
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold -mt-10">Sobre Mim</h2>

          <Card className="border-slate-400 bg-gray-500 w-3/5 mt-20 flex flex-col">
            <CardHeader>
              <CardTitle className="text-3xl text-center">
                Erick Oliveira Nascimento
              </CardTitle>
              <CardDescription>
                <p className="text-slate-950 mt-4 text-center text-base">
                  Desenvolvedor Full Stack apaixonado por tecnologia, com
                  experiência em aplicações web e mobile. Busco sempre inovação,
                  eficiência e soluções escaláveis.
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-justify">
                Atualmente, atuo no desenvolvimento de software multiplataforma
                e estou cursando minha graduação na Fatec Votorantim, com
                conclusão prevista para dezembro de 2025. Tenho experiência
                prática com TypeScript, Python, Node.js, Angular, React, React
                Native, Next.js, SQL e NoSQL, adquirida por meio de projetos
                acadêmicos, iniciativas próprias e atuação profissional. Já
                desenvolvi soluções para a secretaria acadêmica da Fatec
                Votorantim e contribui para sistemas corporativos, aplicando
                tecnologia para otimizar processos e resolver desafios de forma
                eficiente. Além das habilidades técnicas, destaco minha
                capacidade de trabalho em equipe, rápida adaptação a novas
                tecnologias e abordagem proativa na resolução de problemas.
                Busco constantemente a excelência, agregando valor a cada
                projeto e superando expectativas.
              </p>
            </CardContent>
            <CardFooter className="justify-center text-base">
              <p>💻 Programando de dia, sonhando com código à noite! 🐑</p>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* PROJETOS */}
      <section
        ref={projectsRef}
        className="h-screen flex items-center justify-center bg-gray-700"
      >
        <h2 className="text-3xl font-semibold">Projetos</h2>
      </section>

      {/* CONTATO */}
      <section
        ref={contactRef}
        className="h-screen flex items-center justify-center bg-gray-600"
      >
        <h2 className="text-3xl font-semibold">Contato</h2>
      </section>
    </main>
  );
}
