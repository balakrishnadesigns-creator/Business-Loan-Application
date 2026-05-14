import { useState } from 'react';
import { Info, CheckCircle2, ArrowRight, ArrowLeft, Download, Edit3, MessageSquare, PhoneCall, Clock, FileText, AlertTriangle, Building, IndianRupee, FileCheck, User, ShieldCheck, UploadCloud, Eye } from 'lucide-react';

const ReviewSection = ({ title, icon: Icon, subtitle, status, statusColor, expanded, onToggle, onEdit, children }: any) => {
  return (
    <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--border)', marginBottom: '1rem', overflow: 'hidden' }}>
      <div
        style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', backgroundColor: expanded ? '#f8faff' : 'white', borderBottom: expanded ? '1px solid var(--border)' : 'none' }}
        onClick={onToggle}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ backgroundColor: '#f0f5ff', padding: '0.5rem', borderRadius: '0.5rem', color: 'var(--primary)', flexShrink: 0 }}>
            <Icon size={20} />
          </div>
          <div>
            <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.875rem', marginBottom: '0.125rem' }}>{title}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{subtitle}</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {status === 'Completed' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--success-text)', fontSize: '0.75rem', fontWeight: 600, backgroundColor: '#e6f6eb', padding: '0.25rem 0.5rem', borderRadius: '1rem' }}>
              <CheckCircle2 size={12} /> Completed
            </div>
          )}
          {status === 'Attention Required' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#b45309', fontSize: '0.75rem', fontWeight: 600, backgroundColor: '#fffbeb', padding: '0.25rem 0.5rem', borderRadius: '1rem', border: '1px solid #fde68a' }}>
              <AlertTriangle size={12} /> Attention Required
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button className="btn btn-outline" style={{ padding: '0.375rem 0.75rem', fontSize: '0.75rem', gap: '0.25rem' }} onClick={(e) => { e.stopPropagation(); onEdit && onEdit(); }}>
              <Edit3 size={14} /> Edit
            </button>
          </div>
        </div>
      </div>
      {expanded && (
        <div style={{ padding: '1.5rem' }}>
          {children}
        </div>
      )}
    </div>
  );
};

