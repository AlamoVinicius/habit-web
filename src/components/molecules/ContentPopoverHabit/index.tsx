import { ProgressBar } from "../../atoms";

interface ContentPopverHabitProps {
  completePercentage: number;
}

export const ContentPopverHabit = ({ completePercentage }: ContentPopverHabitProps) => (
  <>
    <span className="font-semibold text-zinc-400">terça-feira</span>
    <span className="mt-1 font-extrabold leading-tight text-3xl">23/01</span>
    <ProgressBar progress={completePercentage} />
  </>
);
