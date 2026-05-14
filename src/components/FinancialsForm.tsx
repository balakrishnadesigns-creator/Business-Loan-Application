import React, { useState } from 'react';
import { Info, CheckCircle2, ChevronUp, ChevronDown, ArrowRight, ArrowLeft, Save, Edit3, MessageSquare, PhoneCall, Clock } from 'lucide-react';
import { Input, Select } from './UIComponents';

const Section = ({ title, icon: Icon, expanded, onToggle, children }: any) => (
  <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--border)', marginBottom: '1rem', overflow: 'hidden' }}>
    <div
      style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', backgroundColor: expanded ? '#f8faff' : 'white', borderBottom: expanded ? '1px solid var(--border)' : 'none' }}
      onClick={onToggle}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Icon size={18} color="var(--primary)" />
        <span style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.875rem' }}>{title}</span>
      </div>
      {expanded ? <ChevronUp size={20} className="text-muted" /> : <ChevronDown size={20} className="text-muted" />}
    </div>
    {expanded && (
      <div style={{ padding: '1.5rem' }}>
        {children}
      </div>
    )}
  </div>
);

const FinancialsForm = ({ onBack, onNext }: any) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['revenue', 'banking', 'loans', 'tax', 'profitability', 'other']);



  const toggleSection = (id: string) => {
    setExpandedSections(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const isExpanded = (id: string) => expandedSections.includes(id);

  return (
    <div className="main-content" style={{ padding: '2rem', flex: 1, overflowY: 'auto', display: 'flex', gap: '2rem' }}>
      
      {/* Main Content Area */}
      <div className="form-main" style={{ flex: 1 }}>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Financial Information</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <p className="text-muted text-sm">Please provide accurate financial information about your business</p>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.5rem 0.75rem', backgroundColor: 'var(--bg-color)',
              borderRadius: '0.375rem', fontSize: '0.75rem', color: 'var(--text-main)'
            }}>
              <Info size={14} className="text-primary" style={{ color: 'var(--primary)' }} />
              <span>All fields marked <span className="required-asterisk">*</span> are mandatory</span>
            </div>
          </div>
        </div>

        {/* Revenue Details */}
        <Section title="Revenue Details" icon={Info} expanded={isExpanded('revenue')} onToggle={() => toggleSection('revenue')}>
          <div className="form-row">
            <Input label="Monthly Average Revenue (₹)" required defaultValue="12,50,000" />
            <Input label="Annual Turnover (Last FY) (₹)" required defaultValue="1,25,00,000" />
            <Select label="Cash Flow Trend" required defaultValue="Increasing">
              <option value="Increasing">Increasing</option>
              <option value="Stable">Stable</option>
              <option value="Decreasing">Decreasing</option>
              <option value="Fluctuating">Fluctuating</option>
            </Select>
            <Select label="Business Seasonality" defaultValue="Moderate">
              <option value="None">None</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </Select>
          </div>
          <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#e6f6eb', border: '1px solid #bbf7d0', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <CheckCircle2 size={16} />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: '#065f46', fontSize: '0.875rem' }}>Good going!</div>
                <div style={{ fontSize: '0.75rem', color: '#065f46' }}>Your turnover is consistent with GST data.</div>
              </div>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--primary)', cursor: 'pointer', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              View details <ArrowRight size={12} />
            </span>
          </div>
        </Section>

        {/* Banking Details */}
        <Section title="Banking Details" icon={Info} expanded={isExpanded('banking')} onToggle={() => toggleSection('banking')}>
          <div className="form-row" style={{ flexWrap: 'nowrap' }}>
            <Select label="Primary Bank" required defaultValue="HDFC Bank">
              <option value="HDFC Bank">HDFC Bank</option>
              <option value="ICICI Bank">ICICI Bank</option>
              <option value="State Bank of India">State Bank of India</option>
              <option value="Axis Bank">Axis Bank</option>
              <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
              <option value="Other">Other</option>
            </Select>
            <Input label="Average Monthly Balance (₹)" required defaultValue="8,75,000" />
            <Input label="Account Number" required defaultValue="5010 1234 5678 90" />
            <Select label="Account Type" defaultValue="Current Account">
              <option value="Current Account">Current Account</option>
              <option value="Savings Account">Savings Account</option>
              <option value="Overdraft Account">Overdraft Account</option>
              <option value="Cash Credit Account">Cash Credit Account</option>
            </Select>
            <Input label="IFSC Code" required defaultValue="HDFC0005010" />
          </div>
        </Section>

        {/* Existing Loans & Liabilities */}
        <Section title="Existing Loans & Liabilities" icon={Info} expanded={isExpanded('loans')} onToggle={() => toggleSection('loans')}>
          <div className="form-row">
            <Input label="Total Existing Loan Outstanding (₹)" defaultValue="25,00,000" />
            <Input label="Monthly EMI Obligations (₹)" defaultValue="1,25,000" />
            <Input label="Credit Card Outstanding (₹)" defaultValue="1,50,000" />
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label"><span>Any Overdue?</span></label>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                <button className="btn" style={{ flex: 1, border: '1px solid var(--border)', backgroundColor: 'white' }}>Yes</button>
                <button className="btn" style={{ flex: 1, border: '1px solid var(--primary)', backgroundColor: '#eff6ff', color: 'var(--primary)', fontWeight: 600 }}>
                  <CheckCircle2 size={16} /> No
                </button>
              </div>
            </div>
          </div>
        </Section>

        {/* Tax & Compliance */}
        <Section title="Tax & Compliance" icon={Info} expanded={isExpanded('tax')} onToggle={() => toggleSection('tax')}>
          <div className="form-row">
            <Select label="GST Filing Frequency" required defaultValue="Monthly">
              <option value="Monthly">Monthly</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Annually">Annually</option>
            </Select>
            <Select label="ITR Filing Status" required defaultValue="Filed">
              <option value="Filed">Filed</option>
              <option value="Pending">Pending</option>
              <option value="Not Required">Not Required</option>
            </Select>
            <Select label="ITR Type" required defaultValue="ITR - 3">
              <option value="ITR - 3">ITR - 3</option>
              <option value="ITR - 4">ITR - 4</option>
              <option value="ITR - 5">ITR - 5</option>
              <option value="ITR - 6">ITR - 6</option>
              <option value="Other">Other</option>
            </Select>
            <Select label="Last Financial Year ITR Filed For" required defaultValue="FY 2022-23">
              <option value="FY 2023-24">FY 2023-24</option>
              <option value="FY 2022-23">FY 2022-23</option>
              <option value="FY 2021-22">FY 2021-22</option>
            </Select>
          </div>
        </Section>

        {/* Profitability */}
        <Section title="Profitability" icon={Info} expanded={isExpanded('profitability')} onToggle={() => toggleSection('profitability')}>
          <div className="form-row">
            <Input label="Net Profit Margin (%)" defaultValue="8.5" />
            <Input label="Operating Profit Margin (%)" defaultValue="12.3" />
            <Input label="Return on Investment (%)" defaultValue="15.6" />
          </div>
        </Section>

        {/* Other Financial Information */}
        <Section title="Other Financial Information" icon={Info} expanded={isExpanded('other')} onToggle={() => toggleSection('other')}>
          <div className="form-row">
            <Input label="Debtors Outstanding (₹)" defaultValue="18,50,000" />
            <Input label="Creditors Outstanding (₹)" defaultValue="12,00,000" />
            <Input label="Inventory Value (₹)" defaultValue="22,00,000" />
            <Input label="Working Capital Requirement (₹)" defaultValue="15,00,000" />
          </div>
        </Section>

        {/* Footer Actions */}
        <div className="footer-actions" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingTop: '1.5rem', borderTop: '1px solid var(--border)', marginTop: '2rem'
        }}>
          <button className="btn btn-outline" style={{ padding: '0.625rem 1.5rem' }} onClick={onBack}>
            <ArrowLeft size={16} /> Back
          </button>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-outline">
              <Save size={16} /> Save as Draft
            </button>
            <button className="btn btn-primary" style={{ padding: '0.625rem 2rem' }} onClick={onNext}>
              Save & Continue <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="right-sidebar" style={{ width: '300px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        {/* Progress Card */}
        <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--border)', padding: '1.5rem', textAlign: 'center' }}>
          <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '1.5rem' }}>Application Progress</div>
          <div style={{ position: 'relative', width: '120px', height: '120px', margin: '0 auto 1.5rem' }}>
            <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%' }}>
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--bg-color)" strokeWidth="3" />
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--primary)" strokeWidth="3" strokeDasharray="33, 100" />
            </svg>
            <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>33%</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Completed</span>
            </div>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
            Estimated time remaining
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.25rem', fontWeight: 600, fontSize: '0.875rem' }}>
            <Clock size={14} /> 5 min
          </div>
        </div>

        {/* Tips Card */}
        <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--border)', padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem' }}>
            <Info size={16} color="var(--primary)" /> Tips
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <CheckCircle2 size={14} color="var(--success-text)" style={{ marginTop: '0.125rem' }} />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Keep your financial documents ready for faster verification</span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <CheckCircle2 size={14} color="var(--success-text)" style={{ marginTop: '0.125rem' }} />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Ensure bank statements are from the last 6 months</span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <CheckCircle2 size={14} color="var(--success-text)" style={{ marginTop: '0.125rem' }} />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Accurate information helps speed up approval</span>
            </div>
          </div>
        </div>

        {/* Loan Summary Card */}
        <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--border)', padding: '1.5rem' }}>
          <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '1.5rem' }}>Your Loan Summary</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Loan Amount (₹)</span>
              <span style={{ fontWeight: 600 }}>-</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Loan Type</span>
              <span style={{ fontWeight: 600 }}>Business Term Loan</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Tenure</span>
              <span style={{ fontWeight: 600 }}>60 Months</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Interest Rate (Starting from)</span>
              <span style={{ fontWeight: 600 }}>11.25% p.a.</span>
            </div>
          </div>
          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border)', fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Edit3 size={14} /> Edit Loan Details</div>
            <ArrowRight size={14} />
          </div>
        </div>

        {/* Need Assistance Card */}
        <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--border)', padding: '1.5rem' }}>
          <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem' }}>Need Assistance?</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Chat with our support team or call us for help.</div>
          <button className="btn btn-outline" style={{ width: '100%', marginBottom: '1rem', color: 'var(--primary)', border: '1px solid var(--primary)', backgroundColor: '#eff6ff' }}>
            <MessageSquare size={14} /> Chat Now
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--bg-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
              <PhoneCall size={16} />
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)' }}>1800-102-4455</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>(9 AM to 7 PM)</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FinancialsForm;
