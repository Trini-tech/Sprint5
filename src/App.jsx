import { MyCard } from "./MyCard.jsx";
import { useState } from "react";

export function App() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < tutorialData.length - 1) {
      setStep(step + 1);
    }
  };

  const tutorialData = [
    {
      title: "Dedica moltes hores",
      description: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
      bgColor: "#4DA2A9",
      image: "./src/assets/images/time_managment.svg",
    },
    {
      title: "Programa projectes propis",
      description: "Més val 10 hores treballant en projectes propis que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
      bgColor: "#D3D4D9",
      image: "./src/assets/images/programming.svg",
    },
    {
      title: "Procura descansar",
      description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      bgColor: "#FAD166",
      image: "./src/assets/images/meditation.svg",
    },
  ];

  return (
    <>
      <MyCard {...tutorialData[step]} nextStep={nextStep} />
    </>
  );
}
