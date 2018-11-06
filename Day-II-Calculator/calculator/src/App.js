import React from 'react';
import './App.sass';

import ButtonContainer from './components/DisplayComponents/ButtonContainer';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="calculator">

      <CalculatorDisplay />
      <ButtonContainer />

    </div>
  );
};

export default App;
