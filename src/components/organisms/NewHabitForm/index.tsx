import { Check } from "phosphor-react";
import { InputForm } from "../../molecules";

export const NewHabitForm = () => {
  return (
    <form className="w-full flex flex-col mt-6">
      <InputForm
        label="Qual seu comprometimento?"
        type="text"
        id="title"
        placeholder="Ex../ Exercícios, dormir bem, etc..."
        autoFocus
      />

      <label htmlFor="" className="font-semibold leading-tight">
        Qual a recorrência?
      </label>
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
