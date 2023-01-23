import { HabitDayPopoverTrigger, HabitDayDisabled } from "../../atoms";

interface HabitDayCeilProps {
  collectionDates: Array<Date>;
  amountDaysToFill?: number;
}

export function HabitDayCeil({ collectionDates, amountDaysToFill }: HabitDayCeilProps) {
  return (
    <div className="grid grid-rows-7 grid-flow-col gap-3">
      {collectionDates.map((date) => (
        <HabitDayPopoverTrigger
          key={date.toString()}
          amount={5}
          completed={Math.round(Math.random() * 5)}
        />
      ))}

      {amountDaysToFill &&
        amountDaysToFill > 0 &&
        Array.from({ length: amountDaysToFill }).map((_, index) => (
          <HabitDayDisabled key={index} />
        ))}
    </div>
  );
}
