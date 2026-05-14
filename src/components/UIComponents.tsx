import React, { useRef, useState } from 'react';
import { Upload, CheckCircle2, ChevronDown, Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';

export const Input = ({ label, required, rightElement, ...props }: any) => (
  <div className="form-group">
    <label className="form-label">
      <span>{label} {required && <span className="required-asterisk">*</span>}</span>
    </label>
    <div style={{ position: 'relative' }}>
      <input className="form-input" {...props} />
      {rightElement && (
        <div style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)' }}>
          {rightElement}
        </div>
      )}
    </div>
  </div>
);

export const Select = ({ label, required, ...props }: any) => (
  <div className="form-group">
    <label className="form-label">
      <span>{label} {required && <span className="required-asterisk">*</span>}</span>
    </label>
    <div style={{ position: 'relative' }}>
      <select className="form-input" style={{ appearance: 'none', paddingRight: '2rem' }} {...props}>
        {props.children}
      </select>
      <ChevronDown size={16} className="text-muted" style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
    </div>
  </div>
);

export const FileUpload = ({ label, required, uploadedFile: initialFile }: any) => {
  const [file, setFile] = useState(initialFile || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0].name);
    }
  };

  return (
    <div className="form-group">
      <label className="form-label">
        <span>{label} {required && <span className="required-asterisk">*</span>}</span>
      </label>
      <div className="file-upload-card">
        <input 
          type="file" 
          style={{ display: 'none' }} 
          ref={fileInputRef} 
          onChange={handleFileChange} 
        />
        <button type="button" className="file-upload-btn" onClick={() => fileInputRef.current?.click()}>
          <Upload size={16} /> Upload File
        </button>
        {file && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
            <span style={{ color: 'var(--text-main)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '120px' }}>{file}</span>
            <CheckCircle2 size={16} color="var(--success-text)" />
            <span style={{ color: 'var(--success-text)', fontSize: '0.75rem', fontWeight: 500 }}>Uploaded</span>
          </div>
        )}
      </div>
    </div>
  );
};

export const DatePicker = ({ label, required, value, onChange, ...props }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(props.defaultValue ? new Date(props.defaultValue) : null);
  const [currentMonth, setCurrentMonth] = useState(selectedDate || new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toISOString().split('T')[0];
  };

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const days = [];
  const daysInMonth = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
  const firstDay = getFirstDayOfMonth(currentMonth.getFullYear(), currentMonth.getMonth());

  // Fill empty slots for previous month
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Fill current month days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i));
  }

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <div className="form-group" ref={containerRef}>
      <label className="form-label">
        <span>{label} {required && <span className="required-asterisk">*</span>}</span>
      </label>
      <div style={{ position: 'relative' }}>
        <div 
          className="form-input" 
          onClick={() => setIsOpen(!isOpen)}
          style={{ 
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            backgroundColor: 'white'
          }}
        >
          <span style={{ color: selectedDate ? 'var(--text-main)' : 'var(--text-muted)' }}>
            {selectedDate ? selectedDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Select Date'}
          </span>
          <Calendar size={18} style={{ color: 'var(--primary)' }} />
        </div>

        {isOpen && (
          <div style={{ 
            position: 'absolute', 
            top: 'calc(100% + 8px)', 
            left: '0', 
            backgroundColor: 'white', 
            border: '1px solid var(--border)', 
            borderRadius: '0.75rem', 
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', 
            zIndex: 100, 
            width: '280px',
            padding: '1rem',
            userSelect: 'none'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </div>
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                <button 
                  onClick={(e) => { e.stopPropagation(); setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)); }}
                  style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '0.25rem', borderRadius: '0.375rem' }}
                  className="calendar-nav-btn"
                >
                  <ChevronLeft size={16} />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)); }}
                  style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '0.25rem', borderRadius: '0.375rem' }}
                  className="calendar-nav-btn"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px', textAlign: 'center', marginBottom: '0.5rem' }}>
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <div key={day} style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)', paddingBottom: '0.25rem' }}>{day}</div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px' }}>
              {days.map((date, i) => (
                <div 
                  key={i} 
                  onClick={(e) => {
                    if (date) {
                      e.stopPropagation();
                      setSelectedDate(date);
                      setIsOpen(false);
                      if (onChange) onChange(formatDate(date));
                    }
                  }}
                  style={{ 
                    aspectRatio: '1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    borderRadius: '0.375rem',
                    cursor: date ? 'pointer' : 'default',
                    backgroundColor: date && selectedDate && date.toDateString() === selectedDate.toDateString() ? 'var(--primary)' : 'transparent',
                    color: date && selectedDate && date.toDateString() === selectedDate.toDateString() ? 'white' : (date ? 'var(--text-main)' : 'transparent'),
                    fontWeight: date && selectedDate && date.toDateString() === selectedDate.toDateString() ? 600 : 400,
                  }}
                  className={date ? 'calendar-day' : ''}
                >
                  {date ? date.getDate() : ''}
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'center' }}>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  const today = new Date();
                  setSelectedDate(today);
                  setCurrentMonth(today);
                  setIsOpen(false);
                  if (onChange) onChange(formatDate(today));
                }}
                style={{ border: 'none', background: 'none', color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
              >
                Today
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const Modal = ({ isOpen, onClose, title, children }: any) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', zIndex: 1000,
      backdropFilter: 'blur(4px)'
    }} onClick={onClose}>
      <div style={{
        backgroundColor: 'white', borderRadius: '1rem', width: '90%', maxWidth: '600px',
        maxHeight: '90vh', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        display: 'flex', flexDirection: 'column'
      }} onClick={e => e.stopPropagation()}>
        <div style={{
          padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between'
        }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>{title}</h3>
          <button onClick={onClose} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
            <X size={20} />
          </button>
        </div>
        <div style={{ padding: '1.5rem', overflowY: 'auto' }}>
          {children}
        </div>
      </div>
    </div>
  );
};
