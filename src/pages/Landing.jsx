
import './Landing.css';

const steps = [
  {
    number: '01',
    title: 'Upload your resume',
    description:
      'Upload your existing resume. Our AI extracts your skills, experience and career preferences.',
    icon: '📄',
  },
  {
    number: '02',
    title: 'Discover matching jobs',
    description:
      'Find relevant opportunities across multiple job platforms, ranked by how well you match.',
    icon: '🎯',
  },
  {
    number: '03',
    title: 'Apply with one click',
    description:
      'Review job details, autofill application forms and submit with your confirmation.',
    icon: '⚡',
  },
];

const features = [
  {
    icon: '🧠',
    title: 'AI-powered job matching',
    description:
      'Discover opportunities that actually match your skills, experience and career goals.',
  },
  {
    icon: '🔎',
    title: 'Search across platforms',
    description:
      'Explore relevant openings from multiple company career pages and supported job platforms.',
  },
  {
    icon: '⚡',
    title: 'Simplified applications',
    description:
      'Reduce repetitive form filling with smart application autofill and user-controlled submission.',
  },
  {
    icon: '📊',
    title: 'Track every application',
    description:
      'Keep all your applications organized and monitor their progress from one dashboard.',
  },
];

const faqs = [
  {
    question: 'How does JobHunter work?',
    answer:
      'Upload your resume, let our AI analyse your profile, discover matching opportunities and manage applications from one place.',
  },
  {
    question: 'Is JobHunter free to use?',
    answer:
      'Pricing and available features will depend on the plans offered by JobHunter. You can start by creating an account.',
  },
  {
    question: 'Does JobHunter automatically apply for jobs?',
    answer:
      'JobHunter can help autofill supported application forms. You review the details and confirm before the application is submitted.',
  },
  {
    question: 'Which job platforms are supported?',
    answer:
      'Supported platforms will depend on available integrations, APIs and each platform’s automation policies.',
  },
  {
    question: 'Is my resume data secure?',
    answer:
      'Your resume should be handled securely and only used for the features you authorize. You should be able to manage your uploaded information.',
  },
];

