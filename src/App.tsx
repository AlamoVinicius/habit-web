import { Habit } from "./components";

const App = () => {
  return (
    <>
      <Habit completed={10} />
      <Habit completed={50} />
      <Habit completed={100} />
    </>
  );
};

export default App;
