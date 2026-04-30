import { useState } from 'react';

const mediaItems = [
  {
    id: 1,
    title: 'Science Lab Sessions',
    category: 'Labs',
    date: 'April 2026',
    description: 'Students conducting hands-on chemistry and biology experiments at our partner schools.',
    image: '/sci_lab_students.png',
    tag: 'Secondary',
  },
  {
    id: 2,
    title: 'University Research Program',
    category: 'University',
    date: 'March 2026',
    description: 'University scholars collaborating on STEM research projects funded by S4A.',
    image: '/uni_students.png',
    tag: 'University',
  },
  {
    id: 3,
    title: 'STEM Olympiad 2026',
    category: 'Events',
    date: 'February 2026',
    description: 'Annual inter-school science competition bringing together 120+ institutions across Malawi.',
    image: '/sci_lab_students.png',
    tag: 'Secondary',
  },
  {
    id: 4,
    title: 'Digital Learning Initiative',
    category: 'Technology',
    date: 'January 2026',
    description: 'Rollout of tablet-based learning materials in rural secondary schools.',
    image: '/uni_students.png',
    tag: 'University',
  },
  {
    id: 5,
    title: 'Teacher Training Workshop',
    category: 'Training',
    date: 'December 2025',
    description: 'Professional development sessions equipping educators with modern science teaching methods.',
    image: '/sci_lab_students.png',
    tag: 'Secondary',
  },
  {
    id: 6,
    title: 'Innovation Expo Blantyre',
    category: 'Events',
    date: 'November 2025',
    description: 'Showcase of student-led innovations in renewable energy, agritech, and health tech.',
    image: '/uni_students.png',
    tag: 'University',
  },
];

const categories = ['All', 'Labs', 'University', 'Events', 'Technology', 'Training'];

const MediaPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<typeof mediaItems[0] | null>(null);

  const filtered = activeCategory === 'All'
    ? mediaItems
    : mediaItems.filter(m => m.category === activeCategory);

  return (
    <div>
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Media <span>Gallery</span></h1>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Photos and highlights from Science for All Foundation programmes
          </p>
        </div>
        <button style={{
          padding: '10px 20px', backgroundColor: 'var(--primary-color)', color: 'white',
          border: 'none', borderRadius: '20px', fontSize: '13px', fontWeight: 600, cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '8px'
        }}>
          + Upload Media
        </button>
      </div>

      {/* Category Filter */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '7px 18px',
              borderRadius: '30px',
              border: activeCategory === cat ? 'none' : '1px solid var(--border-color)',
              backgroundColor: activeCategory === cat ? 'var(--primary-color)' : 'var(--surface-color)',
              color: activeCategory === cat ? 'white' : 'var(--text-secondary)',
              fontSize: '13px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
      }}>
        {filtered.map(item => (
          <div
            key={item.id}
            className="card"
            style={{ padding: 0, overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
            onClick={() => setSelectedItem(item)}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px rgba(0,51,102,0.12)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLDivElement).style.boxShadow = '';
            }}
          >
            {/* Image */}
            <div style={{ position: 'relative', height: '200px', overflow: 'hidden', backgroundColor: '#e8f0fe' }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span style={{
                position: 'absolute', top: '12px', left: '12px',
                padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 700,
                backgroundColor: item.tag === 'University' ? 'var(--secondary-color)' : 'var(--accent-color)',
                color: item.tag === 'University' ? 'white' : 'var(--primary-color)',
                textTransform: 'uppercase', letterSpacing: '0.5px',
              }}>
                {item.tag}
              </span>
            </div>

            {/* Content */}
            <div style={{ padding: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{item.date} · {item.category}</div>
                </div>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '10px', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          style={{
            position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.75)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1000, padding: '24px',
          }}
          onClick={() => setSelectedItem(null)}
        >
          <div
            style={{
              backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden',
              maxWidth: '700px', width: '100%', boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
            }}
            onClick={e => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              style={{ width: '100%', height: '340px', objectFit: 'cover' }}
            />
            <div style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                  <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--primary-color)' }}>{selectedItem.title}</h2>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                    {selectedItem.date} · {selectedItem.category}
                  </div>
                </div>
                <span style={{
                  padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 700,
                  backgroundColor: selectedItem.tag === 'University' ? '#e0f2fe' : '#fef9c3',
                  color: selectedItem.tag === 'University' ? 'var(--secondary-color)' : '#854d0e',
                }}>
                  {selectedItem.tag}
                </span>
              </div>
              <p style={{ marginTop: '16px', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {selectedItem.description}
              </p>
              <button
                onClick={() => setSelectedItem(null)}
                style={{
                  marginTop: '20px', padding: '10px 24px', backgroundColor: 'var(--primary-color)',
                  color: 'white', border: 'none', borderRadius: '20px', fontSize: '14px',
                  fontWeight: 600, cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaPage;
