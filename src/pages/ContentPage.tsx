import { useState } from 'react';

type Tab = 'university' | 'secondary' | 'quizzes';
type QuizDifficulty = 'Easy' | 'Medium' | 'Hard';

interface ContentItem {
  id: number;
  title: string;
  subject: string;
  type: string;
  uploadedBy: string;
  date: string;
  downloads: number;
  size: string;
}

interface Quiz {
  id: number;
  title: string;
  subject: string;
  level: 'University' | 'Secondary';
  questions: number;
  difficulty: QuizDifficulty;
  attempts: number;
  created: string;
}

const universityContent: ContentItem[] = [
  { id: 1, title: 'Organic Chemistry - Module 3', subject: 'Chemistry', type: 'PDF', uploadedBy: 'Dr. Phiri', date: '28 Apr 2026', downloads: 342, size: '4.2 MB' },
  { id: 2, title: 'Calculus II Lecture Notes', subject: 'Mathematics', type: 'PDF', uploadedBy: 'Prof. Banda', date: '25 Apr 2026', downloads: 210, size: '2.8 MB' },
  { id: 3, title: 'Cell Biology Video Series', subject: 'Biology', type: 'Video', uploadedBy: 'Dr. Msiska', date: '20 Apr 2026', downloads: 589, size: '820 MB' },
  { id: 4, title: 'Physics Lab Manual 2026', subject: 'Physics', type: 'PDF', uploadedBy: 'Prof. Tembo', date: '15 Apr 2026', downloads: 178, size: '6.1 MB' },
];

const secondaryContent: ContentItem[] = [
  { id: 1, title: 'MSCE Biology Past Papers', subject: 'Biology', type: 'PDF', uploadedBy: 'Mr. Chirwa', date: '29 Apr 2026', downloads: 1240, size: '3.5 MB' },
  { id: 2, title: 'Form 4 Chemistry Notes', subject: 'Chemistry', type: 'PDF', uploadedBy: 'Ms. Kalulu', date: '27 Apr 2026', downloads: 867, size: '1.9 MB' },
  { id: 3, title: 'Mathematics Revision Pack', subject: 'Mathematics', type: 'ZIP', uploadedBy: 'Mr. Gondwe', date: '22 Apr 2026', downloads: 2100, size: '15.2 MB' },
  { id: 4, title: 'Introduction to Physics (Form 1)', subject: 'Physics', type: 'Video', uploadedBy: 'Ms. Nkosi', date: '18 Apr 2026', downloads: 432, size: '240 MB' },
];

const quizzes: Quiz[] = [
  { id: 1, title: 'Organic Chemistry Fundamentals', subject: 'Chemistry', level: 'University', questions: 25, difficulty: 'Hard', attempts: 1240, created: '28 Apr 2026' },
  { id: 2, title: 'MSCE Biology Review', subject: 'Biology', level: 'Secondary', questions: 40, difficulty: 'Medium', attempts: 3480, created: '26 Apr 2026' },
  { id: 3, title: 'Advanced Calculus Quiz', subject: 'Mathematics', level: 'University', questions: 20, difficulty: 'Hard', attempts: 560, created: '24 Apr 2026' },
  { id: 4, title: 'Form 3 Physics Concepts', subject: 'Physics', level: 'Secondary', questions: 30, difficulty: 'Easy', attempts: 2100, created: '20 Apr 2026' },
  { id: 5, title: 'Cell Biology & Genetics', subject: 'Biology', level: 'University', questions: 35, difficulty: 'Medium', attempts: 890, created: '17 Apr 2026' },
  { id: 6, title: 'Mathematics Basics (Form 1)', subject: 'Mathematics', level: 'Secondary', questions: 20, difficulty: 'Easy', attempts: 4200, created: '15 Apr 2026' },
];

const typeIcon: Record<string, string> = {
  PDF: '📄',
  Video: '🎬',
  ZIP: '🗂️',
};

const difficultyColor: Record<QuizDifficulty, string> = {
  Easy: '#16a34a',
  Medium: '#d97706',
  Hard: '#dc2626',
};

const difficultyBg: Record<QuizDifficulty, string> = {
  Easy: '#dcfce7',
  Medium: '#fef9c3',
  Hard: '#fee2e2',
};

const ContentPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>('university');
  const [showUpload, setShowUpload] = useState(false);
  const [showCreateQuiz, setShowCreateQuiz] = useState(false);

  const currentContent = activeTab === 'university' ? universityContent : secondaryContent;

  return (
    <div>
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Learning <span>Content</span></h1>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Upload, manage, and share educational resources and quizzes
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          {activeTab !== 'quizzes' && (
            <button
              onClick={() => setShowUpload(true)}
              style={{
                padding: '10px 20px', backgroundColor: 'var(--primary-color)', color: 'white',
                border: 'none', borderRadius: '20px', fontSize: '13px', fontWeight: 600, cursor: 'pointer',
              }}
            >
              + Upload Content
            </button>
          )}
          {activeTab === 'quizzes' && (
            <button
              onClick={() => setShowCreateQuiz(true)}
              style={{
                padding: '10px 20px', backgroundColor: 'var(--secondary-color)', color: 'white',
                border: 'none', borderRadius: '20px', fontSize: '13px', fontWeight: 600, cursor: 'pointer',
              }}
            >
              + Create Quiz
            </button>
          )}
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2" style={{ marginBottom: '24px' }}>
        {activeTab === 'university' && <>
          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>🎓</div>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>University Resources</div>
              <div style={{ fontSize: '24px', fontWeight: 700 }}>{universityContent.length} Files</div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>⬇️</div>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Total Downloads</div>
              <div style={{ fontSize: '24px', fontWeight: 700 }}>{universityContent.reduce((s, i) => s + i.downloads, 0).toLocaleString()}</div>
            </div>
          </div>
        </>}
        {activeTab === 'secondary' && <>
          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#fef9c3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>🏫</div>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Secondary Resources</div>
              <div style={{ fontSize: '24px', fontWeight: 700 }}>{secondaryContent.length} Files</div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>⬇️</div>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Total Downloads</div>
              <div style={{ fontSize: '24px', fontWeight: 700 }}>{secondaryContent.reduce((s, i) => s + i.downloads, 0).toLocaleString()}</div>
            </div>
          </div>
        </>}
        {activeTab === 'quizzes' && <>
          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#f3e8ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>❓</div>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Active Quizzes</div>
              <div style={{ fontSize: '24px', fontWeight: 700 }}>{quizzes.length}</div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>👥</div>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Total Attempts</div>
              <div style={{ fontSize: '24px', fontWeight: 700 }}>{quizzes.reduce((s, q) => s + q.attempts, 0).toLocaleString()}</div>
            </div>
          </div>
        </>}
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0', marginBottom: '24px', backgroundColor: 'var(--surface-color)', borderRadius: '12px', padding: '4px', border: '1px solid var(--border-color)', width: 'fit-content' }}>
        {(['university', 'secondary', 'quizzes'] as Tab[]).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '9px 22px',
              borderRadius: '10px',
              border: 'none',
              backgroundColor: activeTab === tab ? 'var(--primary-color)' : 'transparent',
              color: activeTab === tab ? 'white' : 'var(--text-secondary)',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              textTransform: 'capitalize',
              transition: 'all 0.2s',
            }}
          >
            {tab === 'university' ? ' University' : tab === 'secondary' ? ' Secondary School' : ' Quizzes'}
          </button>
        ))}
      </div>

      {/* Content Table */}
      {activeTab !== 'quizzes' && (
        <div className="card">
          <div className="card-title" style={{ marginBottom: '16px' }}>
            {activeTab === 'university' ? 'University Resources' : 'Secondary School Resources'}
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>File</th>
                  <th>Subject</th>
                  <th>Type</th>
                  <th>Uploaded By</th>
                  <th>Date</th>
                  <th>Downloads</th>
                  <th>Size</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentContent.map(item => (
                  <tr key={item.id}>
                    <td style={{ fontWeight: 600 }}>
                      {typeIcon[item.type]} {item.title}
                    </td>
                    <td>
                      <span className="badge badge-info">{item.subject}</span>
                    </td>
                    <td style={{ color: 'var(--text-secondary)' }}>{item.type}</td>
                    <td style={{ color: 'var(--text-secondary)' }}>{item.uploadedBy}</td>
                    <td style={{ color: 'var(--text-secondary)' }}>{item.date}</td>
                    <td style={{ fontWeight: 600 }}>{item.downloads.toLocaleString()}</td>
                    <td style={{ color: 'var(--text-secondary)' }}>{item.size}</td>
                    <td>
                      <button style={{
                        padding: '5px 14px', backgroundColor: 'var(--primary-color)',
                        color: 'white', border: 'none', borderRadius: '20px',
                        fontSize: '12px', fontWeight: 600, cursor: 'pointer',
                      }}>
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Quizzes Grid */}
      {activeTab === 'quizzes' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {quizzes.map(quiz => (
            <div key={quiz.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <span style={{
                  padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 700,
                  backgroundColor: quiz.level === 'University' ? '#e0f2fe' : '#fef9c3',
                  color: quiz.level === 'University' ? 'var(--secondary-color)' : '#854d0e',
                  textTransform: 'uppercase', letterSpacing: '0.5px',
                }}>
                  {quiz.level}
                </span>
                <span style={{
                  padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 700,
                  backgroundColor: difficultyBg[quiz.difficulty],
                  color: difficultyColor[quiz.difficulty],
                }}>
                  {quiz.difficulty}
                </span>
              </div>

              <div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)' }}>{quiz.title}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  {quiz.subject} · Created {quiz.created}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                <span> {quiz.questions} Questions</span>
                <span>{quiz.attempts.toLocaleString()} Attempts</span>
              </div>

              <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                <button style={{
                  flex: 1, padding: '8px', backgroundColor: 'var(--primary-color)', color: 'white',
                  border: 'none', borderRadius: '10px', fontSize: '13px', fontWeight: 600, cursor: 'pointer',
                }}>
                  Take Quiz
                </button>
                <button style={{
                  padding: '8px 16px', backgroundColor: 'var(--surface-color)', color: 'var(--text-secondary)',
                  border: '1px solid var(--border-color)', borderRadius: '10px', fontSize: '13px',
                  fontWeight: 600, cursor: 'pointer',
                }}>
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload Modal */}
      {showUpload && (
        <div
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '24px' }}
          onClick={() => setShowUpload(false)}
        >
          <div
            style={{ backgroundColor: 'white', borderRadius: '20px', padding: '32px', maxWidth: '520px', width: '100%', boxShadow: '0 32px 80px rgba(0,0,0,0.3)' }}
            onClick={e => e.stopPropagation()}
          >
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--primary-color)', marginBottom: '8px' }}>
              Upload {activeTab === 'university' ? 'University' : 'Secondary School'} Content
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Share educational resources with students and educators across Malawi.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>Title</label>
                <input type="text" placeholder="e.g. Organic Chemistry Module 4" style={{
                  width: '100%', padding: '10px 14px', border: '1px solid var(--border-color)',
                  borderRadius: '10px', fontSize: '14px', outline: 'none', color: 'var(--text-primary)',
                }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>Subject</label>
                  <select style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: '10px', fontSize: '14px', outline: 'none', color: 'var(--text-primary)', backgroundColor: 'white' }}>
                    <option>Chemistry</option>
                    <option>Biology</option>
                    <option>Physics</option>
                    <option>Mathematics</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>File Type</label>
                  <select style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: '10px', fontSize: '14px', outline: 'none', color: 'var(--text-primary)', backgroundColor: 'white' }}>
                    <option>PDF</option>
                    <option>Video</option>
                    <option>ZIP</option>
                    <option>Presentation</option>
                  </select>
                </div>
              </div>

              {/* Drop Zone */}
              <div style={{
                border: '2px dashed var(--border-color)', borderRadius: '12px', padding: '32px',
                textAlign: 'center', backgroundColor: '#f8fafc', cursor: 'pointer',
                transition: 'border-color 0.2s',
              }}
                onDragOver={e => { e.preventDefault(); (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--primary-color)'; }}
                onDragLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-color)'; }}
              >
                <div style={{ fontSize: '36px', marginBottom: '8px' }}></div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>Drop files here or click to browse</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>PDF, Video, ZIP — max 1 GB</div>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                <button
                  onClick={() => setShowUpload(false)}
                  style={{ flex: 1, padding: '12px', backgroundColor: 'var(--app-bg)', color: 'var(--text-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowUpload(false)}
                  style={{ flex: 2, padding: '12px', backgroundColor: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}
                >
                  Upload File
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Quiz Modal */}
      {showCreateQuiz && (
        <div
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '24px' }}
          onClick={() => setShowCreateQuiz(false)}
        >
          <div
            style={{ backgroundColor: 'white', borderRadius: '20px', padding: '32px', maxWidth: '520px', width: '100%', boxShadow: '0 32px 80px rgba(0,0,0,0.3)' }}
            onClick={e => e.stopPropagation()}
          >
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--primary-color)', marginBottom: '8px' }}>Create New Quiz</h2>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Build an interactive quiz for students at any level.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>Quiz Title</label>
                <input type="text" placeholder="e.g. MSCE Biology Review 2026" style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: '10px', fontSize: '14px', outline: 'none', color: 'var(--text-primary)' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>Level</label>
                  <select style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: '10px', fontSize: '14px', outline: 'none', color: 'var(--text-primary)', backgroundColor: 'white' }}>
                    <option>University</option>
                    <option>Secondary</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>Difficulty</label>
                  <select style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: '10px', fontSize: '14px', outline: 'none', color: 'var(--text-primary)', backgroundColor: 'white' }}>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>Subject</label>
                  <select style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: '10px', fontSize: '14px', outline: 'none', color: 'var(--text-primary)', backgroundColor: 'white' }}>
                    <option>Chemistry</option>
                    <option>Biology</option>
                    <option>Physics</option>
                    <option>Mathematics</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>No. of Questions</label>
                  <input type="number" placeholder="e.g. 20" min="5" max="100" style={{ width: '100%', padding: '10px 14px', border: '1px solid var(--border-color)', borderRadius: '10px', fontSize: '14px', outline: 'none', color: 'var(--text-primary)' }} />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                <button
                  onClick={() => setShowCreateQuiz(false)}
                  style={{ flex: 1, padding: '12px', backgroundColor: 'var(--app-bg)', color: 'var(--text-secondary)', border: '1px solid var(--border-color)', borderRadius: '12px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowCreateQuiz(false)}
                  style={{ flex: 2, padding: '12px', backgroundColor: 'var(--secondary-color)', color: 'white', border: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}
                >
                  Create Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentPage;
