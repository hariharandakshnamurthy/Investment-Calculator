import { calculateInvestmentResults, formatter } from "../util/investment";

function Table({ input }) {
  const result = calculateInvestmentResults(input);
  console.log("result", result);
  const initialInvestment =
    result[0]?.valueEndOfYear -
    result[0]?.interest -
    result[0]?.annualInvestment;
  console.log(result, initialInvestment);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      <tbody>
        {result?.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{formatter.format(yearData.year)}</td>
              <td>{formatter.format(yearData.annualInvestment)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
