import { useState } from 'react';
import { Info, CheckCircle2, ChevronUp, ChevronDown, ArrowRight, ArrowLeft, Activity, Save } from 'lucide-react';
import { Input, Select, FileUpload, DatePicker } from './UIComponents';

const ApplicationForm = ({ onNext }: any) => {
  const [activeTab, setActiveTab] = useState('identity');
  const [complianceExpanded, setComplianceExpanded] = useState(true);

  const tabs = [
    { id: 'identity', label: 'Business Identity' },
    { id: 'operations', label: 'Business Operations' },
    { id: 'address', label: 'Address Details' },
    { id: 'additional', label: 'Additional Details' },
  ];

  return (
    <div className="main-content" style={{ padding: '2rem', flex: 1, overflowY: 'auto' }}>
      
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Tell us about your business</h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p className="text-muted text-sm">This helps us understand your business better</p>
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

      <div className="flex-stack" style={{ display: 'flex', gap: '2rem' }}>
        {/* Inner Sidebar */}
        <div className="inner-sidebar" style={{ width: '240px', flexShrink: 0 }}>
          <div style={{
            backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--border)',
            padding: '1rem', marginBottom: '1.5rem'
          }}>
            <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem', padding: '0 0.5rem' }}>
              Business Details
            </div>
            {tabs.map(tab => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.75rem 0.5rem',
                  cursor: 'pointer',
                  color: activeTab === tab.id ? 'var(--primary)' : 'var(--text-main)',
                  fontWeight: activeTab === tab.id ? 600 : 500,
                  fontSize: '0.875rem',
                  backgroundColor: activeTab === tab.id ? 'var(--bg-color)' : 'transparent',
                  borderRadius: '0.375rem'
                }}
              >
                <div style={{
                  width: '16px', height: '16px', borderRadius: '50%',
                  border: `2px solid ${activeTab === tab.id ? 'var(--primary)' : 'var(--text-muted)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {activeTab === tab.id && <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary)' }} />}
                </div>
                {tab.label}
              </div>
            ))}
            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border)', padding: '1rem 0.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Compliance Check</span>
              <span className="badge badge-success">Completed</span>
            </div>
          </div>

          <div style={{
            backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--border)',
            padding: '1.5rem', textAlign: 'center'
          }}>
            <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '1.5rem' }}>
              Application Completion
            </div>
            
            {/* Simple Progress Circle */}
            <div style={{ position: 'relative', width: '120px', height: '120px', margin: '0 auto 1.5rem' }}>
              <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%' }}>
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none" stroke="var(--bg-color)" strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none" stroke="var(--primary)" strokeWidth="3"
                  strokeDasharray="20, 100"
                />
              </svg>
              <div style={{
                position: 'absolute', top: '0', left: '0', right: '0', bottom: '0',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
              }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>20%</span>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Completed</span>
              </div>
            </div>

            <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem' }}>You're on your way!</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Keep going to unlock better loan offers.</div>
          </div>
        </div>

        {/* Main Form Area */}
        <div className="form-main" style={{ flex: 1 }}>
          <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--border)', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>Business Identity</h3>
            
            <div className="form-row">
              <Input label="Business Name (As per PAN)" required defaultValue="ABC Enterprises Pvt. Ltd." />
              <Select label="Business Type" required>
                <option value="">Select Business Type</option>
                <option>Private Limited Company</option>
                <option>Public Limited Company</option>
                <option>Partnership Firm</option>
                <option>Sole Proprietorship</option>
                <option>Limited Liability Partnership (LLP)</option>
              </Select>
              <Select label="Industry Type" required>
                <option value="">Select Industry Type</option>
                <option>Manufacturing</option>
                <option>Information Technology (IT)</option>
                <option>Retail & Wholesale</option>
                <option>Healthcare & Pharmaceuticals</option>
                <option>Finance & Insurance</option>
                <option>Construction & Real Estate</option>
                <option>Agriculture</option>
              </Select>
            </div>

            <div className="form-row">
              <Input label="GSTIN" required defaultValue="27AABCJ9603R1Z5" rightElement={<span className="badge badge-success" style={{ padding: '0.25rem 0.5rem' }}>Verified <CheckCircle2 size={12} style={{ marginLeft: '4px' }}/></span>} />
              <Input label="PAN" required defaultValue="AABCJ9603R" rightElement={<span className="badge badge-success" style={{ padding: '0.25rem 0.5rem' }}>Verified <CheckCircle2 size={12} style={{ marginLeft: '4px' }}/></span>} />
              <Input label="CIN (Optional)" defaultValue="U74999MH2018PTC123456" />
            </div>

            <div className="form-row">
              <DatePicker label="Date of Incorporation" required defaultValue="2018-03-12" />
              <Select label="Years in Business" required>
                <option value="">Select Duration</option>
                <option>Less than 1 Year</option>
                <option>1-3 Years</option>
                <option>3-5 Years</option>
                <option>6 Years</option>
                <option>7-10 Years</option>
                <option>More than 10 Years</option>
              </Select>
              <Input label="Registered Email ID" required type="email" defaultValue="info@abcenterprises.com" />
              <Input label="Registered Mobile Number" required defaultValue="+91 98765 43210" />
            </div>

            <div className="form-row">
              <Select label="Business Constitution" required>
                <option value="">Select Constitution</option>
                <option>Private Limited Company</option>
                <option>Public Limited Company</option>
                <option>Partnership Firm</option>
                <option>Sole Proprietorship</option>
                <option>Limited Liability Partnership (LLP)</option>
              </Select>
              <Input label="Authorized Capital (₹)" required defaultValue="10,00,000" />
              <Input label="Paid-up Capital (₹)" required defaultValue="7,50,000" />
            </div>
          </div>

          <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--border)', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Annual Turnover (Last Financial Year) <span className="required-asterisk">*</span></h3>
                <p className="text-sm text-muted" style={{ marginBottom: '1rem' }}>Please enter your annual turnover to help us customize the application.</p>
                
                <div style={{ position: 'relative', maxWidth: '400px' }}>
                  <div style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                    ₹
                  </div>
                  <input className="form-input" defaultValue="1,25,00,000" style={{ paddingLeft: '2rem', borderColor: 'var(--primary)', boxShadow: '0 0 0 3px var(--focus-ring)' }} />
                </div>
              </div>

              <div style={{
                flex: 1, backgroundColor: 'var(--success-bg)', borderRadius: '0.5rem',
                padding: '1rem', display: 'flex', gap: '1rem', border: '1px solid #bbf7d0'
              }}>
                <div style={{ color: 'var(--success-text)' }}>
                  <Activity size={32} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--success-text)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                    Turnover exceeds ₹1 Crore
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                    Additional compliance information will be required.
                  </div>
                  <a href="#" style={{ fontSize: '0.75rem', color: 'var(--primary)', textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                    Learn more <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Expanded Section */}
          <div style={{ backgroundColor: '#f8faff', borderRadius: '0.5rem', border: '1px solid #dbeafe', marginBottom: '2rem' }}>
            <div
              style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
              onClick={() => setComplianceExpanded(!complianceExpanded)}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--primary)" />
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '0.875rem' }}>Additional Compliance Required</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>As your turnover is above ₹1 Crore, please provide the following details.</div>
                </div>
              </div>
              {complianceExpanded ? <ChevronUp size={20} className="text-muted" /> : <ChevronDown size={20} className="text-muted" />}
            </div>

            {complianceExpanded && (
              <div style={{ padding: '0 1.5rem 1.5rem', borderTop: '1px solid #dbeafe', paddingTop: '1.5rem' }}>
                <div className="form-row">
                  <FileUpload label="Audited Financial Statements" required uploadedFile="abc_enterprises_audited_2023.pdf" />
                  <FileUpload label="CA Certification" required uploadedFile="ca_certificate_2023.pdf" />
                  <Input label="Existing Credit Exposure (₹)" defaultValue="25,00,000" />
                  <Input label="Total Debt Outstanding (₹)" defaultValue="15,00,000" />
                </div>
                <div className="form-row" style={{ marginTop: '1rem', maxWidth: '25%' }}>
                  <Input label="Debt to Turnover Ratio" defaultValue="12%" />
                </div>
              </div>
            )}
          </div>
          
        </div>
      </div>

      {/* Footer Actions */}
      <div className="footer-actions" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        paddingTop: '1.5rem', borderTop: '1px solid var(--border)', marginTop: '2rem'
      }}>
        <button className="btn btn-outline" style={{ padding: '0.625rem 1.5rem' }}>
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
  );
};

export default ApplicationForm;
