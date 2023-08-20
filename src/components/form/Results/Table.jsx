import { formatCurrency } from '../../../utils/formatNumbers';
import TableUI from '../../UI/Table/Table';

const Table = ({ yearlyInterest }) => (
  <TableUI
    data={yearlyInterest}
    format={{
      currentSavings: formatCurrency,
      yearlyInterest: formatCurrency,
      totalInterest: formatCurrency,
      investedCapital: formatCurrency,
    }}
    headers={[
      'Year',
      'Total Savings',
      'Interest (Year)',
      'Total Interest',
      'Invested Capital',
    ]}
    subHeaders={[
      'YEAR NUMBER',
      'TOTAL SAVINGS END OF YEAR',
      'INTEREST GAINED IN YEAR',
      'TOTAL INTEREST GAINED',
      'TOTAL INVESTED CAPITAL',
    ]}
  />
);

export default Table;
