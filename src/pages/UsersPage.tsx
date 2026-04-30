const usersData = [
  { id: 1, name: 'Kondwani Phiri', role: 'Administrator', status: 'Active', joinDate: '2023-01-15' },
  { id: 2, name: 'Chisomo Banda', role: 'Teacher', status: 'Active', joinDate: '2023-03-22' },
  { id: 3, name: 'Yamikani Chiumia', role: 'Student', status: 'Inactive', joinDate: '2023-05-10' },
  { id: 4, name: 'Tadala Mvula', role: 'Researcher', status: 'Active', joinDate: '2023-06-01' },
];

const topUsers = [
  { id: 1, name: 'Blessings Munthali', role: 'Student', score: '98/100' },
  { id: 2, name: 'Dr. Thandiwe Gondwe', role: 'Teacher', score: '95/100' },
  { id: 3, name: 'Prof. Matthews Moyo', role: 'Researcher', score: '92/100' },
];

const UsersPage = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Users</h1>
        <p className="page-description">Manage and analyze user demographic data.</p>
      </div>

      <div className="grid grid-cols-3">
        <div className="card">
          <div className="card-title">New Users (This Week)</div>
          <div className="card-value">342</div>
        </div>
        <div className="card">
          <div className="card-title">Active Ratio</div>
          <div className="card-value">91%</div>
        </div>
        <div className="card">
          <div className="card-title">Avg Session Time</div>
          <div className="card-value">24m</div>
        </div>
      </div>

      <div className="grid grid-cols-2" style={{ marginTop: '24px' }}>
        <div className="card">
          <div className="card-title">User Roles Distribution</div>
          <div className="table-wrapper">
            <table>
              <tbody>
                <tr>
                  <td>Students</td>
                  <td style={{ textAlign: 'right' }}><strong>65%</strong></td>
                </tr>
                <tr>
                  <td>Teachers</td>
                  <td style={{ textAlign: 'right' }}><strong>20%</strong></td>
                </tr>
                <tr>
                  <td>Researchers</td>
                  <td style={{ textAlign: 'right' }}><strong>10%</strong></td>
                </tr>
                <tr>
                  <td style={{ borderBottom: 'none' }}>Administrators</td>
                  <td style={{ textAlign: 'right', borderBottom: 'none' }}><strong>5%</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card-title">Top Active Profiles</div>
          <div>
            {topUsers.map(user => (
              <div key={user.id} className="list-item">
                <div className="flex-row" style={{ gap: '12px' }}>
                  <div className="avatar">{user.name.charAt(0)}</div>
                  <div>
                    <div className="list-item-title">{user.name}</div>
                    <div className="list-item-subtitle">{user.role}</div>
                  </div>
                </div>
                <div style={{ fontWeight: 600, color: 'var(--primary-color)' }}>{user.score}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '24px' }}>
        <div className="card-title">Recent Registrations</div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
                <th>Join Date</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="flex-row" style={{ gap: '12px' }}>
                      <div className="avatar">{user.name.charAt(0)}</div>
                      <span style={{ fontWeight: 500 }}>{user.name}</span>
                    </div>
                  </td>
                  <td>{user.role}</td>
                  <td>
                    <span className={`badge ${user.status === 'Active' ? 'badge-success' : 'badge-warning'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>{user.joinDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
