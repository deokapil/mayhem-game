import { useState } from "react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mayhem - Music Trivia | Music Mayhem Game" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [gameCode, setGameCode] = useState("");
  return (
    <main className="flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-center mb-12">TIME TO MAYHEM!</h2>

      {/* Game code input */}
      <div className="w-full max-w-md mb-6">
        <p className="text-center mb-2">ENTER GAME CODE</p>
        <input
          type="text"
          value={gameCode}
          onChange={(e) => setGameCode(e.target.value)}
          className="w-full bg-transparent border-b-2 border-yellow-400 text-center py-2 focus:outline-none"
          placeholder="Game Code is required"
        />
      </div>

      {/* Join button */}
      <button className="bg-blue-500 text-white font-bold py-3 px-12 rounded-full mb-16 hover:bg-blue-600 transition-colors">
        JOIN
      </button>

      {/* Game features */}
      <div className="grid grid-cols-3 gap-6 w-full max-w-3xl mb-16">
        <div className="flex flex-col items-center text-center">
          <div className="mb-3 text-yellow-400">
            <img
              src="images/icon_music.svg"
              alt="Music Icon"
              width="40"
              height="40"
            />
          </div>
          <p className="text-sm text-yellow-400">
            Guess The Song Title & Artist
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-3 ">
            <img
              src="images/icon_stopwatch.svg"
              alt="Timer Icon"
              width="40"
              height="40"
            />
          </div>
          <p className="text-sm text-yellow-400">
            Faster Answers Get More Points
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-3 text-yellow-400">
            <img
              src="images/icon_spelling.svg"
              alt="Timer Icon"
              width="40"
              height="40"
            />
          </div>
          <p className="text-sm text-yellow-400">
            To Score, Just Get Close! (70%)
          </p>
        </div>
      </div>

      {/* Navigation links */}
      <div className="flex justify-center space-x-6 border-t border-gray-600 pt-4 w-full max-w-md">
        <a
          href="#"
          className="text-white hover:text-yellow-400 transition-colors"
        >
          Live
        </a>
        <span className="text-gray-400">|</span>
        <a
          href="#"
          className="text-white hover:text-yellow-400 transition-colors"
        >
          Login
        </a>
        <span className="text-gray-400">|</span>
        <a
          href="#"
          className="text-white hover:text-yellow-400 transition-colors"
        >
          Register
        </a>
      </div>
    </main>
  );
}
