import { ProgressBar } from "../../atoms";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import dayjs from "dayjs";

interface ContentPopverHabitProps {
  completePercentage: number;
  date: Date;
}

export const ContentPopverHabit = ({ completePercentage, date }: ContentPopverHabitProps) => {
  const dayAndMonth = dayjs(date).format("DD/MM");
  const dayOfWeek = dayjs(date).format("dddd");

  return (
    <>
      <span className="font-semibold text-zinc-400">{dayOfWeek}</span>
      <span className="mt-1 font-extrabold leading-tight text-3xl">{dayAndMonth}</span>
      <ProgressBar progress={completePercentage} />
      <div className="mt-6 flex flex-col gap-3">
        <Checkbox.Root className="flex items-center gap-3 group">
          <div className="h-8 w-8 bg-zinc-900 border-2 border-zinc-800 rounded-lg flex items-center justify-center group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
            <Checkbox.Indicator>
              <Check size={20} className="text-white" />
            </Checkbox.Indicator>
          </div>
          <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
            Beber 2L de água
          </span>
        </Checkbox.Root>
        <Checkbox.Root className="flex items-center gap-3 group">
          <div className="h-8 w-8 bg-zinc-900 border-2 border-zinc-800 rounded-lg flex items-center justify-center group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
            <Checkbox.Indicator>
              <Check size={20} className="text-white" />
            </Checkbox.Indicator>
          </div>
          <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
            Beber 2L de água
          </span>
        </Checkbox.Root>
        <Checkbox.Root className="flex items-center gap-3 group">
          <div className="h-8 w-8 bg-zinc-900 border-2 border-zinc-800 rounded-lg flex items-center justify-center group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
            <Checkbox.Indicator>
              <Check size={20} className="text-white" />
            </Checkbox.Indicator>
          </div>
          <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
            Beber 2L de água
          </span>
        </Checkbox.Root>
      </div>
    </>
  );
};
