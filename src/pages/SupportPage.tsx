const ticketsData = [
  { id: 'TKT-001', subject: 'Cannot access student portal', user: 'Blessings M.', status: 'Open', priority: 'High', date: '2 hours ago' },
  { id: 'TKT-002', subject: 'Updating curriculum files', user: 'Mrs. Kachedwa', status: 'In Progress', priority: 'Medium', date: '5 hours ago' },
  { id: 'TKT-003', subject: 'Password reset request', user: 'Yamikani', status: 'Resolved', priority: 'Low', date: '1 day ago' },
  { id: 'TKT-004', subject: 'Error submitting assignment', user: 'Tione', status: 'Open', priority: 'High', date: '2 days ago' },
];

const SupportPage = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Help & Support</h1>
        <p className="page-description">Manage user tickets, feedback, and technical assistance.</p>
      </div>

      <div className="grid grid-cols-4">
        <div className="card">
          <div className="card-title">Open Tickets</div>
          <div className="card-value">24</div>
        </div>
        <div className="card">
          <div className="card-title">In Progress</div>
          <div className="card-value">12</div>
        </div>
        <div className="card">
          <div className="card-title">Resolved Today</div>
          <div className="card-value">85</div>
        </div>
        <div className="card">
          <div className="card-title">Avg Response Time</div>
          <div className="card-value">1.5h</div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '24px' }}>
        <div className="card-title">Recent Support Tickets</div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Subject</th>
                <th>User</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {ticketsData.map((ticket) => (
                <tr key={ticket.id}>
                  <td style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>{ticket.id}</td>
                  <td style={{ fontWeight: 500 }}>{ticket.subject}</td>
                  <td>{ticket.user}</td>
                  <td>
                    <span className={`badge ${ticket.status === 'Resolved' ? 'badge-success' : ticket.status === 'Open' ? 'badge-warning' : 'badge-info'}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td>
                    <span style={{ 
                      color: ticket.priority === 'High' ? '#dc2626' : ticket.priority === 'Medium' ? '#d97706' : '#059669',
                      fontWeight: 600 
                    }}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td>{ticket.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
