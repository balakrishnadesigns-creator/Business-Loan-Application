import React from 'react';
import { CheckCircle2, Copy, Clock, FileText, IndianRupee, Calendar, ShieldCheck, ArrowRight, Activity, MessageCircle, Mail, PhoneCall, MessageSquare } from 'lucide-react';

const SubmitForm = () => {
  return (
    <div style={{ padding: '2rem', flex: 1, overflowY: 'auto', display: 'flex', gap: '2rem' }}>
      
      {/* Main Content Area */}
      <div style={{ flex: 1, backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--border)', padding: '3rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        {/* Success Icon */}
        <div style={{ position: 'relative', width: '80px', height: '80px', marginBottom: '1.5rem' }}>
          <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', backgroundColor: '#e6f6eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckCircle2 size={40} color="var(--success-text)" strokeWidth={3} />
          </div>
          {/* Confetti simulation using small divs (simplified) */}
          <div style={{ position: 'absolute', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ef4444', top: '-10px', left: '20px' }} />
          <div style={{ position: 'absolute', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#3b82f6', top: '10px', right: '-15px' }} />
          <div style={{ position: 'absolute', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b', bottom: '10px', left: '-10px' }} />
          <div style={{ position: 'absolute', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981', bottom: '-5px', right: '20px' }} />
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
          Your application has been submitted!
        </h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '400px' }}>
          Thank you for choosing NorthBridge Bank.<br/>We have received your application and will get back to you soon.
        </p>

        {/* Application ID Card */}
        <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '0.5rem', padding: '1.5rem', width: '100%', maxWidth: '400px', marginBottom: '2rem' }}>
          <div style={{ fontSize: '0.75rem', color: '#166534', fontWeight: 500, marginBottom: '0.25rem' }}>Your Application ID</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#14532d', letterSpacing: '1px' }}>BL-2024-000123</span>
            <button style={{ backgroundColor: 'white', border: '1px solid #bbf7d0', borderRadius: '0.25rem', padding: '0.25rem', color: '#166534', cursor: 'pointer' }}>
              <Copy size={16} />
            </button>
          </div>
        </div>

        {/* Details Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', width: '100%', marginBottom: '3rem', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1.5rem 0' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRight: '1px solid var(--border)' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              <Clock size={16} />
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>Submitted On</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>15 May 2024, 11:24 AM</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRight: '1px solid var(--border)' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '0.5rem' }}>
              <FileText size={16} />
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>Application Type</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Business Term Loan</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRight: '1px solid var(--border)' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#fffbeb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706', marginBottom: '0.5rem' }}>
              <IndianRupee size={16} />
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>Loan Amount</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>₹ 50,00,000</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#f5f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7c3aed', marginBottom: '0.5rem' }}>
              <Calendar size={16} />
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>Tenure</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>60 Months</div>
          </div>
        </div>

        {/* What happens next? */}
        <div style={{ width: '100%', textAlign: 'left', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '1.5rem' }}>What happens next?</h3>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
            {/* Connecting Line */}
            <div style={{ position: 'absolute', top: '16px', left: '40px', right: '40px', height: '2px', backgroundColor: 'var(--border)', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', top: '16px', left: '40px', width: '25%', height: '2px', backgroundColor: 'var(--success-text)', zIndex: 1, borderStyle: 'dashed' }}></div>
            
            {/* Step 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 2, flex: 1 }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'white', border: '2px solid var(--success-text)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--success-text)', marginBottom: '0.5rem' }}>
                <FileText size={14} />
              </div>
              <div style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>Application Submitted</div>
              <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '0.5rem', maxWidth: '100px' }}>We've received your application.</div>
              <div style={{ fontSize: '0.6rem', fontWeight: 600, color: 'var(--success-text)', backgroundColor: '#e6f6eb', padding: '0.125rem 0.375rem', borderRadius: '1rem' }}>Completed</div>
            </div>

            {/* Step 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 2, flex: 1 }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'white', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                <Clock size={14} />
              </div>
              <div style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>Document Verification</div>
              <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '0.5rem', maxWidth: '100px' }}>We will verify your documents.</div>
              <div style={{ fontSize: '0.6rem', fontWeight: 600, color: 'var(--primary)', backgroundColor: '#eff6ff', padding: '0.125rem 0.375rem', borderRadius: '1rem' }}>Next (1-2 days)</div>
            </div>

            {/* Step 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 2, flex: 1 }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'white', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                <ShieldCheck size={14} />
              </div>
              <div style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>Credit Assessment</div>
              <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '0.5rem', maxWidth: '100px' }}>Our credit team will assess your application.</div>
              <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>2-3 days</div>
            </div>

            {/* Step 4 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 2, flex: 1 }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'white', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                <CheckCircle2 size={14} />
              </div>
              <div style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>Approval Decision</div>
              <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '0.5rem', maxWidth: '100px' }}>You will receive the approval decision.</div>
              <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>3-5 days</div>
            </div>

            {/* Step 5 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 2, flex: 1 }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'white', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                <IndianRupee size={14} />
              </div>
              <div style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>Disbursal</div>
              <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '0.5rem', maxWidth: '100px' }}>Upon approval, the loan will be disbursed.</div>
              <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>After approval</div>
            </div>
          </div>
        </div>

        {/* Security Banner */}
        <div style={{ width: '100%', backgroundColor: '#f8faff', border: '1px solid var(--border)', borderRadius: '0.5rem', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ backgroundColor: 'white', padding: '0.5rem', borderRadius: '50%', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', color: 'var(--primary)' }}>
              <ShieldCheck size={16} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.125rem' }}>Your data is 100% secure</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>We use bank-grade security and encryption to protect your information.</div>
            </div>
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer' }}>
            Know more about security <ArrowRight size={14} />
          </span>
        </div>

        <button className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '0.875rem' }}>
          Go to Dashboard <ArrowRight size={16} />
        </button>

      </div>

      {/* Right Sidebar */}
      <div style={{ width: '300px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        {/* Application Status Card */}
        <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--border)', padding: '1.5rem' }}>
          <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem' }}>Application Status</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
            You can track the status of your application in real-time.
          </div>
          <button className="btn btn-outline" style={{ width: '100%', color: 'var(--primary)', borderColor: 'var(--border)', gap: '0.5rem' }}>
            <Activity size={16} /> Track Application Status
          </button>
        </div>

        {/* Next Steps Card */}
        <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--border)', padding: '1.5rem' }}>
          <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '1.5rem' }}>Next Steps</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#e6f6eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--success-text)', flexShrink: 0 }}>
                <MessageCircle size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>We will notify you on WhatsApp</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Updates will be sent to<br/>+91 98765 43211</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                <Mail size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>Email Updates</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Updates will be sent to<br/>rajesh.kumar@abcenterprises.com</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#fffbeb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706', flexShrink: 0 }}>
                <PhoneCall size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.25rem' }}>Relationship Manager</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Your RM will contact you<br/>if any information is needed.</div>
              </div>
            </div>

          </div>
        </div>

        {/* Need Assistance Card */}
        <div style={{ backgroundColor: '#f8faff', borderRadius: '0.5rem', border: '1px solid #dbeafe', padding: '1.5rem' }}>
          <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem' }}>Need Assistance?</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Our support team is here to help you at every step.</div>
          <button className="btn btn-outline" style={{ width: '100%', marginBottom: '1rem', color: 'var(--primary)', border: '1px solid var(--primary)', backgroundColor: 'white' }}>
            <MessageSquare size={14} /> Chat with Support
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'white', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
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

export default SubmitForm;
