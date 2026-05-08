import { useSelector, useDispatch } from "react-redux";
import { useCallback, useRef } from "react";
import { executeCode } from "../services/code.service";
import { setLang, setCode, setOutput, setInput, setRunning } from "../features/slice";
import { lang as template } from "../Data/lang";

export const useEditorActions = () => {
    const dispatch = useDispatch();
    const timerRef = useRef(null);
    const inputTimerRef = useRef(null)

    const code = useSelector((state) => state.CodeEditor.code);
    const lang = useSelector((state) => state.CodeEditor.lang);
    const input = useSelector((state) => state.CodeEditor.input);


    const runCode = useCallback(
        async () => {
            dispatch(setRunning(true));
            clearTimeout(timerRef.current);
            
            timerRef.current = setTimeout(async () => {
                
                const res = await executeCode({
                    code,
                    language: lang,
                    input
                });
                
                dispatch(setOutput(res));

                dispatch(setRunning(false));
            }, 1000);
        }

        , [code, lang, input, dispatch])



    const ClearAll = () => {
        dispatch(setLang("Python"));
        dispatch(setCode(template["Python"]));
        dispatch(setOutput(""));
        dispatch(setInput(""));
        dispatch(setRunning(false));
    }

    const ClearOutput = () => {
        dispatch(setOutput(""));
    }


    const ClearInput = () => {
        dispatch(setInput(""));
    }

    const InputChange = (e) => {
        const value = e.target.value;
        dispatch(setInput(value));

        // clearTimeout(inputTimerRef.current);

        // inputTimerRef.current = setTimeout(() => {
        //     dispatch(setInput(value));
        //     console.log(value);
        // }, 100); // 100 or 250
    }

    return { runCode, ClearAll, ClearOutput, ClearInput, InputChange };

}