const Landing = () => {
  return (
    <main className="landing-page">

      {/* Navbar */}
      <header className="landing-header">
        <nav className="landing-nav container">
          <a href="/" className="brand-logo">
            <span className="brand-icon">J</span>
            Job<span>Hunter</span>
          </a>

          <div className="nav-links">
            <a href="#how-it-works">How it works</a>
            <a href="#features">Features</a>
            <a href="#faq">FAQs</a>
          </div>

          <div className="nav-actions">
            <a href="/login" className="nav-login">
              Login
            </a>
            <a href="/signup" className="btn btn-primary nav-signup">
              Get Started <span>→</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">

          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              YOUR SMARTER JOB SEARCH STARTS HERE
            </div>

            <h1>
              Stop searching.
              <br />
              Start <span>getting hired.</span>
            </h1>

            <p className="hero-description">
              Your next opportunity is out there. Let AI find the right jobs
              for your skills, simplify applications and keep your job search
              organized — all in one place.
            </p>

            <div className="hero-actions">
              <a href="/signup" className="btn btn-primary hero-cta">
                Upload Your Resume <span>→</span>
              </a>
              <a href="#how-it-works" className="btn btn-secondary">
                See How It Works
              </a>
            </div>

            <div className="hero-trust">
              <div className="trust-avatars">
                <span>R</span>
                <span>A</span>
                <span>S</span>
                <span>+</span>
              </div>
              <p>
                <strong>One smarter workflow</strong>
                <br />
                for your entire job search
              </p>
            </div>
          </div>

          {/* Animated Dashboard Illustration */}
          <div className="hero-visual">

            <div className="visual-glow"></div>

            <div className="floating-tag floating-tag-top">
              <span className="floating-icon">✦</span>
              AI Job Matching
            </div>

            <div className="dashboard-preview">

              <div className="preview-header">
                <div className="preview-brand">
                  <span className="preview-brand-icon">J</span>
                  JobHunter
                </div>
                <div className="preview-profile">RK</div>
              </div>

              <div className="preview-body">
                <div className="preview-welcome">
                  <div>
                    <span>YOUR JOB DASHBOARD</span>
                    <h3>Good morning, Rupesh 👋</h3>
                    <p>Your next opportunity is waiting.</p>
                  </div>
                  <div className="preview-notification">●</div>
                </div>

                <div className="resume-card">
                  <div className="resume-icon">📄</div>
                  <div className="resume-info">
                    <strong>Rupesh_Resume.pdf</strong>
                    <span>Resume analysed successfully</span>
                  </div>
                  <span className="resume-check">✓</span>
                </div>

                <div className="match-heading">
                  <div>
                    <h4>Matching opportunities</h4>
                    <span>Based on your profile</span>
                  </div>
                  <span className="match-count">12 jobs found</span>
                </div>

                <div className="job-preview-card">
                  <div className="company-logo company-purple">G</div>
                  <div className="job-preview-info">
                    <strong>Backend Developer</strong>
                    <span>Google · Bengaluru</span>
                    <small>₹12–18 LPA</small>
                  </div>
                  <div className="match-score">
                    <strong>96%</strong>
                    <span>Match</span>
                  </div>
                </div>

                <div className="job-preview-card">
                  <div className="company-logo company-blue">M</div>
                  <div className="job-preview-info">
                    <strong>Java Developer</strong>
                    <span>Microsoft · Hyderabad</span>
                    <small>₹10–16 LPA</small>
                  </div>
                  <div className="match-score">
                    <strong>91%</strong>
                    <span>Match</span>
                  </div>
                </div>

                <div className="job-preview-card">
                  <div className="company-logo company-orange">A</div>
                  <div className="job-preview-info">
                    <strong>Software Engineer</strong>
                    <span>Amazon · Remote</span>
                    <small>₹14–20 LPA</small>
                  </div>
                  <div className="match-score">
                    <strong>88%</strong>
                    <span>Match</span>
                  </div>
                </div>

                <div className="preview-footer">
                  <span>✦ AI-powered recommendations</span>
                  <span>View all →</span>
                </div>
              </div>
            </div>

            <div className="floating-tag floating-tag-bottom">
              <span>✓</span> Your next move, simplified.
            </div>

          </div>
        </div>

        <div className="hero-bottom container">
          <span>BUILT FOR A SMARTER JOB SEARCH</span>
          <div className="hero-bottom-line"></div>
          <span>LESS EFFORT. MORE OPPORTUNITIES.</span>
        </div>
      </section>

      {/* How it works */}
      <section className="how-section section-padding" id="how-it-works">
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">HOW IT WORKS</span>
            <h2>
              Three steps.
              <br />
              <span>One smarter job search.</span>
            </h2>
            <p>
              Forget switching between countless tabs. Your job search,
              simplified into one seamless workflow.
            </p>
          </div>

          <div className="steps-grid">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <div className="step-top">
                  <span className="step-number">{step.number}</span>
                  <span className="step-icon">{step.icon}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="step-bottom-line"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section section-padding" id="features">
        <div className="container">
          <div className="section-heading">
            <span className="section-eyebrow">WHY JOBHUNTER</span>
            <h2>
              Everything you need.
              <br />
              <span>Nothing you don't.</span>
            </h2>
            <p>
              Powerful tools designed to make your job search more focused,
              organized and efficient.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon">{feature.icon}</div>
                <span className="feature-index">
                  0{index + 1}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-decoration">✦</div>
            <span className="section-eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
            <h2>
              Your dream job won't
              <br />
              <span>find itself.</span>
            </h2>
            <p>
              Give your job search a smarter direction. Upload your resume
              and discover opportunities that match your potential.
            </p>
            <a href="/signup" className="btn cta-button">
              Get Started for Free <span>→</span>
            </a>
            <small>No complicated setup. Just a smarter start.</small>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section section-padding" id="faq">
        <div className="container faq-container">
          <div className="faq-intro">
            <span className="section-eyebrow">GOT QUESTIONS?</span>
            <h2>
              Frequently asked
              <br />
              <span>questions.</span>
            </h2>
            <p>
              Everything you need to know before starting your smarter
              job search.
            </p>
            <a href="mailto:support@jobhunter.com" className="faq-contact">
              Still have questions? Contact us →
            </a>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="faq-toggle">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="/" className="brand-logo">
                <span className="brand-icon">J</span>
                Job<span>Hunter</span>
              </a>
              <p>
                A smarter way to discover opportunities and manage your
                job search.
              </p>
            </div>

            <div className="footer-links">
              <div>
                <strong>Explore</strong>
                <a href="#how-it-works">How it works</a>
                <a href="#features">Features</a>
                <a href="#faq">FAQs</a>
              </div>
              <div>
                <strong>Account</strong>
                <a href="/login">Login</a>
                <a href="/signup">Create account</a>
              </div>
              <div>
                <strong>Legal</strong>
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} JobHunter. All rights reserved.</p>
            <p>Built for your next opportunity. <span>♥</span></p>
          </div>
        </div>
      </footer>

    </main>
  );
};

export default Landing;
