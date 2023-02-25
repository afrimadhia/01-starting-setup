import Expenses from "./components/Expenses";

const expenses = [
  { id: "e1", title: "Product 1", amount: 10, date: new Date(2020, 4, 24) },
  { id: "e2", title: "Product 2", amount: 20, date: new Date(2021, 5, 25) },
  { id: "e3", title: "Product 3", amount: 30, date: new Date(2022, 6, 26) },
  { id: "e4", title: "Product 4", amount: 40, date: new Date(2023, 7, 27) },
];

function App() {
  return (
    <div>
      <h2>My Demo Shop</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
