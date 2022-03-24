import {
  colorsHelper,
  Command,
  CommandScreen,
  Input,
  Output,
  useInput,
  useOutputHandler,
  useTerminal,
} from "react-dos-terminal";
import { getConfigPrompt, getHistory, setAchieved } from "../helpers";
import { useEffect } from "react";

export const breakout = (lang: "PT-BR" | "EN") => {
  const part = 2;

  const run = (): Command => {
    setAchieved(part)
    return {
      configTerminal: getConfigPrompt(lang),
      dynamic: {
        element: <Breakout lang={lang} part={part}/>,
        options: {shouldHideTerminalOutput: true}
      },
    };
  };

  return {
    run,
    //help: helpText[lang],
  };
};

type BreakOutProps = {
  lang: "EN" | "PT-BR";
  part: number;
};

export const Breakout = ({ part, lang }: BreakOutProps) => {

  const text = getHistory(part, lang);

  const final = {
    "PT-BR": "Aperte < Enter > para fechar",
    EN: "Type < Enter > to close",
  }

  const input = useInput();
  const terminal = useTerminal();
  const output = useOutputHandler({initialOutput: '', shouldTypewrite: true});

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (e.key === 'Enter') {
        terminal.output.addToQueue([
          { action: "add", value: ["", ""] },
        ]);
        terminal.endRunningCommand();
      }
      return;
    }

    const colors = {
        background: colorsHelper.getColorByName('white'),
        color: colorsHelper.getColorByName('red'),
    }

    useEffect(() => {
      if (input.ref.current) {
        input.ref.current.scrollIntoView({ block: 'nearest' })
      }
    })

    useEffect(() => {
      text.forEach(line => {
        output.addToQueue([{action: 'add' as const, value: line}])
      });
      output.addToQueue([{action: 'add' as const, value: ['', final[lang]]}])
    }, [])

    return (
    <CommandScreen colors={colors} >
      <Output>
        <Output.Typewriter output={output} />
      </Output>
      <Input
          onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => handleKeyDown(e)}
          id="dynamic_input"
          ref={input.ref}
          prompt=">>>"
        />
    </CommandScreen>
  );
};