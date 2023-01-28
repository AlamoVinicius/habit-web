import { useEffect, useState } from "react";
import { api } from "../../../lib/axios";
import { generateDatesFromStartYear } from "../../../utils/generate-dates-from-init-year";
import { ColumDays, HabitDayCeil } from "../../molecules";

const summaryDates = generateDatesFromStartYear();

const minimuSummaryDatesSize = 18 * 7; // 18 weeks
const amountOfDaaysToFill = minimuSummaryDatesSize - summaryDates.length;

export type Sumary = Array<{
  id: string;
  date: string;
  amount: number;
  completed: number;
}>;

export const SummaryTable = () => {
  const [summary, setSummary] = useState<Sumary>([]);

  useEffect(() => {
    api.get("/summary").then((resp) => setSummary(resp.data));
  }, []);

  return (
    <div className="w-full flex">
      <ColumDays />
      <HabitDayCeil
        collectionDates={summaryDates}
        amountDaysToFill={amountOfDaaysToFill}
        data={summary}
      />
    </div>
  );
};
