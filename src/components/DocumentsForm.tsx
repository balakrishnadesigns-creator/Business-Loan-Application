import { useState, useRef } from 'react';
import { Info, CheckCircle2, ArrowRight, ArrowLeft, Save, Eye, MoreVertical, UploadCloud, AlertTriangle, FileText, Trash2, Clock, Lock, MessageSquare, PhoneCall, Download, History, ExternalLink } from 'lucide-react';
import { Modal } from './UIComponents';

const DocumentsForm = ({ onBack, onNext }: any) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, string>>({});
  const [previewDoc, setPreviewDoc] = useState<{ name: string; type: string } | null>(null);
  
  const balanceSheetRef = useRef<HTMLInputElement>(null);
  const caCertificateRef = useRef<HTMLInputElement>(null);
  const bankStatementRef = useRef<HTMLInputElement>(null);
  const panRef = useRef<HTMLInputElement>(null);
  const gstRef = useRef<HTMLInputElement>(null);
  const itrRef = useRef<HTMLInputElement>(null);
  const constitutionRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);

  const refs: Record<string, React.RefObject<HTMLInputElement | null>> = {
    balance: balanceSheetRef,
    ca: caCertificateRef,
    bank: bankStatementRef,
    pan: panRef,
    gst: gstRef,
    itr: itrRef,
    constitution: constitutionRef,
    address: addressRef
  };

  const toggleMenu = (id: string) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  const handleFileChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFiles(prev => ({ ...prev, [id]: e.target.files![0].name }));
    }
  };

  const onView = (name: string) => {
    setPreviewDoc({ name, type: 'PDF Document' });
  };

  const ActionMenu = ({ id }: { id: string }) => (
    <div style={{ 
      position: 'absolute', 
      right: '0', 
      top: '100%', 
      backgroundColor: 'white', 
      border: '1px solid var(--border)', 
      borderRadius: '0.5rem', 
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', 
      zIndex: 10, 
      width: '180px',
      overflow: 'hidden',
      marginTop: '0.25rem'
    }}>
      <div style={{ padding: '0.5rem' }}>
        <div className="menu-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', fontSize: '0.75rem', cursor: 'pointer', borderRadius: '0.25rem' }}>
          <ExternalLink size={14} /> Related Documents
        </div>
        <div 
          className="menu-item" 
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', fontSize: '0.75rem', cursor: 'pointer', borderRadius: '0.25rem' }}
          onClick={() => refs[id]?.current?.click()}
        >
          <UploadCloud size={14} /> Re-upload
        </div>
        <div className="menu-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', fontSize: '0.75rem', cursor: 'pointer', borderRadius: '0.25rem' }}>
          <History size={14} /> View History
        </div>
        <div className="menu-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', fontSize: '0.75rem', cursor: 'pointer', borderRadius: '0.25rem' }}>
          <Download size={14} /> Download Template
        </div>
      </div>
    </div>
  );

  return (
    <div className="main-content" style={{ padding: '2rem', flex: 1, overflowY: 'auto', display: 'flex', gap: '2rem' }}>
      
      {/* Main Content Area */}
      <div className="form-main" style={{ flex: 1 }}>
        <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Upload Documents</h2>
            <p className="text-muted text-sm">Please upload clear and valid documents to help us verify your business faster.</p>
          </div>
          <button className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--border)', backgroundColor: '#eff6ff', fontSize: '0.75rem', padding: '0.5rem 0.75rem' }}>
            <FileText size={14} /> Document Guidelines
          </button>
        </div>

        {/* Documents Table */}
        <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--border)', overflow: 'hidden', marginBottom: '1.5rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr 1.5fr 1fr', padding: '1rem 1.5rem', borderBottom: '1px solid var(--border)', backgroundColor: '#f8faff', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-main)' }}>
            <div>Document Name</div>
            <div>Description</div>
            <div>Status</div>
            <div>Action</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Row 1: PAN Card */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr 1.5fr 1fr', padding: '1rem 1.5rem', borderBottom: '1px solid var(--border)', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: 500 }}>
                <FileText size={18} className="text-muted" /> PAN Card
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Permanent Account Number card of the business</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--success-text)', fontSize: '0.875rem', fontWeight: 500 }}>
                <CheckCircle2 size={16} /> Verified
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', position: 'relative' }}>
                <input type="file" ref={panRef} style={{ display: 'none' }} onChange={(e) => handleFileChange('pan', e)} />
                <Eye size={18} style={{ cursor: 'pointer' }} onClick={() => onView('PAN Card')} />
                <MoreVertical size={18} style={{ cursor: 'pointer' }} onClick={() => toggleMenu('pan')} />
                {activeMenu === 'pan' && <ActionMenu id="pan" />}
              </div>
            </div>

            {/* Row 2: GST Certificate */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr 1.5fr 1fr', padding: '1rem 1.5rem', borderBottom: '1px solid var(--border)', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: 500 }}>
                <FileText size={18} className="text-muted" /> GST Certificate
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>GST Registration Certificate</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--success-text)', fontSize: '0.875rem', fontWeight: 500 }}>
                <CheckCircle2 size={16} /> Verified
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', position: 'relative' }}>
                <input type="file" ref={gstRef} style={{ display: 'none' }} onChange={(e) => handleFileChange('gst', e)} />
                <Eye size={18} style={{ cursor: 'pointer' }} onClick={() => onView('GST Certificate')} />
                <MoreVertical size={18} style={{ cursor: 'pointer' }} onClick={() => toggleMenu('gst')} />
                {activeMenu === 'gst' && <ActionMenu id="gst" />}
              </div>
            </div>

            {/* Row 3: Bank Statements */}
            <div style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid var(--border)', backgroundColor: '#fff5f5' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr 1.5fr 1fr', padding: '1rem 1.5rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: 500 }}>
                  <FileText size={18} className="text-muted" /> Bank Statements (Last 6 Months)
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Bank account statements for the last 6 months</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--error-text)', fontSize: '0.875rem', fontWeight: 500 }}>
                  <AlertTriangle size={16} /> Verification Failed
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', position: 'relative' }}>
                  <input type="file" ref={bankStatementRef} style={{ display: 'none' }} onChange={(e) => handleFileChange('bank', e)} />
                  <button 
                    className="btn btn-outline" 
                    style={{ 
                      padding: '0.25rem 0.5rem', 
                      fontSize: '0.75rem', 
                      gap: '0.25rem',
                      backgroundColor: uploadedFiles['bank'] ? '#e6f6eb' : 'transparent',
                      borderColor: uploadedFiles['bank'] ? '#10b981' : 'var(--border)',
                      color: uploadedFiles['bank'] ? '#059669' : 'var(--text-main)'
                    }}
                    onClick={() => bankStatementRef.current?.click()}
                  >
                    <UploadCloud size={14} /> {uploadedFiles['bank'] ? 'Re-uploaded' : 'Re-upload'}
                  </button>
                  <MoreVertical size={18} style={{ cursor: 'pointer' }} onClick={() => toggleMenu('bank')} />
                  {activeMenu === 'bank' && <ActionMenu id="bank" />}
                </div>
              </div>
              
              <div style={{ padding: '1rem 1.5rem 1.5rem', display: 'flex', gap: '2rem' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ color: 'var(--error-text)', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.5rem' }}>Reason for failure</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    Document appears to be password protected. Please upload a clear, non-password protected PDF file.
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: 'var(--text-main)', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.5rem' }}>Uploaded file</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: 'white', border: '1px solid var(--border)', borderRadius: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ backgroundColor: '#fee2e2', color: 'var(--error-text)', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.6rem', fontWeight: 700 }}>PDF</div>
                      <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 500 }}>{uploadedFiles['bank'] || 'bank_statement_may2024.pdf'}</div>
                        <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>{uploadedFiles['bank'] ? 'Just now' : '2.4 MB • Uploaded on 15 May 2024'}</div>
                      </div>
                    </div>
                    <Trash2 size={16} className="text-muted" style={{ cursor: 'pointer' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 4: ITR */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr 1.5fr 1fr', padding: '1rem 1.5rem', borderBottom: '1px solid var(--border)', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: 500 }}>
                <FileText size={18} className="text-muted" /> ITR (Last 2 Years)
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Income Tax Returns for last 2 financial years</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontSize: '0.875rem', fontWeight: 500 }}>
                <CheckCircle2 size={16} /> Uploaded
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', position: 'relative' }}>
                <input type="file" ref={itrRef} style={{ display: 'none' }} onChange={(e) => handleFileChange('itr', e)} />
                <Eye size={18} style={{ cursor: 'pointer' }} onClick={() => onView('ITR (Last 2 Years)')} />
                <MoreVertical size={18} style={{ cursor: 'pointer' }} onClick={() => toggleMenu('itr')} />
                {activeMenu === 'itr' && <ActionMenu id="itr" />}
              </div>
            </div>

            {/* Row 5: Balance Sheet */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr 1.5fr 1fr', padding: '1rem 1.5rem', borderBottom: '1px solid var(--border)', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: 500 }}>
                <FileText size={18} className="text-muted" /> Balance Sheet (Latest FY)
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Latest audited balance sheet</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500 }}>
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid var(--text-muted)' }}></div> Pending
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', position: 'relative' }}>
                <input type="file" ref={balanceSheetRef} style={{ display: 'none' }} onChange={(e) => handleFileChange('balance', e)} />
                <button 
                  className="btn btn-outline" 
                  style={{ 
                    padding: '0.25rem 0.5rem', 
                    fontSize: '0.75rem', 
                    gap: '0.25rem',
                    backgroundColor: uploadedFiles['balance'] ? '#e6f6eb' : 'transparent',
                    borderColor: uploadedFiles['balance'] ? '#10b981' : 'var(--border)',
                    color: uploadedFiles['balance'] ? '#059669' : 'var(--text-main)'
                  }}
                  onClick={() => balanceSheetRef.current?.click()}
                >
                  {uploadedFiles['balance'] ? <CheckCircle2 size={14} /> : <UploadCloud size={14} />}
                  {uploadedFiles['balance'] ? 'Uploaded' : 'Upload'}
                </button>
                <MoreVertical size={18} style={{ cursor: 'pointer' }} onClick={() => toggleMenu('balance')} />
                {activeMenu === 'balance' && <ActionMenu id="balance" />}
              </div>
            </div>

            {/* Row 6: CA Certificate */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr 1.5fr 1fr', padding: '1rem 1.5rem', borderBottom: '1px solid var(--border)', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: 500 }}>
                <FileText size={18} className="text-muted" /> CA Certificate (If Turnover &gt; 1 Cr)
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>CA certified statement</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500 }}>
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid var(--text-muted)' }}></div> Pending
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', position: 'relative' }}>
                <input type="file" ref={caCertificateRef} style={{ display: 'none' }} onChange={(e) => handleFileChange('ca', e)} />
                <button 
                  className="btn btn-outline" 
                  style={{ 
                    padding: '0.25rem 0.5rem', 
                    fontSize: '0.75rem', 
                    gap: '0.25rem',
                    backgroundColor: uploadedFiles['ca'] ? '#e6f6eb' : 'transparent',
                    borderColor: uploadedFiles['ca'] ? '#10b981' : 'var(--border)',
                    color: uploadedFiles['ca'] ? '#059669' : 'var(--text-main)'
                  }}
                  onClick={() => caCertificateRef.current?.click()}
                >
                  {uploadedFiles['ca'] ? <CheckCircle2 size={14} /> : <UploadCloud size={14} />}
                  {uploadedFiles['ca'] ? 'Uploaded' : 'Upload'}
                </button>
                <MoreVertical size={18} style={{ cursor: 'pointer' }} onClick={() => toggleMenu('ca')} />
                {activeMenu === 'ca' && <ActionMenu id="ca" />}
              </div>
            </div>

            {/* Row 7: Partnership Deed / MOA & AOA */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr 1.5fr 1fr', padding: '1rem 1.5rem', borderBottom: '1px solid var(--border)', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: 500 }}>
                <FileText size={18} className="text-muted" /> Partnership Deed / MOA & AOA
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Business constitution documents</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500 }}>
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid var(--text-muted)' }}></div> Pending
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', position: 'relative' }}>
                <input type="file" ref={constitutionRef} style={{ display: 'none' }} onChange={(e) => handleFileChange('constitution', e)} />
                <button 
                  className="btn btn-outline" 
                  style={{ 
                    padding: '0.25rem 0.5rem', 
                    fontSize: '0.75rem', 
                    gap: '0.25rem',
                    backgroundColor: uploadedFiles['constitution'] ? '#e6f6eb' : 'transparent',
                    borderColor: uploadedFiles['constitution'] ? '#10b981' : 'var(--border)',
                    color: uploadedFiles['constitution'] ? '#059669' : 'var(--text-main)'
                  }}
                  onClick={() => constitutionRef.current?.click()}
                >
                  {uploadedFiles['constitution'] ? <CheckCircle2 size={14} /> : <UploadCloud size={14} />}
                  {uploadedFiles['constitution'] ? 'Uploaded' : 'Upload'}
                </button>
                <MoreVertical size={18} style={{ cursor: 'pointer' }} onClick={() => toggleMenu('constitution')} />
                {activeMenu === 'constitution' && <ActionMenu id="constitution" />}
              </div>
            </div>

            {/* Row 8: Business Address Proof */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr 1.5fr 1fr', padding: '1rem 1.5rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', fontWeight: 500 }}>
                <FileText size={18} className="text-muted" /> Business Address Proof
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Electricity bill or Rent agreement</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500 }}>
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid var(--text-muted)' }}></div> Pending
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', position: 'relative' }}>
                <input type="file" ref={addressRef} style={{ display: 'none' }} onChange={(e) => handleFileChange('address', e)} />
                <button 
                  className="btn btn-outline" 
                  style={{ 
                    padding: '0.25rem 0.5rem', 
                    fontSize: '0.75rem', 
                    gap: '0.25rem',
                    backgroundColor: uploadedFiles['address'] ? '#e6f6eb' : 'transparent',
                    borderColor: uploadedFiles['address'] ? '#10b981' : 'var(--border)',
                    color: uploadedFiles['address'] ? '#059669' : 'var(--text-main)'
                  }}
                  onClick={() => addressRef.current?.click()}
                >
                  {uploadedFiles['address'] ? <CheckCircle2 size={14} /> : <UploadCloud size={14} />}
                  {uploadedFiles['address'] ? 'Uploaded' : 'Upload'}
                </button>
                <MoreVertical size={18} style={{ cursor: 'pointer' }} onClick={() => toggleMenu('address')} />
                {activeMenu === 'address' && <ActionMenu id="address" />}
              </div>
            </div>

          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>3 of 6 documents verified</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Don't have a document?</span>
            <button className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--border)', gap: '0.5rem' }}>
              <MessageSquare size={16} /> Request from CA
            </button>
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
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="var(--primary)" strokeWidth="3" strokeDasharray="50, 100" />
            </svg>
            <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>50%</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Completed</span>
            </div>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
            Estimated time remaining
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.25rem', fontWeight: 600, fontSize: '0.875rem' }}>
            <Clock size={14} /> 7 min
          </div>
        </div>

        {/* Upload Tips Card */}
        <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--border)', padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1rem' }}>
            <Info size={16} color="var(--primary)" /> Upload Tips
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <CheckCircle2 size={14} color="var(--success-text)" style={{ marginTop: '0.125rem' }} />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Upload clear, unedited files</span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <CheckCircle2 size={14} color="var(--success-text)" style={{ marginTop: '0.125rem' }} />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Accepted formats: PDF, JPG, PNG</span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <CheckCircle2 size={14} color="var(--success-text)" style={{ marginTop: '0.125rem' }} />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>File size should be less than 10MB</span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <CheckCircle2 size={14} color="var(--success-text)" style={{ marginTop: '0.125rem' }} />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>All pages should be visible</span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <CheckCircle2 size={14} color="var(--success-text)" style={{ marginTop: '0.125rem' }} />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Password protected files are not accepted</span>
            </div>
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
        <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid var(--border)', padding: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Lock size={20} color="var(--success-text)" />
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.25rem' }}>Secure Upload</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.5 }}>
                Your documents are encrypted and secured with 256-bit SSL technology.
              </div>
              <div style={{ display: 'inline-block', backgroundColor: '#e6f6eb', color: 'var(--success-text)', fontSize: '0.65rem', fontWeight: 600, padding: '0.25rem 0.5rem', borderRadius: '1rem' }}>
                100% Safe & Secure
              </div>
            </div>
          </div>
        </div>

      </div>
      <Modal 
        isOpen={!!previewDoc} 
        onClose={() => setPreviewDoc(null)} 
        title={previewDoc?.name || 'Document Preview'}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', textAlign: 'center', padding: '1rem' }}>
          <div style={{ width: '100%', height: '300px', backgroundColor: '#f3f4f6', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed var(--border)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
              <FileText size={64} style={{ opacity: 0.2 }} />
              <div style={{ fontSize: '0.875rem' }}>Secure Preview of {previewDoc?.name}</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
            <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => setPreviewDoc(null)}>Close Preview</button>
            <button className="btn btn-outline" style={{ flex: 1 }}><Download size={16} /> Download</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DocumentsForm;
