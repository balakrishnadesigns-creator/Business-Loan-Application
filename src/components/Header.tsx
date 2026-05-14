import React, { useState } from 'react';
import { Bell, Save, FileText, AlertCircle, CheckCircle2, Download } from 'lucide-react';

const Header = ({ currentStep }: any) => {
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <div className="header-container" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.25rem 2rem',
      backgroundColor: 'white',
      borderBottom: '1px solid var(--border)'
    }}>
      <div>
        <h1 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Business Loan Application</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="text-sm text-muted">Application ID: BL-2024-000123</span>
          {currentStep === 6 ? (
            <>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--success-text)', backgroundColor: '#e6f6eb', padding: '0.25rem 0.5rem', borderRadius: '1rem' }}>Submitted</span>
              <span className="text-sm text-muted">Today, 11:24 AM</span>
            </>
          ) : (
            <>
              <span className="badge badge-success">Draft Saved</span>
              <span className="text-sm text-muted">Last saved: 2 min ago</span>
            </>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        {currentStep === 6 ? (
          <button className="btn btn-outline" style={{ gap: '0.5rem' }}>
            <Download size={16} /> Download Application (PDF)
          </button>
        ) : (
          <button className="btn btn-outline">
            <Save size={16} /> Save & Exit
          </button>
        )}
        
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <div onClick={() => setShowNotifications(!showNotifications)}>
            <Bell size={20} className="text-muted" />
            <div style={{
              position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px',
              backgroundColor: 'var(--error-text)', borderRadius: '50%'
            }} />
          </div>
          
          {showNotifications && (
            <div style={{
              position: 'absolute', top: '100%', right: '-1rem', marginTop: '1.25rem',
              width: '320px', backgroundColor: 'white', borderRadius: '0.5rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              border: '1px solid var(--border)', zIndex: 50, overflow: 'hidden',
              cursor: 'default'
            }}>
              <div style={{ padding: '1rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '0.875rem', fontWeight: 600, margin: 0, color: 'var(--text-main)' }}>Notifications</h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--primary)', cursor: 'pointer', fontWeight: 500 }}>Mark all as read</span>
              </div>
              <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <div style={{ display: 'flex', gap: '0.75rem', padding: '1rem', borderBottom: '1px solid var(--border)', backgroundColor: '#f0fdf4' }}>
                  <div style={{ color: 'var(--success-text)', marginTop: '0.125rem' }}><CheckCircle2 size={16} /></div>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text-main)' }}>Document Verified</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Your PAN card has been successfully verified.</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>10 mins ago</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', padding: '1rem', borderBottom: '1px solid var(--border)', backgroundColor: 'white' }}>
                  <div style={{ color: '#f59e0b', marginTop: '0.125rem' }}><AlertCircle size={16} /></div>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text-main)' }}>Action Required</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Please upload your CA Certification to proceed.</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>2 hours ago</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', padding: '1rem', backgroundColor: 'white' }}>
                  <div style={{ color: 'var(--primary)', marginTop: '0.125rem' }}><FileText size={16} /></div>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text-main)' }}>Draft Saved</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Your application draft was automatically saved.</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>1 day ago</div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '0.75rem', borderTop: '1px solid var(--border)', textAlign: 'center', backgroundColor: '#f8faff', cursor: 'pointer' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 500 }}>View all notifications</span>
              </div>
            </div>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingLeft: '1.5rem', borderLeft: '1px solid var(--border)' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#1e3a8a',
            color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 600, fontSize: '0.875rem'
          }}>
            RK
          </div>
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Rajesh Kumar</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>ABC Enterprises</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
