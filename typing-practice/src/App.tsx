import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import UserTypings from "./components/UserTyping";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helpers";

const App = () => {
  const { state, words, timeLeft, typed, errors, totalTyped, restart } = useEngine()


  return (
    <>
      <h1 className="text-center text-slate-500 py-5 text-5xl">Typing Practice</h1>
      <h3 className="text-center text-slate-500 py-8 text-2xl">by Lewis Hodgson</h3>
      <CountdownTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GeneratedWords words={words} />
        <UserTypings className="absolute inset-0" words={words} userInput={typed} />
      </WordsContainer>
      <RestartButton
        className={"mx-auto mt-10 text-blue-400"}
        onRestart={restart}
      />
      <Results
        state={state}
        className="mt-10"
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
    </>
  );
}

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative text-3xl max-w-2xl leading-relaxed break-normal mt-3">
      {children}
    </div>
  )

};

const GeneratedWords = ({ words }: { words: string}) => {
  return <div className="text-slate-400">{words}</div>
};
const CountdownTimer = ({timeLeft}: {timeLeft: number}) => {
  return <h2 className="text-blue-400 text-center font-small">{timeLeft}s</h2>
};
export default App;
