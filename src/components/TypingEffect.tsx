import { useEffect, useState, useRef } from "react";

const TypingEffect = () => {
  const [text, setText] = useState("");
  const message = "Olá eu sou o Erick seja bem-vindo! ";
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = 0;
    setText(""); 

    const interval = setInterval(() => {
      setText((prevText) => {
        if (indexRef.current < message.length) {
          const newText = message.substring(0, indexRef.current + 1);
          indexRef.current++;
          return newText;
        } else {
          clearInterval(interval);
          return prevText;
        }
      });
    }, 200);

    return () => clearInterval(interval);
  }, []); 

  return <h1 className="text-4xl font-bold">{text}</h1>;
};

export default TypingEffect;
