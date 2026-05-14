import React from 'react';
import { Shield, Home, FileText, Activity, Folder, User, LifeBuoy, LogOut, Phone } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'applications', label: 'My Applications', icon: FileText, active: true },
    { id: 'track', label: 'Track Loan', icon: Activity },
    { id: 'documents', label: 'Documents', icon: Folder },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'support', label: 'Support', icon: LifeBuoy },
  ];

  return (
    <div className="sidebar" style={{
      width: '260px',
      backgroundColor: 'var(--sidebar-bg)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: '1.5rem 0'
    }}>
      {/* Logo */}
      <div style={{ padding: '0 1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Shield size={28} color="white" />
        <div>
          <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>NorthBridge</div>
          <div style={{ fontSize: '0.7rem', opacity: 0.8, letterSpacing: '0.5px' }}>BUSINESS BANKING</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav" style={{ flex: 1 }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.875rem 1.5rem',
                backgroundColor: item.active ? 'var(--sidebar-active)' : 'transparent',
                cursor: 'pointer',
                borderRadius: item.active ? '0 2rem 2rem 0' : '0',
                marginRight: item.active ? '1rem' : '0',
                transition: 'background-color 0.2s'
              }}
            >
              <Icon size={20} opacity={item.active ? 1 : 0.7} />
              <span style={{ fontSize: '0.9rem', fontWeight: item.active ? 500 : 400, opacity: item.active ? 1 : 0.8 }}>
                {item.label}
              </span>
            </div>
          );
        })}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '0.875rem 1.5rem',
          cursor: 'pointer',
          marginTop: 'auto'
        }}>
          <LogOut size={20} opacity={0.7} />
          <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>Logout</span>
        </div>
      </nav>

      {/* Help Card */}
      <div style={{ padding: '1.5rem' }}>
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.05)',
          borderRadius: '0.5rem',
          padding: '1rem',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem' }}>Need help?</div>
          <div style={{ fontSize: '0.75rem', opacity: 0.7, marginBottom: '1rem', lineHeight: 1.4 }}>
            Talk to your Relationship Manager for assistance.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#ccc',
              backgroundImage: 'url("https://i.pravatar.cc/100?img=11")', backgroundSize: 'cover'
            }} />
          </div>
          <button style={{
            width: '100%', padding: '0.5rem', backgroundColor: 'transparent',
            border: '1px solid rgba(255,255,255,0.2)', borderRadius: '0.25rem', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
            fontSize: '0.8rem', cursor: 'pointer'
          }}>
            <Phone size={14} /> Contact RM
          </button>
        </div>
      </div>

      {/* Security Badge */}
      <div style={{ padding: '0 1.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
        <Shield size={20} color="#10b981" style={{ marginTop: '0.25rem' }} />
        <div>
          <div style={{ fontSize: '0.8rem', fontWeight: 500 }}>Your data is safe with us</div>
          <div style={{ fontSize: '0.7rem', opacity: 0.6, marginTop: '0.25rem', lineHeight: 1.4 }}>
            Bank-grade security<br/>256-bit SSL encryption
          </div>
        </div>
      </div>
      
      <div style={{ padding: '1.5rem', fontSize: '0.65rem', opacity: 0.5, marginTop: '1rem' }}>
        © 2024 NorthBridge Bank.<br/>All rights reserved.
      </div>
    </div>
  );
};

export default Sidebar;
