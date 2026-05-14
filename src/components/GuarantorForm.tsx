import React, { useState } from 'react';
import { Info, CheckCircle2, ArrowRight, ArrowLeft, Save, Edit3, MessageSquare, PhoneCall, Clock, UserPlus, Mail, Eye, FileText } from 'lucide-react';
import { Input, Select, DatePicker } from './UIComponents';

const GuarantorForm = ({ onBack, onNext }: any) => {
  const [guarantorOption, setGuarantorOption] = useState('add_now');

  return (
    <div className="main-content" style={{ padding: '2rem', flex: 1, overflowY: 'auto', display: 'flex', gap: '2rem' }}>
      
      {/* Main Content Area */}
      <div className="form-main" style={{ flex: 1 }}>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Guarantor Information</h2>
          <p className="text-muted text-sm">Provide details of your financial guarantor.</p>
        </div>

        {/* Info Banner */}
        <div style={{ backgroundColor: '#f0f5ff', border: '1px solid #dbeafe', borderRadius: '0.5rem', padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Info size={14} />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>Why do we need a guarantor?</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>For loans above ₹25 Lakhs, RBI guidelines require an additional financial guarantor.</p>
          </div>
          <div style={{ opacity: 0.5 }}>
            <FileText size={48} color="var(--primary)" style={{ opacity: 0.2 }} />
          </div>
        </div>

        {/* Options */}
        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
          {/* Option 1 */}
          <div 
            style={{ 
              flex: 1, border: `1px solid ${guarantorOption === 'add_now' ? 'var(--primary)' : 'var(--border)'}`, 
              borderRadius: '0.5rem', padding: '1.5rem', cursor: 'pointer',
              backgroundColor: guarantorOption === 'add_now' ? '#f8faff' : 'white',
              display: 'flex', alignItems: 'center', gap: '1rem'
            }}
            onClick={() => setGuarantorOption('add_now')}
          >
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: `2px solid ${guarantorOption === 'add_now' ? 'var(--primary)' : 'var(--text-muted)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {guarantorOption === 'add_now' && <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--primary)' }} />}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ backgroundColor: '#eff6ff', padding: '0.5rem', borderRadius: '0.375rem', color: 'var(--primary)' }}>
                <UserPlus size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: guarantorOption === 'add_now' ? 'var(--primary)' : 'var(--text-main)', marginBottom: '0.125rem' }}>Add Guarantor Now</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Provide guarantor details in this application</div>
              </div>
            </div>
          </div>

          {/* Option 2 */}
          <div 
            style={{ 
              flex: 1, border: `1px solid ${guarantorOption === 'invite_later' ? 'var(--primary)' : 'var(--border)'}`, 
              borderRadius: '0.5rem', padding: '1.5rem', cursor: 'pointer',
              backgroundColor: guarantorOption === 'invite_later' ? '#f8faff' : 'white',
              display: 'flex', alignItems: 'center', gap: '1rem'
            }}
            onClick={() => setGuarantorOption('invite_later')}
          >
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: `2px solid ${guarantorOption === 'invite_later' ? 'var(--primary)' : 'var(--text-muted)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {guarantorOption === 'invite_later' && <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--primary)' }} />}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ backgroundColor: '#f3f4f6', padding: '0.5rem', borderRadius: '0.375rem', color: 'var(--text-muted)' }}>
                <Mail size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: guarantorOption === 'invite_later' ? 'var(--primary)' : 'var(--text-main)', marginBottom: '0.125rem' }}>Invite Guarantor Later</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>We will send a secure link to your guarantor</div>
              </div>
            </div>
          </div>
        </div>

        {guarantorOption === 'add_now' && (
          <>
            {/* Guarantor Personal Details */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-main)' }}>Guarantor Personal Details</h3>
              <div className="form-row">
                <Input label="Full Name (As per PAN)" required defaultValue="Suresh Kumar" />
                <Input label="PAN Number" required defaultValue="BXZPK1234K" rightElement={<span className="badge badge-success" style={{ padding: '0.25rem 0.5rem' }}>Verified <CheckCircle2 size={12} style={{ marginLeft: '4px' }}/></span>} />
                <DatePicker label="Date of Birth" required defaultValue="1978-08-15" />
              </div>
              <div className="form-row">
                <Input label="Aadhaar Number" defaultValue="XXXX XXXX 5678" rightElement={<Eye size={16} className="text-muted" />} />
                <Input label="Mobile Number" required defaultValue="+91 98765 43211" />
                <Input label="Email Address" defaultValue="suresh.kumar@gmail.com" />
              </div>
            </div>

            {/* Guarantor Address */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', margin: 0 }}>Guarantor Address</h3>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-muted)', cursor: 'pointer' }}>
                  <input type="checkbox" style={{ accentColor: 'var(--primary)' }} />
                  Same as communication address
                </label>
              </div>
              <div className="form-row">
                <Input label="Address Line 1" required defaultValue="45, Green Avenue" />
                <Input label="Address Line 2 (Optional)" defaultValue="Near Park View Apartments" />
              </div>
              <div className="form-row">
                <Input label="City / Town" required defaultValue="Bengaluru" />
                <Select label="State" required>
                  <option>Karnataka</option>
                </Select>
                <Input label="PIN Code" required defaultValue="560001" />
              </div>
            </div>

            {/* Guarantor Financial Details */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--text-main)' }}>Guarantor Financial Details</h3>
              <div className="form-row">
                <Select label="Relationship with Business" required>
                  <option>Brother</option>
                  <option>Partner</option>
                  <option>Friend</option>
                </Select>
                <Select label="Annual Income (₹)" required>
                  <option>₹ 25,00,000 - ₹ 50,00,000</option>
                  <option>₹ 10,00,000 - ₹ 25,00,000</option>
                </Select>
                <Select label="Net Worth (₹)" required>
                  <option>₹ 50,00,000 - ₹ 1,00,00,000</option>
                  <option>&gt; ₹ 1,00,00,000</option>
                </Select>
              </div>
            </div>
          </>
        )}

        {/* Footer Actions */}
        <div className="footer-actions" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingTop: '1.5rem', borderTop: '1px solid var(--border)'
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
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--primary)" strokeWidth="3" strokeDasharray="66, 100" />
            </svg>
            <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>66%</span>
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

        {/* Guarantor Tips Card */}
        <div style={{ backgroundColor: '#fffbeb', borderRadius: '0.5rem', border: '1px solid #fde68a', padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem', color: '#b45309' }}>
            <Info size={16} /> Guarantor tips
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#fbbf24', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.125rem' }}><CheckCircle2 size={12} /></div>
              <span style={{ fontSize: '0.75rem', color: '#92400e', lineHeight: 1.4 }}>Guarantor should be a major (above 18 years) with stable income.</span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#fbbf24', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.125rem' }}><CheckCircle2 size={12} /></div>
              <span style={{ fontSize: '0.75rem', color: '#92400e', lineHeight: 1.4 }}>Keep PAN and Aadhaar handy for faster verification.</span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#fbbf24', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '0.125rem' }}><CheckCircle2 size={12} /></div>
              <span style={{ fontSize: '0.75rem', color: '#92400e', lineHeight: 1.4 }}>Their credit profile may also be evaluated.</span>
            </div>
          </div>
        </div>

        {/* Loan Summary Card */}
        <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--border)', padding: '1.5rem' }}>
          <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '1.5rem' }}>Your Loan Summary</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-muted)' }}>Loan Amount</span>
              <span style={{ fontWeight: 600 }}>₹ 50,00,000</span>
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

export default GuarantorForm;
