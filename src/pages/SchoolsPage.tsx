const schoolsData = [
  { id: 1, name: 'Mzuzu Government Secondary', district: 'Mzuzu', students: 1200, performance: 'A' },
  { id: 2, name: 'Bwaila Secondary School', district: 'Lilongwe', students: 2850, performance: 'B+' },
  { id: 3, name: 'Chichiri Secondary School', district: 'Blantyre', students: 2430, performance: 'A-' },
  { id: 4, name: 'Zomba Catholic Secondary', district: 'Zomba', students: 1100, performance: 'A+' },
];

const SchoolsPage = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Schools Network</h1>
        <p className="page-description">Monitor participating institutions and educational metrics.</p>
      </div>

      <div className="grid grid-cols-2">
        <div className="card">
          <div className="card-title">Top Performing District</div>
          <div className="card-value">Lilongwe Urban</div>
          <div className="card-subtitle">94% average score</div>
        </div>
        <div className="card">
          <div className="card-title">Total Student Reach</div>
          <div className="card-value">145,200</div>
          <div className="card-subtitle">+1,200 this semester</div>
        </div>
      </div>

      <div className="grid grid-cols-2" style={{ marginTop: '24px' }}>
        <div className="card">
          <div className="card-title">Resource Allocation</div>
          <div style={{ marginTop: '16px' }}>
            <div style={{ marginBottom: '16px' }}>
              <div className="flex-row" style={{ justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: 500 }}>Digital Libraries</span>
                <span style={{ fontSize: '14px', color: 'var(--primary-color)' }}>85%</span>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--border-color)', borderRadius: '4px' }}>
                <div style={{ width: '85%', height: '100%', backgroundColor: 'var(--primary-color)', borderRadius: '4px' }}></div>
              </div>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <div className="flex-row" style={{ justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: 500 }}>Lab Equipment</span>
                <span style={{ fontSize: '14px', color: 'var(--secondary-color)' }}>62%</span>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--border-color)', borderRadius: '4px' }}>
                <div style={{ width: '62%', height: '100%', backgroundColor: 'var(--secondary-color)', borderRadius: '4px' }}></div>
              </div>
            </div>
            <div>
              <div className="flex-row" style={{ justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', fontWeight: 500 }}>Teacher Training</span>
                <span style={{ fontSize: '14px', color: 'var(--accent-color)' }}>45%</span>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--border-color)', borderRadius: '4px' }}>
                <div style={{ width: '45%', height: '100%', backgroundColor: 'var(--accent-color)', borderRadius: '4px' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ backgroundColor: 'var(--primary-color)', color: 'white', border: 'none' }}>
          <div className="card-title" style={{ color: 'var(--primary-light)' }}>Regional Distribution</div>
          <div style={{ marginTop: '24px' }}>
            <div className="list-item" style={{ borderBottomColor: 'rgba(255,255,255,0.1)' }}>
              <span style={{ fontWeight: 500 }}>North Region</span>
              <span style={{ fontWeight: 600 }}>124 Schools</span>
            </div>
            <div className="list-item" style={{ borderBottomColor: 'rgba(255,255,255,0.1)' }}>
              <span style={{ fontWeight: 500 }}>South Region</span>
              <span style={{ fontWeight: 600 }}>98 Schools</span>
            </div>
            <div className="list-item" style={{ borderBottomColor: 'none' }}>
              <span style={{ fontWeight: 500 }}>East Region</span>
              <span style={{ fontWeight: 600 }}>157 Schools</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '24px' }}>
        <div className="card-title">Institution Directory</div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Institution Name</th>
                <th>District</th>
                <th>Students</th>
                <th>Performance Grade</th>
              </tr>
            </thead>
            <tbody>
              {schoolsData.map((school) => (
                <tr key={school.id}>
                  <td style={{ fontWeight: 500 }}>{school.name}</td>
                  <td>{school.district}</td>
                  <td>{school.students.toLocaleString()}</td>
                  <td>
                    <span className="badge badge-info">{school.performance}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SchoolsPage;
