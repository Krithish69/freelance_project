import React from 'react';

function Header() {
  return (
    <header style={{ 
      position: 'sticky', 
      top: 0, 
      backgroundColor: 'white', 
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
      zIndex: 1000 
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        height: '80px' 
      }}>
        {/* Logo Area */}
        <a href="/" style={{ 
          fontSize: '28px', 
          fontWeight: '800', 
          color: 'var(--primary-color)',
          letterSpacing: '-1px'
        }}>
          Bidman
        </a>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <a href="#features" style={{ fontWeight: '500', color: 'var(--text-dark)' }}>Features</a>
          <a href="#pricing" style={{ fontWeight: '500', color: 'var(--text-dark)' }}>Pricing</a>
          <a href="#login" style={{ fontWeight: '600', color: 'var(--primary-color)' }}>Login</a>
          <a href="#signup" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Sign up</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;