import { ReactNode } from "react";
import { HtmlHTMLAttributes } from "react";
import { CircleNotch } from "phosphor-react";

interface ButtonVioletBorder extends HtmlHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  loading?: boolean;
}

export const ButtonVioletBorder = ({ icon, loading, children, ...rest }: ButtonVioletBorder) => (
  <button
    type="button"
    className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300 bg-black text-white"
    {...rest}
  >
    {icon && icon}
    {children}
    {loading && <CircleNotch size={22} className="motion-safe:animate-spin text-violet-500" />}
  </button>
);
