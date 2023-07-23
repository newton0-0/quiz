import { useState } from "react";
import "./App.css";
import { Grid, LinearProgress, Stack, linearProgressClasses } from "@mui/material";
import InternalContent from "./InternalContent";
import styled from "@emotion/styled";

const questions = [
  {
    questionText: "Qual o idiomafalado no Brasil?",
    answerOptions: [
      { answerText: "Português", isCorrect: true },
      { answerText: "Inglês", isCorrect: false },
      { answerText: "Francês", isCorrect: false },
      { answerText: "Alemão", isCorrect: false },
    ],
  },
  {
    questionText:
      "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
    answerOptions: [
      { answerText: "Japão e Serra Leoa", isCorrect: true },
      { answerText: "Austrália e Afeganistã", isCorrect: false },
      { answerText: "Itália e Chade", isCorrect: false },
      { answerText: "Brasil e Congo", isCorrect: false },
    ],
  },
  {
    questionText: "Qual empresa criou o Iphone?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "Como aprender a programar?",
    answerOptions: [
      { answerText: "Praticando o que se aprende", isCorrect: true },
      { answerText: "Vendo vídeo", isCorrect: false },
      { answerText: "Lendo", isCorrect: false },
      { answerText: "Dormindo", isCorrect: false },
    ],
  },
];

const CustomLinearProgress = styled(LinearProgress)(({ datatype }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: 'light gray',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor:
      datatype === 'wrong'
        ? 'red'
        : 'green',
  },
}));

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // console.log(score);
  return (
    <Stack direction="column" spacing={2}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs>
          <CustomLinearProgress
            variant="determinate"
            value={score * 25}
            datatype="right"
          />
        </Grid>
        <Grid item xs>
          <CustomLinearProgress
            variant="determinate"
            value={(currentQuestion - score) * 25}
            datatype='wrong'
          />
        </Grid>
      </Grid>

      {/*
       */}
      <InternalContent
        questions={questions}
        score={score}
        setScore={setScore}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        showScore={showScore}
        setShowScore={setShowScore}
      />
    </Stack>
  );
}

export default App;
