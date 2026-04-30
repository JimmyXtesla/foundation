import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import DashboardHome from './pages/DashboardHome';
import UsersPage from './pages/UsersPage';
import SchoolsPage from './pages/SchoolsPage';
import InnovationsPage from './pages/InnovationsPage';
import SupportPage from './pages/SupportPage';
import BlogsPage from './pages/BlogsPage';
import ChatbotPage from './pages/ChatbotPage';
import OpportunitiesPage from './pages/OpportunitiesPage';
import MediaPage from './pages/MediaPage';
import ContentPage from './pages/ContentPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="schools" element={<SchoolsPage />} />
          <Route path="innovations" element={<InnovationsPage />} />
          <Route path="opportunities" element={<OpportunitiesPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="chatbot" element={<ChatbotPage />} />
          <Route path="media" element={<MediaPage />} />
          <Route path="content" element={<ContentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
