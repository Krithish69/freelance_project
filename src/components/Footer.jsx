import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#212529', color: '#adb5bd', padding: '60px 0 30px' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Brand Column */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '20px' }}>Bidman</h4>
            <p>Automated AI bidding platform for freelancers to save time and win more projects.</p>
          </div>

          {/* Useful Links */}
          <div>
            <h5 style={{ color: 'white', marginBottom: '20px' }}>Useful Links</h5>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#login">Login</a></li>
              <li><a href="#signup">Sign Up</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h5 style={{ color: 'white', marginBottom: '20px' }}>Support</h5>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="mailto:info@bidman.co">info@bidman.co</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '30px', 
          textAlign: 'center',
          fontSize: '0.9rem'
        }}>
          <p>&copy; {new Date().getFullYear()} Bidman. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;