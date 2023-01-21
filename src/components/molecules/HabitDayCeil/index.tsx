import { HabitDay } from "../../atoms";

interface HabitDayCeilProps {
  collectionDates: Array<Date>;
  amountDaysToFill?: number;
}

export function HabitDayCeil({ collectionDates, amountDaysToFill }: HabitDayCeilProps) {
  return (
    <div className="grid grid-rows-7 grid-flow-col gap-3">
      {collectionDates.map((date) => (
        <HabitDay key={date.toString()} />
      ))}

      {amountDaysToFill &&
        amountDaysToFill > 0 &&
        Array.from({ length: amountDaysToFill }).map((_, index) => <HabitDay key={index} disabled />)}
    </div>
  );
}
