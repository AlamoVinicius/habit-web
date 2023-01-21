import { generateDatesFromStartYear } from "../../../utils/generate-dates-from-init-year";
import { ColumDays, HabitDayCeil } from "../../molecules";

const summaryDates = generateDatesFromStartYear();

const minimuSummaryDatesSize = 18 * 7; // 18 weeks
const amountOfDaaysToFill = minimuSummaryDatesSize - summaryDates.length;

export const SummaryTable = () => {
  return (
    <div className="w-full flex">
      <ColumDays />
      <HabitDayCeil collectionDates={summaryDates} amountDaysToFill={amountOfDaaysToFill} />
    </div>
  );
};
