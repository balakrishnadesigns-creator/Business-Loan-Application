import { Fragment } from 'react';
import { Check } from 'lucide-react';

const Stepper = ({ currentStep = 1 }) => {
  const steps = [
    { num: 1, label: 'Business Details' },
    { num: 2, label: 'Financials' },
    { num: 3, label: 'Documents' },
    { num: 4, label: 'Guarantor' },
    { num: 5, label: 'Review' },
    { num: 6, label: 'Submit' },
  ];

  return (
    <div className="stepper-container" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.5rem 2rem',
      backgroundColor: 'white',
      borderBottom: '1px solid var(--border)'
    }}>
      {steps.map((step, index) => {
        const isCompleted = step.num < currentStep;
        const isActive = step.num === currentStep;
        
        return (
          <Fragment key={step.num}>
            <div className="stepper-item" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                backgroundColor: isCompleted ? 'white' : (isActive ? 'var(--primary)' : 'var(--bg-color)'),
                color: isCompleted ? 'var(--success-text)' : (isActive ? 'white' : 'var(--text-muted)'),
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.875rem', fontWeight: 600,
                border: isCompleted ? '1px solid var(--success-text)' : (isActive ? 'none' : '1px solid var(--border)')
              }}>
                {isCompleted ? <Check size={16} /> : step.num}
              </div>
              <span style={{
                fontSize: '0.875rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? 'var(--text-main)' : 'var(--text-muted)'
              }}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className="stepper-line" style={{ flex: 1, height: '1px', backgroundColor: 'var(--border)', margin: '0 1rem' }} />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Stepper;
