import { useState } from 'react';

import logo from './assets/investment-calculator-logo.png';
import BaseForm from './components/form/FormComponent';
import styles from './App.module.css';
import Table from './components/form/Results/Table';

function App() {
  const [yearlyInterest, setYearlyInterest] = useState([]);
  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt='logo' />
        <h1>Investment Calculator</h1>
      </header>
      <BaseForm
        onSaveYearlyInterest={setYearlyInterest}
        onClearForm={() => setYearlyInterest([])}
      />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <Table yearlyInterest={yearlyInterest} />
    </>
  );
}

export default App;