const ReviewForm = ({ onBack, onNext, goToStep }: any) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['documents']);

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
        <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Review Your Application</h2>
            <p className="text-muted text-sm">Please review all the details below before submitting your application.</p>
          </div>
          <button className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--border)', backgroundColor: 'white', fontSize: '0.75rem', padding: '0.5rem 0.75rem', gap: '0.5rem' }}>
            <Download size={14} /> Download Summary
          </button>
        </div>

        {/* Warning Banner */}
        <div style={{ backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: '0.5rem', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#f59e0b', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Info size={12} />
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#92400e', marginBottom: '0.125rem' }}>Almost there!</div>
            <div style={{ fontSize: '0.75rem', color: '#92400e' }}>Please review all sections and ensure the information is correct.</div>
          </div>
        </div>

        {/* Sections */}
        <ReviewSection 
          title="Business Details" 
          icon={Building} 
          subtitle="ABC Enterprises Pvt. Ltd. • Private Limited Company • Manufacturing" 
          status="Completed"
          expanded={isExpanded('business')} 
          onToggle={() => toggleSection('business')}
          onEdit={() => goToStep(1)}
        />

        <ReviewSection 
          title="Financial Information" 
          icon={IndianRupee} 
          subtitle="Annual Turnover: ₹1,25,00,000 • HDFC Bank (5010) • ITR - 3" 
          status="Completed"
          expanded={isExpanded('financials')} 
          onToggle={() => toggleSection('financials')}
          onEdit={() => goToStep(2)}
        />

        <ReviewSection 
          title="Documents" 
          icon={FileCheck} 
          subtitle="6 Documents Uploaded • 3 Verified • 1 Uploaded • 2 Pending" 
          status="Attention Required"
          expanded={isExpanded('documents')} 
          onToggle={() => toggleSection('documents')}
          onEdit={() => goToStep(3)}
        >
          <div style={{ color: '#b45309', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>Documents need your attention</div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid var(--border)', borderRadius: '0.5rem', backgroundColor: '#fff5f5' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ backgroundColor: '#fee2e2', color: 'var(--error-text)', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.6rem', fontWeight: 700, marginTop: '0.125rem' }}>PDF</div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Bank Statements (Last 6 Months)</div>
                    <div style={{ color: 'var(--error-text)', fontSize: '0.65rem', fontWeight: 600, backgroundColor: '#fee2e2', padding: '0.125rem 0.375rem', borderRadius: '1rem' }}>Verification Failed</div>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Password protected PDF detected. Please upload a clear, non-password protected PDF file.</div>
                </div>
              </div>
              <button className="btn btn-outline" style={{ padding: '0.375rem 0.75rem', fontSize: '0.75rem', gap: '0.25rem' }} onClick={() => goToStep(3)}>
                <UploadCloud size={14} /> Re-upload
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid var(--border)', borderRadius: '0.5rem', backgroundColor: 'white' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ padding: '0.25rem', marginTop: '0.125rem' }}>
                  <FileText size={20} className="text-muted" />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Balance Sheet (Latest FY)</div>
                    <div style={{ color: 'var(--primary)', fontSize: '0.65rem', fontWeight: 600, backgroundColor: '#eff6ff', padding: '0.125rem 0.375rem', borderRadius: '1rem' }}>Uploaded</div>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Currently under verification</div>
                </div>
              </div>
              <button className="btn btn-outline" style={{ padding: '0.375rem 0.75rem', fontSize: '0.75rem', gap: '0.25rem' }} onClick={() => goToStep(3)}>
                <Eye size={14} /> View
              </button>
            </div>
          </div>
        </ReviewSection>

        <ReviewSection 
          title="Guarantor Information" 
          icon={User} 
          subtitle="Suresh Kumar • PAN: BXZPK1234K • Brother" 
          status="Completed"
          expanded={isExpanded('guarantor')} 
          onToggle={() => toggleSection('guarantor')}
          onEdit={() => goToStep(4)}
        />

        <ReviewSection 
          title="Declarations & Consent" 
          icon={ShieldCheck} 
          subtitle="All consents provided" 
          status="Completed"
          expanded={isExpanded('consent')} 
          onToggle={() => toggleSection('consent')}
        />

        <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '0.5rem', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', marginTop: '2rem' }}>
          <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <ShieldCheck size={14} />
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.125rem' }}>Your information is secure and encrypted</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>We use bank-grade security to keep your data safe and confidential.</div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="footer-actions" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingTop: '1.5rem', borderTop: '1px solid var(--border)'
        }}>
          <button className="btn btn-outline" style={{ padding: '0.625rem 1.5rem' }} onClick={onBack}>
            <ArrowLeft size={16} /> Back
          </button>
          <button className="btn btn-primary" style={{ padding: '0.625rem 2rem' }} onClick={onNext}>
            Proceed to Submit <ArrowRight size={16} />
          </button>
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
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--primary)" strokeWidth="3" strokeDasharray="83, 100" />
            </svg>
            <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>83%</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Completed</span>
            </div>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
            Estimated time remaining
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.25rem', fontWeight: 600, fontSize: '0.875rem' }}>
            <Clock size={14} /> 3 min
          </div>
        </div>

        {/* Loan Summary Card */}
        <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--border)', padding: '1.5rem' }}>
          <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '1.5rem' }}>Loan Summary</div>
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

        {/* Secure Upload */}
        <div style={{ backgroundColor: '#e6f6eb', border: '1px solid #bbf7d0', borderRadius: '0.5rem', padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <ShieldCheck size={20} color="var(--success-text)" />
            <div>
              <div style={{ fontWeight: 600, color: '#065f46', fontSize: '0.875rem', marginBottom: '0.25rem' }}>100% Safe & Secure</div>
              <div style={{ fontSize: '0.75rem', color: '#065f46', lineHeight: 1.4 }}>
                Your data is protected with 256-bit SSL encryption.
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReviewForm;
