import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'JAN', users: 1200 },
  { name: 'FEB', users: 2100 },
  { name: 'MAR', users: 1800 },
  { name: 'APR', users: 4900 },
  { name: 'MAY', users: 3200 },
  { name: 'JUN', users: 2800 },
];

const activityData = [
  { id: 1, action: 'UNIMA Innovation Fund', date: '16 Jun 2026', time: '10:30 PM', status: 'Active', amount: '89,345 MWK' },
  { id: 2, action: 'MUST Hardware Grant', date: '15 Jun 2026', time: '11:45 PM', status: 'Active', amount: '12,345 MWK' },
  { id: 3, action: 'LUANAR Research', date: '14 Jun 2026', time: '10:15 PM', status: 'Pending', amount: '32,123 MWK' },
];

const DashboardHome = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Welcome Back, <span>Admin</span></h1>

        <div style={{ display: 'flex', gap: '16px' }}>
          <button style={{
            display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px',
            backgroundColor: 'var(--surface-color)', border: '1px solid var(--border-color)',
            borderRadius: '20px', fontSize: '14px', color: 'var(--text-secondary)', cursor: 'pointer'
          }}>
            29 Jun, 2026 - 29 August, 2026
          </button>

          <button style={{
            display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px',
            backgroundColor: 'var(--surface-color)', border: '1px solid var(--border-color)',
            borderRadius: '20px', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', cursor: 'pointer'
          }}>
            Add New Record
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 grid-cols-2 grid-cols-3">
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="card card-green" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="card-title">
              Active Fund
              (UP)
            </div>
            <div>
              <div style={{ fontSize: '14px', opacity: 0.9 }}>Science Grant</div>
              <div style={{ fontSize: '36px', fontWeight: 700 }}>$ 78,989.09</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', opacity: 0.8 }}>
              <span>**** 909090</span>
              <span>EXP 09/26</span>
            </div>
          </div>

          <div className="card">
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Weekly Engagement</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
              <div style={{ fontSize: '24px', fontWeight: 700 }}>+3,945 Users</div>
              <span className="badge badge-success">+12.8%</span>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="card" style={{ gridColumn: 'span 1' }}>
          <div className="card-title" style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>

              Platform Growth
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', padding: '4px 12px', backgroundColor: '#f1f5f9', borderRadius: '12px' }}>Monthly</span>
              <span style={{ fontSize: '12px', color: 'white', padding: '4px 12px', backgroundColor: 'var(--primary-color)', borderRadius: '12px' }}>Annually</span>
            </div>
          </div>

          <div style={{ height: '240px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} />
                <Tooltip cursor={{ fill: '#f8fafc' }} />
                <Bar dataKey="users" fill="var(--primary-light)" radius={[8, 8, 8, 8]} activeBar={{ fill: 'var(--primary-color)' }}>
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="card-title">
              Total Budget
              (UP)
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Total Balance</div>
              <div style={{ fontSize: '32px', fontWeight: 700 }}>$32,678.90</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '16px' }}>
              <button style={{ padding: '8px 24px', backgroundColor: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '20px', fontSize: '13px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                Allocated
              </button>
              <button style={{ padding: '8px 24px', backgroundColor: 'white', color: 'var(--text-primary)', border: '1px solid var(--border-color)', borderRadius: '20px', fontSize: '13px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                Remaining
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1" style={{ marginTop: '24px' }}>
        <div className="card">
          <div className="card-title" style={{ marginBottom: '16px' }}>
            Recent Activity
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}>
              •••
            </button>
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th style={{ color: 'var(--text-secondary)' }}>Name</th>
                  <th style={{ color: 'var(--text-secondary)' }}>Date</th>
                  <th style={{ color: 'var(--text-secondary)' }}>Time</th>
                  <th style={{ color: 'var(--text-secondary)' }}>Status</th>
                  <th style={{ color: 'var(--text-secondary)' }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                {activityData.map((activity) => (
                  <tr key={activity.id}>
                    <td style={{ fontWeight: 600 }}>{activity.action}</td>
                    <td style={{ color: 'var(--text-secondary)' }}>{activity.date}</td>
                    <td style={{ color: 'var(--text-secondary)' }}>{activity.time}</td>
                    <td>
                      <span style={{ color: activity.status === 'Active' ? 'var(--primary-color)' : '#d97706', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: activity.status === 'Active' ? 'var(--primary-color)' : '#d97706' }}></span>
                        {activity.status}
                      </span>
                    </td>
                    <td style={{ fontWeight: 500 }}>{activity.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
