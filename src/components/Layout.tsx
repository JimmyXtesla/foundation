import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/dashboard', label: 'Overview',  short: 'Home',    emoji: '🏠' },
  { to: '/schools',   label: 'Schools',   short: 'Schools', emoji: '🏫' },
  { to: '/content',   label: 'Content',   short: 'Content', emoji: '📚' },
  { to: '/media',     label: 'Media',     short: 'Media',   emoji: '🖼️' },
  { to: '/innovations', label: 'Projects', short: 'Projects', emoji: '🔬' },
];

const sidebarLinks = [
  { to: '/dashboard',   label: 'DASH' },
  { to: '/users',       label: 'USER' },
  { to: '/schools',     label: 'SCHL' },
  { to: '/innovations', label: 'PROJ' },
  { to: '/opportunities', label: 'OPPS' },
  { to: '/blogs',       label: 'BLOG' },
  { to: '/media',       label: 'MEDIA' },
  { to: '/content',     label: 'CONT' },
  { to: '/support',     label: 'HELP' },
  { to: '/chatbot',     label: 'CHAT' },
];

const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  return (
    <div className="dashboard-container">

      {/* ── Top Bar ── */}
      <header className="top-bar">
        <div className="logo-section">
          {/* Hamburger – mobile only */}
          <button
            className="hamburger-btn"
            onClick={() => setDrawerOpen(o => !o)}
            aria-label="Open menu"
          >
            <span className={`ham-line ${drawerOpen ? 'open-1' : ''}`} />
            <span className={`ham-line ${drawerOpen ? 'open-2' : ''}`} />
            <span className={`ham-line ${drawerOpen ? 'open-3' : ''}`} />
          </button>

          <div className="logo-icon">S4A</div>
          <div className="logo-text">Science for All</div>
        </div>

        {/* Desktop centre nav */}
        <nav className="top-nav">
          <NavLink to="/dashboard"    className={({ isActive }) => isActive ? 'top-nav-link active' : 'top-nav-link'}>Overview</NavLink>
          <NavLink to="/schools"      className={({ isActive }) => isActive ? 'top-nav-link active' : 'top-nav-link'}>Schools</NavLink>
          <NavLink to="/opportunities" className={({ isActive }) => isActive ? 'top-nav-link active' : 'top-nav-link'}>Careers</NavLink>
          <NavLink to="/innovations"  className={({ isActive }) => isActive ? 'top-nav-link active' : 'top-nav-link'}>Projects</NavLink>
          <NavLink to="/blogs"        className={({ isActive }) => isActive ? 'top-nav-link active' : 'top-nav-link'}>Library</NavLink>
          <NavLink to="/media"        className={({ isActive }) => isActive ? 'top-nav-link active' : 'top-nav-link'}>Media</NavLink>
          <NavLink to="/content"      className={({ isActive }) => isActive ? 'top-nav-link active' : 'top-nav-link'}>Content</NavLink>
        </nav>

        <div className="top-right">
          <button className="icon-btn" aria-label="Search"></button>
          <button className="icon-btn" aria-label="Alerts"></button>
          <div className="profile-avatar">AD</div>
        </div>
      </header>

      {/* ── Mobile Drawer Overlay ── */}
      {drawerOpen && (
        <div className="drawer-overlay" onClick={() => setDrawerOpen(false)} />
      )}

      {/* ── Mobile Drawer ── */}
      <div className={`mobile-drawer ${drawerOpen ? 'drawer-open' : ''}`}>
        <div className="drawer-header">
          <div className="logo-icon">S4A</div>
          <div className="logo-text">Science for All</div>
          <button className="drawer-close" onClick={() => setDrawerOpen(false)}>✕</button>
        </div>

        <nav className="drawer-nav">
          {sidebarLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => isActive ? 'drawer-link active' : 'drawer-link'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="drawer-footer">
          <button className="drawer-link">SETTINGS</button>
          <button className="drawer-link">LOG OUT</button>
        </div>
      </div>

      {/* ── Main Content Layout ── */}
      <div className="content-layout">

        {/* Desktop Sidebar */}
        <aside className="narrow-sidebar">
          <div className="sidebar-group">
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'side-nav-link active' : 'side-nav-link'}>DASH</NavLink>
          </div>
          <div className="sidebar-group">
            <NavLink to="/users"        className={({ isActive }) => isActive ? 'side-nav-link active' : 'side-nav-link'}>USER</NavLink>
            <NavLink to="/schools"      className={({ isActive }) => isActive ? 'side-nav-link active' : 'side-nav-link'}>SCHL</NavLink>
            <NavLink to="/innovations"  className={({ isActive }) => isActive ? 'side-nav-link active' : 'side-nav-link'}>PROJ</NavLink>
            <NavLink to="/opportunities" className={({ isActive }) => isActive ? 'side-nav-link active' : 'side-nav-link'}>OPPS</NavLink>
          </div>
          <div className="sidebar-group">
            <NavLink to="/blogs"   className={({ isActive }) => isActive ? 'side-nav-link active' : 'side-nav-link'}>BLOG</NavLink>
            <NavLink to="/media"   className={({ isActive }) => isActive ? 'side-nav-link active' : 'side-nav-link'}>MEDIA</NavLink>
            <NavLink to="/content" className={({ isActive }) => isActive ? 'side-nav-link active' : 'side-nav-link'}>CONT</NavLink>
            <NavLink to="/support" className={({ isActive }) => isActive ? 'side-nav-link active' : 'side-nav-link'}>HELP</NavLink>
            <NavLink to="/chatbot" className={({ isActive }) => isActive ? 'side-nav-link active' : 'side-nav-link'}>CHAT</NavLink>
          </div>
          <div style={{ flex: 1 }} />
          <div className="sidebar-group">
            <button className="side-nav-link" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>SET</button>
            <button className="side-nav-link" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>EXIT</button>
          </div>
        </aside>

        {/* Page Content */}
        <main className="main-content">
          <Outlet />
        </main>
      </div>

      {/* ── Mobile Bottom Tab Bar ── */}
      <nav className="mobile-bottom-nav">
        {navLinks.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => isActive ? 'mobile-tab-link active' : 'mobile-tab-link'}
          >
            <span className="mobile-tab-icon">{link.emoji}</span>
            <span className="mobile-tab-label">{link.short}</span>
          </NavLink>
        ))}
      </nav>

    </div>
  );
};

export default Layout;
