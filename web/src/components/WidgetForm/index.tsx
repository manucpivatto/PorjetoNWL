import { CloseButton } from "../CloseButton";
import bugImageUrl  from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./steps/FeedbackSucessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {     //cria objeto pra poder descrever a imagem e colocar fonte
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de uma balão de pensamento'
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

//Object.entries(feedbackTypes) =>
/**
 * [
 * ['BUG', {...}], pra cada item do vetor que estou perguntando tenho acesso a chave e ao conteudo de cada um
 * ['IDEA', {...}],
 * ['OTHER', {...}]
 * ]
 */



export function WidgetForm() {

        const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
        const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem) md:w-auto]">
        { feedbackSent ? (
            <FeedbackSucessStep onFeedbackRestartRequested={handleRestartFeedback}/>

        ) : (
            <>
               {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />

            ) : (
                <FeedbackContentStep 
                feedbackType={feedbackType}
                onFeedbackRestartRequested={handleRestartFeedback}
                onFeedbackSent={() => setFeedbackSent(true)}
                />
            )} 
            </>
        )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="htttps://rockeseat.com.br">Rockseat</a>
            </footer>
        </div>
    );
}
  