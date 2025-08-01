import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const HarmonyMatchWelcome = () => {
  const navigate = useNavigate();
  // Helper to go to auth page
  const goToAuth = useCallback(() => navigate('/auth'), [navigate]);

  // Team members data
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "AI Engineer & Co-Founder",
      image: "SJ",
      bio: "10+ years in AI/ML, Stanford CS graduate"
    },
    {
      name: "Maya Patel",
      role: "Product Designer & Co-Founder",
      image: "MP",
      bio: "UX expert focused on women's safety tech"
    },
    {
      name: "Lisa Chen",
      role: "Safety & Community Lead",
      image: "LC",
      bio: "Former safety consultant, women's advocacy"
    },
    {
      name: "Emma Rodriguez",
      role: "Backend Engineer",
      image: "ER",
      bio: "Security specialist, data protection expert"
    }
  ];

  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Matching",
      description: "Advanced algorithms analyze compatibility based on lifestyle, preferences, and personality"
    },
    {
      icon: "🛡️",
      title: "Verified Profiles",
      description: "Every user undergoes thorough verification for maximum safety and authenticity"
    },
    {
      icon: "🏠",
      title: "Quality Listings",
      description: "Curated housing options in safe neighborhoods with transparent pricing"
    },
    {
      icon: "💬",
      title: "Secure Messaging",
      description: "Built-in chat system with privacy controls and safety features"
    },
    {
      icon: "⭐",
      title: "Review System",
      description: "Community-driven reviews and ratings for informed decisions"
    },
    {
      icon: "📱",
      title: "24/7 Support",
      description: "Round-the-clock assistance and emergency support for all users"
    }
  ];

  // SVG Components
  const HeroIllustrationSVG = () => (
    <svg viewBox="0 0 500 400" style={{ width: '100%', height: '300px' }}>
      {/* Background elements */}
      <circle cx="400" cy="100" r="60" fill="#f19fc5" opacity="0.3" />
      <circle cx="80" cy="320" r="40" fill="#ed6da6" opacity="0.4" />
      <rect x="350" y="250" width="30" height="30" rx="15" fill="#f19fc5" opacity="0.5" />
      
      {/* Main house illustration */}
      <g transform="translate(150, 120)">
        <path d="M100 20 L180 80 L180 200 L20 200 L20 80 Z" fill="#822c87" />
        <path d="M100 20 L180 80 L20 80 Z" fill="#ed6da6" />
        
        {/* Windows */}
        <rect x="40" y="120" width="35" height="35" fill="#f19fc5" rx="5" />
        <rect x="125" y="120" width="35" height="35" fill="#f19fc5" rx="5" />
        
        {/* Door */}
        <rect x="85" y="160" width="30" height="40" fill="#f19fc5" rx="3" />
        <circle cx="108" cy="180" r="2" fill="#822c87" />
        
        {/* Heart symbol */}
        <g transform="translate(90, 90)">
          <path d="M10,15 C10,10 5,5 0,10 C-5,5 -10,10 -10,15 C-10,20 0,30 0,30 C0,30 10,20 10,15 Z" 
                fill="#ed6da6" />
        </g>
      </g>
      
      {/* Female figures */}
      <g transform="translate(50, 180)">
        <circle cx="0" cy="0" r="25" fill="#f19fc5" />
        <rect x="-15" y="20" width="30" height="50" rx="15" fill="#822c87" />
        <text x="0" y="5" textAnchor="middle" fill="#822c87" fontSize="14" fontWeight="bold">👩</text>
      </g>
      
      <g transform="translate(350, 180)">
        <circle cx="0" cy="0" r="25" fill="#ed6da6" />
        <rect x="-15" y="20" width="30" height="50" rx="15" fill="#822c87" />
        <text x="0" y="5" textAnchor="middle" fill="#822c87" fontSize="14" fontWeight="bold">👩</text>
      </g>
      
      {/* Connection line */}
      <path d="M75 200 Q 200 150 325 200" stroke="#ed6da6" strokeWidth="3" fill="none" strokeDasharray="5,5" />
    </svg>
  );

  const AIIconSVG = () => (
    <svg viewBox="0 0 100 100" style={{ width: '80px', height: '80px' }}>
      <circle cx="50" cy="50" r="45" fill="#822c87" />
      <circle cx="35" cy="40" r="8" fill="#f19fc5" />
      <circle cx="65" cy="40" r="8" fill="#f19fc5" />
      <path d="M30 65 Q50 80 70 65" stroke="#f19fc5" strokeWidth="3" fill="none" />
      <rect x="45" y="20" width="10" height="15" fill="#ed6da6" rx="5" />
      <rect x="35" y="15" width="6" height="10" fill="#ed6da6" rx="3" />
      <rect x="59" y="15" width="6" height="10" fill="#ed6da6" rx="3" />
    </svg>
  );



  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.logo}>
            <span style={styles.logoText}>Harmony Match</span>
          </div>
          <div style={styles.navLinks}>
            <a href="#features" style={styles.navLink} onClick={goToAuth}>Features</a>
            <a href="#team" style={styles.navLink} onClick={goToAuth}>Team</a>
            <a href="#about" style={styles.navLink} onClick={goToAuth}>About</a>
            <button onClick={goToAuth} style={styles.navButton}>
              Get Started
            </button>
            <button onClick={() => navigate('/admin-login')} style={{...styles.navButton, backgroundColor: '#4a5568', color: '#fff', marginLeft: 8}}>
              Admin Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.heroText}>
            <h1 style={styles.heroTitle}>
              Find Your Perfect
              <span style={styles.highlight}> Female Roommate</span>
              <br />with AI Precision
            </h1>
            <p style={styles.heroSubtitle}>
              Harmony Match uses advanced AI algorithms to connect women with compatible roommates, 
              ensuring safety, compatibility, and peace of mind in your living arrangements.
            </p>
            <div style={styles.heroButtons}>
              <button onClick={goToAuth} style={styles.primaryButton}>
                Start Matching Now
              </button>
              <button onClick={goToAuth} style={styles.secondaryButton}>
                Watch Demo
              </button>
              <button onClick={() => navigate('/admin-login')} style={{...styles.primaryButton, backgroundColor: '#4a5568', color: '#fff', marginLeft: 8}}>
                Admin Login
              </button>
            </div>
            <div style={styles.stats}>
              <div style={styles.stat}>
                <span style={styles.statNumber}>10,000+</span>
                <span style={styles.statLabel}>Successful Matches</span>
              </div>
              <div style={styles.stat}>
                <span style={styles.statNumber}>98%</span>
                <span style={styles.statLabel}>Satisfaction Rate</span>
              </div>
              <div style={styles.stat}>
                <span style={styles.statNumber}>50+</span>
                <span style={styles.statLabel}>Cities</span>
              </div>
            </div>
          </div>
          <div style={styles.heroIllustration}>
            <HeroIllustrationSVG />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={styles.features}>
        <div style={styles.sectionContent}>
          <div style={styles.sectionHeader}>
            <AIIconSVG />
            <h2 style={styles.sectionTitle}>Why Choose Harmony Match?</h2>
            <p style={styles.sectionSubtitle}>
              Our AI-powered platform prioritizes safety, compatibility, and convenience
            </p>
          </div>
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} style={styles.featureCard}>
                <div style={styles.featureIcon}>{feature.icon}</div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" style={styles.team}>
        <div style={styles.sectionContent}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Meet Our Team</h2>
            <p style={styles.sectionSubtitle}>
              Passionate women building the future of safe roommate matching
            </p>
          </div>
          <div style={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} style={styles.teamCard}>
                <div style={styles.memberImage}>
                  <span style={styles.memberInitials}>{member.image}</span>
                </div>
                <h3 style={styles.memberName}>{member.name}</h3>
                <p style={styles.memberRole}>{member.role}</p>
                <p style={styles.memberBio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.cta}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Ready to Find Your Perfect Match?</h2>
          <p style={styles.ctaSubtitle}>
            Join thousands of women who have found their ideal living situations through Harmony Match
          </p>
          <div style={styles.ctaButtons}>
            <button onClick={goToAuth} style={styles.ctaPrimary}>
              Get Started Free
            </button>
            <button onClick={goToAuth} style={styles.ctaSecondary}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Harmony Match</h4>
            <p style={styles.footerText}>AI-powered roommate matching for women</p>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Product</h4>
            <a href="#" style={styles.footerLink}>Features</a>
            <a href="#" style={styles.footerLink}>Pricing</a>
            <a href="#" style={styles.footerLink}>Safety</a>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Company</h4>
            <a href="#" style={styles.footerLink}>About</a>
            <a href="#" style={styles.footerLink}>Team</a>
            <a href="#" style={styles.footerLink}>Careers</a>
          </div>
          <div style={styles.footerSection}>
            <h4 style={styles.footerTitle}>Support</h4>
            <a href="#" style={styles.footerLink}>Help Center</a>
            <a href="#" style={styles.footerLink}>Contact</a>
            <a href="#" style={styles.footerLink}>Privacy</a>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>© 2025 Harmony Match. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    lineHeight: '1.6',
    color: '#333'
  },
  
  // Navigation
  nav: {
    backgroundColor: '#822c87',
    padding: '1rem 0',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(130, 44, 135, 0.1)'
  },
  navContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  logoText: {
    color: 'white'
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem'
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s ease'
  },
  navButton: {
    backgroundColor: '#f19fc5',
    color: '#822c87',
    border: 'none',
    padding: '0.5rem 1.5rem',
    borderRadius: '25px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },

  // Hero Section
  hero: {
    backgroundColor: '#f19fc5',
    paddingTop: '120px',
    paddingBottom: '80px',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center'
  },
  heroContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '4rem'
  },
  heroText: {
    flex: 1
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: '700',
    color: '#822c87',
    marginBottom: '1.5rem',
    lineHeight: '1.2'
  },
  highlight: {
    color: '#ed6da6'
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    color: '#822c87',
    marginBottom: '2rem',
    opacity: 0.8
  },
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '3rem'
  },
  primaryButton: {
    backgroundColor: '#822c87',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '30px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: '#822c87',
    border: '2px solid #822c87',
    padding: '1rem 2rem',
    borderRadius: '30px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  heroIllustration: {
    flex: 1
  },
  stats: {
    display: 'flex',
    gap: '3rem'
  },
  stat: {
    display: 'flex',
    flexDirection: 'column'
  },
  statNumber: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#822c87'
  },
  statLabel: {
    fontSize: '0.9rem',
    color: '#822c87',
    opacity: 0.7
  },

  // Features Section
  features: {
    backgroundColor: 'white',
    padding: '80px 0'
  },
  sectionContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '4rem'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#822c87',
    marginBottom: '1rem'
  },
  sectionSubtitle: {
    fontSize: '1.1rem',
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto'
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem'
  },
  featureCard: {
    backgroundColor: '#f8f9fa',
    padding: '2rem',
    borderRadius: '15px',
    textAlign: 'center',
    border: '2px solid #ed6da6',
    transition: 'transform 0.3s ease'
  },
  featureIcon: {
    fontSize: '3rem',
    marginBottom: '1rem'
  },
  featureTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#822c87',
    marginBottom: '1rem'
  },
  featureDescription: {
    color: '#666',
    lineHeight: '1.6'
  },

  // Team Section
  team: {
    backgroundColor: '#f19fc5',
    padding: '80px 0'
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem'
  },
  teamCard: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(130, 44, 135, 0.1)',
    border: '2px solid #ed6da6'
  },
  memberImage: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: '#822c87',
    margin: '0 auto 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  memberInitials: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  memberName: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#822c87',
    marginBottom: '0.5rem'
  },
  memberRole: {
    color: '#ed6da6',
    fontWeight: '500',
    marginBottom: '1rem'
  },
  memberBio: {
    color: '#666',
    fontSize: '0.9rem'
  },

  // CTA Section
  cta: {
    backgroundColor: '#822c87',
    padding: '80px 0',
    textAlign: 'center'
  },
  ctaContent: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 2rem'
  },
  ctaTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: 'white',
    marginBottom: '1rem'
  },
  ctaSubtitle: {
    fontSize: '1.2rem',
    color: 'white',
    opacity: 0.9,
    marginBottom: '2rem'
  },
  ctaButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center'
  },
  ctaPrimary: {
    backgroundColor: '#f19fc5',
    color: '#822c87',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '30px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  ctaSecondary: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid white',
    padding: '1rem 2rem',
    borderRadius: '30px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },

  // Footer
  footer: {
    backgroundColor: '#2d3748',
    color: 'white',
    padding: '3rem 0 1rem'
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem'
  },
  footerSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  footerTitle: {
    color: '#f19fc5',
    marginBottom: '1rem',
    fontSize: '1.1rem',
    fontWeight: '600'
  },
  footerText: {
    color: '#a0aec0',
    fontSize: '0.9rem'
  },
  footerLink: {
    color: '#a0aec0',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.3s ease'
  },
  footerBottom: {
    maxWidth: '1200px',
    margin: '2rem auto 0',
    padding: '2rem 2rem 0',
    borderTop: '1px solid #4a5568',
    textAlign: 'center',
    color: '#a0aec0',
    fontSize: '0.9rem'
  },

  // Auth placeholder (for demo)
  authPlaceholder: {
    minHeight: '100vh',
    backgroundColor: '#f19fc5',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backButton: {
    backgroundColor: '#822c87',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '2rem'
  },
  authContent: {
    backgroundColor: 'white',
    padding: '3rem',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  }
};

// Add responsive styles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @media (max-width: 768px) {
    .hero-content {
      flex-direction: column !important;
      text-align: center !important;
    }
    
    .hero-title {
      font-size: 2.5rem !important;
    }
    
    .hero-buttons, .cta-buttons {
      flex-direction: column !important;
      align-items: center !important;
    }
    
    .stats {
      justify-content: center !important;
      flex-wrap: wrap !important;
    }
    
    .nav-links {
      display: none !important;
    }
    
    .features-grid, .team-grid {
      grid-template-columns: 1fr !important;
    }
    
    .section-title {
      font-size: 2rem !important;
    }
    
    .cta-title {
      font-size: 2rem !important;
    }
  }

  button:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 25px rgba(130, 44, 135, 0.2) !important;
  }
  
  .feature-card:hover {
    transform: translateY(-5px) !important;
  }
  
  .team-card:hover {
    transform: translateY(-5px) !important;
  }
  
  .nav-link:hover {
    color: #f19fc5 !important;
  }
  
  .footer-link:hover {
    color: #f19fc5 !important;
  }
`;
document.head.appendChild(styleSheet);

export default HarmonyMatchWelcome;