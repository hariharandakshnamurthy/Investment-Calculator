import Header from "./components/Header.jsx";
import Table from "./components/Table.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <div className="center">
      <Header />
      <UserInput input={userInput} onChange={handleChange} />
      <Table input={userInput} />
    </div>
  );
}

export default App;
