const ChatbotPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 150px)' }}>
      <div className="page-header" style={{ marginBottom: '24px' }}>
        <h1 className="page-title">AI Assistant</h1>
        <p className="page-description">Ask questions about platform data, reports, and Malawian school statistics.</p>
      </div>

      <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden' }}>
        <div style={{ padding: '24px', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--primary-light)' }}>
          <div style={{ fontWeight: 600, color: 'var(--primary-color)', fontSize: '18px' }}>Education Data AI</div>
          <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Online - Ready to help</div>
        </div>
        
        <div style={{ flex: 1, padding: '24px', overflowY: 'auto', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          <div style={{ alignSelf: 'flex-start', maxWidth: '70%' }}>
            <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '12px', borderBottomLeftRadius: '0', boxShadow: 'var(--shadow-sm)' }}>
              Hello! I'm your AI assistant for the Malawi Education Platform. I can help you analyze data across universities (like MUST, UNIMA, LUANAR) and secondary schools. What would you like to know today?
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px', marginLeft: '4px' }}>10:00 AM</div>
          </div>

          <div style={{ alignSelf: 'flex-end', maxWidth: '70%' }}>
            <div style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '16px', borderRadius: '12px', borderBottomRightRadius: '0', boxShadow: 'var(--shadow-sm)' }}>
              How many new secondary schools joined the platform from the Northern Region this month?
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px', textAlign: 'right', marginRight: '4px' }}>10:02 AM</div>
          </div>

          <div style={{ alignSelf: 'flex-start', maxWidth: '70%' }}>
            <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '12px', borderBottomLeftRadius: '0', boxShadow: 'var(--shadow-sm)' }}>
              This month, <strong>14 new secondary schools</strong> from the Northern Region (Mzuzu and surrounding districts) registered on the platform. The majority of these are from Mzimba district.
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px', marginLeft: '4px' }}>10:02 AM</div>
          </div>

        </div>

        <div style={{ padding: '20px', borderTop: '1px solid var(--border-color)', backgroundColor: 'white' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <input 
              type="text" 
              placeholder="Ask about school performance, user stats, or regional data..." 
              style={{ 
                flex: 1, 
                padding: '16px', 
                borderRadius: '8px', 
                border: '1px solid var(--border-color)',
                outline: 'none',
                fontSize: '15px'
              }}
            />
            <button style={{ 
              padding: '0 24px', 
              backgroundColor: 'var(--primary-color)', 
              color: 'white', 
              border: 'none', 
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer'
            }}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
