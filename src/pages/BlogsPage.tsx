const blogsData = [
  { id: 1, title: 'The Future of AI in Malawian Schools', author: 'Dr. Kondwani', category: 'Technology', date: 'Oct 12, 2023', views: 1204 },
  { id: 2, title: 'Improving Internet Access in Rural Secondary Schools', author: 'Chimwemwe Phiri', category: 'Infrastructure', date: 'Nov 05, 2023', views: 843 },
  { id: 3, title: 'Student Innovations at UNIMA Science Fair', author: 'Mphatso Banda', category: 'Student Spotlight', date: 'Dec 01, 2023', views: 2310 },
  { id: 4, title: 'New Curriculum Guidelines for 2025', author: 'Ministry of Education', category: 'Policy', date: 'Jan 20, 2024', views: 5042 },
];

const BlogsPage = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Educational Blogs</h1>
        <p className="page-description">Read and manage articles, news, and insights from across the education sector.</p>
      </div>

      <div className="grid grid-cols-3">
        <div className="card">
          <div className="card-title">Total Published</div>
          <div className="card-value">342</div>
        </div>
        <div className="card">
          <div className="card-title">Total Readers</div>
          <div className="card-value">45K+</div>
        </div>
        <div className="card">
          <div className="card-title">Pending Review</div>
          <div className="card-value">8</div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '24px' }}>
        <div className="card-title">Recent Articles</div>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Article Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Views</th>
                <th>Published Date</th>
              </tr>
            </thead>
            <tbody>
              {blogsData.map((blog) => (
                <tr key={blog.id}>
                  <td style={{ fontWeight: 500 }}>{blog.title}</td>
                  <td>{blog.author}</td>
                  <td>
                    <span className="badge badge-success">{blog.category}</span>
                  </td>
                  <td>{blog.views.toLocaleString()}</td>
                  <td>{blog.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
