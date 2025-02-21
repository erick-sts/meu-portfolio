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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaMicrosoft,
  FaLinkedin,
} from "react-icons/fa";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  //
  const initRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  //
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollToSection = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  //
  return (
    <>
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
          className="h-screen flex items-center justify-center text-center mt-16"
        >
          <div className="flex flex-row items-center flex-wrap justify-center">
            {/* Texto */}
            <div className="w-96">
              <div className="flex flex-col items-center">
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
                        Ok
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <Button className="mt-4" variant="ghost">
                  <HoverCard>
                    <HoverCardTrigger>Curriculo</HoverCardTrigger>
                    <HoverCardContent className="w-96 text-justify break-words whitespace-normal border-slate-500 bg-gray-700 text-slate-200">
                      <p className="text-xl">Qualificações</p>
                      <Separator className="my-4" />
                      <p>Técnico em Informática - Etec Fernando Prestes</p>
                      <p>Técnico em Contabilidade - Etec Cotia</p>
                      <p>
                        Desenvolvimento de Software Multiplataforma - Fatec
                        Votorantim (Cursando)
                      </p>
                      <Separator className="my-4" />
                      <p>Ingles</p>
                      <p>Francês</p>
                    </HoverCardContent>
                  </HoverCard>
                </Button>
              </div>
            </div>
            <div className="ml-28 flex justify-center">
              <Avatar className="w-96  h-auto rounded-full">
                <AvatarImage src="/me.JPEG" alt="Erick Nascimento" />
                <AvatarFallback className="w-96 h-96 rounded-full bg-gray-800" />
              </Avatar>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section
          ref={aboutRef}
          className="h-screen flex items-center justify-center bg-gray-800 mt-20"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold">Sobre Mim</h2>

            <div className="flex flex-col justify-center gap-6 mt-10">
              <div className="flex flex-row gap-24 flex-wrap justify-center">
                <Card className="border-slate-400 bg-gray-500 w-80 h-60 flex flex-col transform rotate-2 card-hover">
                  <CardHeader>
                    <CardTitle className="text-xl text-center">
                      Quem sou eu?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mt-2 text-justify text-base">
                      Erick Oliveira Nascimento
                    </p>
                    <p className="text-justify text-base">
                      Desenvolvedor Full Stack apaixonado por tecnologia, com
                      experiência em aplicações web e mobile. Busco sempre
                      inovação, eficiência e soluções escaláveis.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-400 bg-gray-500 w-96 h-80 flex flex-col transform -rotate-2 card-hover">
                  <CardHeader>
                    <CardTitle className="text-xl text-center">
                      Formação e Conhecimento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-justify text-base">
                      Atualmente, atuo no desenvolvimento de software
                      multiplataforma e estou cursando minha graduação na Fatec
                      Votorantim, com conclusão prevista para dezembro de 2025.
                    </p>
                    <p className="text-justify text-base">
                      Tenho experiência prática com TypeScript, Python, Node.js,
                      Angular, React, React Native, Next.js, SQL e NoSQL,
                      adquirida por meio de projetos acadêmicos, iniciativas
                      próprias e atuação profissional.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-400 bg-gray-500 w-80 h-60 flex flex-col transform rotate-1 card-hover">
                  <CardHeader>
                    <CardTitle className="text-xl text-center">
                      Experiência e Projetos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-justify text-base">
                      Já desenvolvi soluções para a secretaria acadêmica da
                      Fatec Votorantim e contribui para sistemas corporativos,
                      aplicando tecnologia para otimizar processos e resolver
                      desafios de forma eficiente.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-row gap-24 items-center justify-center mt-6 flex-wrap">
                <Card className="border-slate-400 bg-gray-500 w-96 h-72 flex flex-col transform -rotate-1 card-hover">
                  <CardHeader>
                    <CardTitle className="text-xl text-center">
                      Habilidades e Diferenciais
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-justify text-base">
                      Além das habilidades técnicas, destaco minha capacidade de
                      trabalho em equipe, rápida adaptação a novas tecnologias e
                      abordagem proativa na resolução de problemas.
                    </p>
                    <p className="text-justify text-base">
                      Busco constantemente a excelência, agregando valor a cada
                      projeto e superando expectativas.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-400 bg-gray-500 w-80 h-52 flex flex-col transform rotate-3 card-hover">
                  <CardHeader>
                    <CardTitle className="text-xl text-center">
                      Atenção{" "}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-justify text-base">
                      🔧 Assim como no desenvolvimento de software, na vida a
                      gente compila, depura e refatora até encontrar a melhor
                      versão de si mesmo.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section
          ref={projectsRef}
          className="h-screen flex items-center justify-center bg-gray-700"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold">Projetos</h2>
            <Card className="border-slate-400 bg-gray-500 w-96 p-5 h-60 flex flex-col mt-10 card-hover">
              <CardHeader>
                <CardTitle className="text-xl text-center">Em Breve</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">
                  Aguarde! Em breve, novos projetos serão adicionados aqui.
                </p>
              </CardContent>
              <Progress value={62} />
            </Card>
          </div>
        </section>

        {/* CONTATO */}
        <section
          ref={contactRef}
          className="h-screen flex items-center justify-center bg-gray-600"
        >
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold mb-40">Contato</h2>
            <div className="flex gap-14 flex-wrap justify-center">
              <a
                href="https://github.com/erick-sts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-6xl icon"
              >
                <FaGithub />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=erick.sts.eo@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-6xl icon"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://outlook.live.com/owa/?path=/mail/action/compose&to=erick.sts.eo@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-6xl icon"
              >
                <FaMicrosoft />
              </a>
              <a
                href="https://wa.me/5515981485314"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-6xl icon"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.linkedin.com/in/erick-sts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-6xl icon"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </section>
        <footer className="bg-gray-800 text-center p-4">
          <p className="text-white">
            &copy; {new Date().getFullYear()} Erick Nascimento. Todos os
            direitos reservados.
          </p>
        </footer>
      </main>
    </>
  );
}
