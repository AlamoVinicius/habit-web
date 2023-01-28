import dayjs from "dayjs";
import { HabitDayPopoverTrigger, HabitDayDisabled } from "../../atoms";
import { Sumary } from "../../organisms";

interface HabitDayCeilProps {
  collectionDates: Array<Date>;
  amountDaysToFill?: number;
  data: Sumary;
}

export function HabitDayCeil({ collectionDates, amountDaysToFill, data }: HabitDayCeilProps) {
  return (
    <div className="grid grid-rows-7 grid-flow-col gap-3">
      {collectionDates.map((date) => {
        const dayInSummary = data.find((day) => dayjs(date).isSame(day.date, "day"));

        return (
          <HabitDayPopoverTrigger
            key={date.toString()}
            date={date}
            amount={dayInSummary?.amount}
            completed={dayInSummary?.completed}
          />
        );
      })}

      {amountDaysToFill &&
        amountDaysToFill > 0 &&
        Array.from({ length: amountDaysToFill }).map((_, index) => (
          <HabitDayDisabled key={index} />
        ))}
    </div>
  );
}
