import { useState, useMemo } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredList = useMemo(() => {
    return props.items.filter(
      (item) => item.date.getFullYear() === parseInt(filteredYear)
    ); // item.date.getFullYear() ===
  }, [filteredYear]);

  return (
    <div>
      <Card classes="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredList}/>
        <ExpensesList items={filteredList}/>
      </Card>
    </div>
  );
}
export default Expenses;
