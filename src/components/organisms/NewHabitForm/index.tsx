import { Check } from "phosphor-react";
import * as Checkbox from "@radix-ui/react-checkbox";

import { InputForm } from "../../molecules";
import { FormEvent, useState, ChangeEvent } from "react";

const availableWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sabado",
];

export const NewHabitForm = () => {
  const [inputForm, setInputForm] = useState<{ title: string; weekDays: number[] }>({
    title: "",
    weekDays: [],
  });

  function createNewHabit(event: FormEvent) {
    event.preventDefault();
    console.log(inputForm);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputForm((prev) => {
      return {
        ...prev,
        title: event.target.value,
      };
    });
  };

  const handleToggleWeekDay = (weekDay: number) => {
    if (inputForm.weekDays.includes(weekDay)) {
      const filteredWeekDay = inputForm.weekDays.filter((day) => day !== weekDay);

      setInputForm((prev) => {
        return {
          ...prev,
          weekDays: filteredWeekDay,
        };
      });
    } else {
      setInputForm((prev) => {
        return {
          ...prev,
          weekDays: [...prev.weekDays, weekDay],
        };
      });
    }
  };

  return (
    <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
      <InputForm
        label="Qual seu comprometimento?"
        type="text"
        id="title"
        placeholder="Ex../ Exercícios, dormir bem, etc..."
        autoFocus
        onChange={handleChange}
      />

      <label htmlFor="" className="font-semibold leading-tight mt-2">
        Qual a recorrência?
      </label>

      {availableWeekDays.map((avaiableWeekDay, index) => (
        <div key={avaiableWeekDay} className="flex flex-col gap-2 mt-3">
          <Checkbox.Root
            className="flex items-center gap-3 group"
            onCheckedChange={() => handleToggleWeekDay(index)}
          >
            <div className="h-8 w-8 bg-zinc-900 border-2 border-zinc-800 rounded-lg flex items-center justify-center group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
              <Checkbox.Indicator>
                <Check size={20} className="text-white" />
              </Checkbox.Indicator>
            </div>
            <span className=" text-white leading-tight ">{avaiableWeekDay}</span>
          </Checkbox.Root>
        </div>
      ))}

      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
};
