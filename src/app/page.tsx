'use client'
import { useState } from "react";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure",
  "Cutuu please",
  "Don't do this to me",
  "I'm gonna cry",
  "You're breaking my heart :(",
];

export default function Home() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;


  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="" />
          <div className="text-4xl font-bold my-4 text-center">Yayy!! I love you cutuuuu</div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" alt="" />
          <div>
            <h1 className="text-4xl my-4 text-center">
              Will you be my valentine cutuu?
            </h1>
          </div>
          <div className="flex flex-wrap flex-col md:flex-row gap-4 items-center justify-center">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
