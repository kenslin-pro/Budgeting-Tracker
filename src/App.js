import React, { useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balanace";
import IncomeExpenses from "./components/IncomeExpenses";
import Transactions from "./components/Transactions";
import AddTransaction from "./components/AddTransaction";
import { TransactionProvider } from "./context/TransactionContext";

function App() {
  return (
    <div>
      <TransactionProvider>
        <Header />
        <Balance />
        <IncomeExpenses />
        <Transactions/>
        <AddTransaction />
      </TransactionProvider>
    </div>
  );
}

export default App;
