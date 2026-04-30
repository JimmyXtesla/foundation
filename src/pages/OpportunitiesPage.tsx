const opportunitiesData = [
  { id: 1, title: 'Software Engineering Intern', organization: 'NICO Group', location: 'Blantyre', type: 'Internship', deadline: '2024-05-15' },
  { id: 2, title: 'Data Analysis Grant', organization: 'LUANAR Research Fund', location: 'Lilongwe', type: 'Grant', deadline: '2024-06-01' },
  { id: 3, title: 'Agri-Tech Hackathon', organization: 'mHub Malawi', location: 'Lilongwe / Remote', type: 'Event', deadline: '2024-04-30' },
  { id: 4, title: 'Network Admin Attachment', organization: 'TNM', location: 'Mzuzu', type: 'Attachment', deadline: '2024-05-10' },
];

const OpportunitiesPage = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Opportunities & Internships</h1>
        <p className="page-description">Discover attachments, internships, and grants for students across Malawi.</p>
      </div>

      <div className="grid grid-cols-3">
        <div className="card">
          <div className="card-title">Open Internships</div>
          <div className="card-value">124</div>
        </div>
        <div className="card">
          <div className="card-title">Active Grants</div>
          <div className="card-value">15</div>
        </div>
        <div className="card">
          <div className="card-title">Students Placed</div>
          <div className="card-value">892</div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '24px' }}>
        <div className="card-title">Latest Listings</div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Organization</th>
                <th>Location</th>
                <th>Type</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              {opportunitiesData.map((opp) => (
                <tr key={opp.id}>
                  <td style={{ fontWeight: 500 }}>{opp.title}</td>
                  <td>{opp.organization}</td>
                  <td>{opp.location}</td>
                  <td>
                    <span className="badge badge-info">{opp.type}</span>
                  </td>
                  <td>{opp.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesPage;
