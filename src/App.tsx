import React, { useState } from 'react';
import MainPage from './components/MainPage';
import CheckInFlow from './components/CheckInFlow';
import CheckOutFlow from './components/CheckOutFlow';

const App: React.FC = () => {
  const [currentFlow, setCurrentFlow] = useState<'main' | 'checkin' | 'checkout'>('main');

  const handleNavigate = (flow: 'checkin' | 'checkout') => {
    setCurrentFlow(flow);
  };

  const handleBack = () => {
    setCurrentFlow('main');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentFlow === 'main' && <MainPage onNavigate={handleNavigate} />}
      {currentFlow === 'checkin' && <CheckInFlow onBack={handleBack} />}
      {currentFlow === 'checkout' && <CheckOutFlow onBack={handleBack} />}
    </div>
  );
};

export default App;