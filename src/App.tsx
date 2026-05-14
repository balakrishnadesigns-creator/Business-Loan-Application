import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Stepper from './components/Stepper';
import ApplicationForm from './components/ApplicationForm';
import FinancialsForm from './components/FinancialsForm';
import DocumentsForm from './components/DocumentsForm';
import GuarantorForm from './components/GuarantorForm';
import ReviewForm from './components/ReviewForm';
import SubmitForm from './components/SubmitForm';

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-wrapper" style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
        <Header currentStep={currentStep} />
        <Stepper currentStep={currentStep} />
        {currentStep === 1 && <ApplicationForm onNext={() => setCurrentStep(2)} goToStep={setCurrentStep} />}
        {currentStep === 2 && <FinancialsForm onBack={() => setCurrentStep(1)} onNext={() => setCurrentStep(3)} goToStep={setCurrentStep} />}
        {currentStep === 3 && <DocumentsForm onBack={() => setCurrentStep(2)} onNext={() => setCurrentStep(4)} goToStep={setCurrentStep} />}
        {currentStep === 4 && <GuarantorForm onBack={() => setCurrentStep(3)} onNext={() => setCurrentStep(5)} goToStep={setCurrentStep} />}
        {currentStep === 5 && <ReviewForm onBack={() => setCurrentStep(4)} onNext={() => setCurrentStep(6)} goToStep={setCurrentStep} />}
        {currentStep === 6 && <SubmitForm />}
      </div>
    </div>
  );
}

export default App;
