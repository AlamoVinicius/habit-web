import { useState } from "react";

import LogoImage from "../../../assets/Logo.svg";
import { ModalNewHabit } from "../ModalNewHabit";

export const Header = () => {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={LogoImage} alt="Habit" />
      <ModalNewHabit />
    </div>
  );
};
