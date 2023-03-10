const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

export function ColumDays() {
  return (
    <div className="grid grid-rows-7 grid-flow-row gap-3">
      {weekDays.map((weekDay, index) => (
        <div
          key={index}
          className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
        >
          {weekDay}
        </div>
      ))}
    </div>
  );
}
