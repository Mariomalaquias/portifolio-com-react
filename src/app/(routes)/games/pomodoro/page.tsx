"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";

import { FiClock, FiMoon, FiPlay, FiPause, FiPlus, FiX } from "react-icons/fi";
import { GiTomato } from "react-icons/gi";
import Link from "next/link";

const POMODORO_TIME = 25 * 60; // 25 minutos
const SHORT_BREAK_TIME = 5 * 60; // 5 minutos
const LONG_BREAK_TIME = 15 * 60; // 15 minutos

type Mode = "pomodoro" | "shortBreak" | "longBreak";
type Task = { id: number; text: string; completed: boolean };

export default function PomodoroTimer() {
  const [timeRemaining, setTimeRemaining] = useState(POMODORO_TIME);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<Mode>("pomodoro");

  const playSound = (soundUrl: string) => {
    const audio = new Audio(soundUrl);
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.error("Erro ao tocar o áudio:", error);
      });
    }
  };

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Tarefa de exemplo 1", completed: false },
    { id: 2, text: "Tarefa de exemplo 2", completed: true },
  ]);
  const [newTaskText, setNewTaskText] = useState("");

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsActive(false);
      playSound("/gong.mp3");
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeRemaining]);

  // Efeito para reiniciar o timer quando o modo muda
  useEffect(() => {
    setIsActive(false);
    switch (mode) {
      case "pomodoro":
        setTimeRemaining(POMODORO_TIME);
        break;
      case "shortBreak":
        setTimeRemaining(SHORT_BREAK_TIME);
        break;
      case "longBreak":
        setTimeRemaining(LONG_BREAK_TIME);
        break;
    }
  }, [mode]);

  const toggleTimer = () => setIsActive(!isActive);

  const selectMode = (newMode: Mode) => setMode(newMode);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskText.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: newTaskText, completed: false },
      ]);
      setNewTaskText("");
    }
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const getTotalTime = () => {
    switch (mode) {
      case "pomodoro":
        return POMODORO_TIME;
      case "shortBreak":
        return SHORT_BREAK_TIME;
      case "longBreak":
        return LONG_BREAK_TIME;
      default:
        return POMODORO_TIME;
    }
  };

  const totalTime = getTotalTime();
  const progress = (timeRemaining / totalTime) * 100;
  const radius = 150;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f0c29] to-[#24243e] p-4 md:p-8 flex items-center justify-center">
      <Card
        className="w-full max-w-6xl mx-auto
                   bg-gradient-to-br from-[#0f0c29] via-[#1c1642] to-[#24243e] text-gray-200
                   border-cyan-500/20 shadow-[0_0_50px_rgba(0,255,255,0.15),_0_0_70px_rgba(255,69,0,0.1)]"
        style={{ fontFamily: "var(--font-roboto)" }}
      >
        <CardContent className="p-6 md:p-12 flex flex-col lg:flex-row lg:justify-center items-center lg:items-start gap-12">
          <Link href={"/"}>
            <Button className="absolute top-10 left-10 cursor-pointer hover:bg-blue-900 transition duration-700 ease-in-out bg-blue-950">
              Sair do Jogo
            </Button>
          </Link>
          <div className="flex flex-row flex-wrap justify-center lg:flex-col gap-4 w-full lg:w-auto">
            <Button
              className={`flex items-center gap-3 px-6 py-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out text-base font-medium min-w-[180px]
                       ${
                         mode === "pomodoro"
                           ? "bg-cyan-400 text-[#0f0c29] font-bold shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:bg-cyan-300"
                           : "bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                       }`}
              onClick={() => selectMode("pomodoro")}
            >
              <GiTomato /> Pomodoro
            </Button>
            <Button
              className={`flex items-center gap-3 px-6 py-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out text-base font-medium min-w-[180px]
                       ${
                         mode === "longBreak"
                           ? "bg-cyan-400 text-[#0f0c29] font-bold shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:bg-cyan-300"
                           : "bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                       }`}
              onClick={() => selectMode("longBreak")}
            >
              <FiMoon /> Pausa Longa
            </Button>
            <Button
              className={`flex items-center gap-3 px-6 py-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out text-base font-medium min-w-[180px]
                       ${
                         mode === "shortBreak"
                           ? "bg-cyan-400 text-[#0f0c29] font-bold shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:bg-cyan-300"
                           : "bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                       }`}
              onClick={() => selectMode("shortBreak")}
            >
              <FiClock /> Pausa curta
            </Button>
          </div>

          <div className="relative flex justify-center items-center my-8 lg:my-0 lg:mx-8">
            <svg
              className="transform -rotate-90 w-[280px] h-[280px] sm:w-[340px] sm:h-[340px]"
              viewBox="0 0 340 340"
            >
              <defs>
                <linearGradient
                  id="neonGradientTailwind"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#00ffff" />
                  <stop offset="100%" stopColor="#ff4500" />
                </linearGradient>
              </defs>
              <circle
                className="stroke-white/10"
                strokeWidth="15"
                fill="transparent"
                r={radius}
                cx="170"
                cy="170"
              />
              <circle
                className="transition-all duration-500 linear"
                strokeWidth="15"
                fill="transparent"
                r={radius}
                cx="170"
                cy="170"
                style={{
                  strokeDasharray: circumference,
                  strokeDashoffset: offset,
                  stroke: "url(#neonGradientTailwind)",
                  strokeLinecap: "round",
                  filter:
                    "drop-shadow(0 0 5px rgba(0, 255, 255, 0.7)) drop-shadow(0 0 3px rgba(255, 69, 0, 0.5))",
                }}
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span
                className="text-white text-7xl sm:text-[5.5rem] font-extrabold"
                style={{
                  fontFamily: "var(--font-orbitron)",
                  textShadow: "0 0 15px rgba(255,255,255,0.7)",
                }}
              >
                {formatTime(timeRemaining)}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="bg-transparent border-none text-gray-200 cursor-pointer transition-all duration-300 ease-in-out mt-2
                           hover:text-cyan-400 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                onClick={toggleTimer}
              >
                {isActive ? <FiPause size={32} /> : <FiPlay size={32} />}
              </Button>
            </div>
          </div>

          <Card className="bg-black/20 border-cyan-500/20 w-full lg:w-[320px] min-h-[400px]">
            <CardHeader className="flex flex-row justify-between items-center pb-3 border-b border-cyan-500/20">
              <CardTitle
                className="m-0 text-cyan-400 font-semibold text-xl"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                Tarefas
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="list-none p-0 m-0 max-h-[250px] overflow-y-auto custom-scrollbar">
                {tasks.map((task) => (
                  <li
                    key={task.id}
                    className={`bg-white/5 px-4 py-3 rounded-md mb-2 flex justify-between items-center transition-all duration-300 ease-in-out
                               border-l-4 ${
                                 task.completed
                                   ? "border-orange-500/50 opacity-60"
                                   : "border-cyan-500/50"
                               }`}
                  >
                    <Checkbox
                      id={`task-${task.id}`}
                      checked={task.completed}
                      onCheckedChange={() => toggleTask(task.id)}
                      className="border-gray-400 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                    />
                    <label
                      htmlFor={`task-${task.id}`}
                      className={`cursor-pointer flex-1 ml-3 text-base ${
                        task.completed ? "line-through opacity-70" : ""
                      }`}
                    >
                      {task.text}
                    </label>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteTask(task.id)}
                      className="bg-transparent border-none text-red-500 opacity-70 cursor-pointer text-lg hover:opacity-100"
                    >
                      <FiX />
                    </Button>
                  </li>
                ))}
              </ul>
              <form className="flex mt-6" onSubmit={handleAddTask}>
                <Input
                  type="text"
                  value={newTaskText}
                  onChange={(e) => setNewTaskText(e.target.value)}
                  placeholder="Adicionar nova tarefa"
                  className="flex-1 bg-black/30 border border-cyan-500/20 text-gray-200 p-3 rounded-r-none outline-none transition-all duration-300 ease-in-out
                             focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)]
                             focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button
                  type="submit"
                  className="bg-cyan-400 text-[#0f0c29] border-none px-4 rounded-l-none cursor-pointer text-xl transition-all duration-300 ease-in-out
                             hover:bg-cyan-500 h-10"
                >
                  <FiPlus />
                </Button>
              </form>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
