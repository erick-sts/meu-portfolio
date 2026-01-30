import { useEffect, useState, useRef } from "react";

const phrases = [
  "Olá, eu sou o Erick.",
  "Seja bem-vindo ao meu portfólio.",
  "Desenvolvedor Front‑end & Full Stack.",
];

const TypingEffect = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(90);

  const charIndexRef = useRef(0);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    const tick = () => {
      const current = phrases[phraseIndex % phrases.length];

      if (!isDeleting) {
        // typing
        setText(current.substring(0, charIndexRef.current + 1));
        charIndexRef.current += 1;

        if (charIndexRef.current === current.length) {
          setIsDeleting(true);
          setSpeed(1200); // pause before deleting
        } else {
          setSpeed(90 - Math.floor(Math.random() * 30));
        }
      } else {
        // deleting
        setText(current.substring(0, charIndexRef.current - 1));
        charIndexRef.current -= 1;
        setSpeed(40);

        if (charIndexRef.current === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setSpeed(350);
        }
      }
    };

    const id = setTimeout(() => {
      if (mountedRef.current) tick();
    }, speed);

    return () => clearTimeout(id);
  }, [text, isDeleting, phraseIndex, speed]);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return (
    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight animate-fade-in-up">
      <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-amber-400 animate-gradient-pan bg-[length:200%_200%]">
        {text}
      </span>
      <span
        className="ml-1 inline-block w-1 h-7 bg-current align-bottom opacity-100"
        style={{ animation: "blink 1.2s steps(2, start) infinite" }}
      />
    </h1>
  );
};

export default TypingEffect;
