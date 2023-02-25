import Expenses from "./components/Expenses/Expenses";

const expenses = [
  { id: "e1", title: "Tea", amount: 10, date: new Date(2020, 4, 24) },
  { id: "e2", title: "Coffee", amount: 20, date: new Date(2021, 5, 25) },
  { id: "e3", title: "Milk", amount: 30, date: new Date(2022, 6, 26) },
  { id: "e4", title: "Water", amount: 40, date: new Date(2023, 7, 27) },
];

const App = () => {
  return (
    <div>
      <h2>My Demo Shop</h2>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
