import classes from './CalculateResult.module.css'

function CalculateResult({
  data,
  initialInvestment
}) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
  return (
    <table className={classes.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {
            data && 
            data.map((item) => <tr key={item.id}>
              <td>{item.year}</td>
              <td>{formatter.format(item.savingsEndOfYear)}</td>
              <td>{formatter.format(item.yearlyInterest)}</td>
              <td>{formatter.format(item.savingsEndOfYear - initialInvestment - (item.yearlyContribution * item.year))}</td>
              <td>{formatter.format(item.savingsEndOfYear + item.yearlyContribution * item.year)}</td>
            </tr>)
          }
        </tbody>
      </table>
  )
}
export default CalculateResult;