import { ButtonVioletBorder } from "../../atoms";

import { Plus } from "phosphor-react";

import LogoImage from "../../../assets/Logo.svg";

export const Header = () => {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={LogoImage} alt="Habit" />
      <ButtonVioletBorder icon={<Plus size={20} className="text-violet-500" />}>
        Novo hábito
      </ButtonVioletBorder>
    </div>
  );
};
