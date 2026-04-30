const innovationsData = [
  { id: 1, title: 'AI-driven Crop Disease Analytics', stage: 'Deployment', author: 'LUANAR Data Team', date: 'Oct 12, 2023' },
  { id: 2, title: 'Low-cost Solar Networking Module', stage: 'Research', author: 'Mzuni Tech Lab', date: 'Nov 05, 2023' },
  { id: 3, title: 'Mobile Exam Registration Portal', stage: 'Testing', author: 'MANEB Integrations', date: 'Dec 01, 2023' },
  { id: 4, title: 'Biogas Incubation Prototype', stage: 'Concept', author: 'MUST BioTech', date: 'Jan 20, 2024' },
];

const topContributors = [
  { id: 1, name: 'Dr. Emily Chen', projects: 12, department: 'UNIMA AI Research' },
  { id: 2, name: 'James Wilson', projects: 8, department: 'MUST Systems Eng' },
  { id: 3, name: 'Sarah Connor', projects: 7, department: 'Ndirande Security Lab' },
];

const InnovationsPage = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Innovations Hub</h1>
        <p className="page-description">Track research, development, and new technological initiatives.</p>
      </div>

      <div className="grid grid-cols-4">
        <div className="card">
          <div className="card-title">Concept Stage</div>
          <div className="card-value">42</div>
        </div>
        <div className="card">
          <div className="card-title">In Research</div>
          <div className="card-value">28</div>
        </div>
        <div className="card">
          <div className="card-title">Testing Phase</div>
          <div className="card-value">15</div>
        </div>
        <div className="card">
          <div className="card-title">Deployed</div>
          <div className="card-value">84</div>
        </div>
      </div>

      <div className="grid grid-cols-2" style={{ marginTop: '24px' }}>
        <div className="card">
          <div className="card-title">Focus Categories</div>
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="flex-row" style={{ justifyContent: 'space-between', padding: '12px', backgroundColor: 'var(--primary-light)', borderRadius: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--primary-color)' }}>Artificial Intelligence</span>
              <span className="badge badge-info">34 Projects</span>
            </div>
            <div className="flex-row" style={{ justifyContent: 'space-between', padding: '12px', backgroundColor: '#e0f2fe', borderRadius: '8px' }}>
              <span style={{ fontWeight: 600, color: 'var(--secondary-color)' }}>Cybersecurity</span>
              <span className="badge badge-warning">21 Projects</span>
            </div>
            <div className="flex-row" style={{ justifyContent: 'space-between', padding: '12px', backgroundColor: 'var(--accent-light)', borderRadius: '8px' }}>
              <span style={{ fontWeight: 600, color: '#854d0e' }}>Biotechnology</span>
              <span className="badge badge-success">15 Projects</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Top Contributors</div>
          <div style={{ marginTop: '8px' }}>
            {topContributors.map((contributor, index) => (
              <div key={contributor.id} className="list-item">
                <div className="flex-row" style={{ gap: '16px' }}>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-secondary)' }}>
                    #{index + 1}
                  </div>
                  <div>
                    <div className="list-item-title">{contributor.name}</div>
                    <div className="list-item-subtitle">{contributor.department}</div>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 600, color: 'var(--primary-color)' }}>{contributor.projects}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Projects</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '24px' }}>
        <div className="card-title">Recent Initiatives</div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Project Title</th>
                <th>Lead Author</th>
                <th>Current Stage</th>
                <th>Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {innovationsData.map((project) => (
                <tr key={project.id}>
                  <td style={{ fontWeight: 500 }}>{project.title}</td>
                  <td>{project.author}</td>
                  <td>
                    <span className="badge badge-success">{project.stage}</span>
                  </td>
                  <td>{project.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InnovationsPage;
