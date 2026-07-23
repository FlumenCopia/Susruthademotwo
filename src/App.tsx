import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DoctorsPage from './pages/DoctorsPage';
import DoctorProfilePage from './pages/DoctorProfilePage';
import TreatmentsPage from './pages/TreatmentsPage';
import TreatmentDetailPage from './pages/TreatmentDetailPage';
import ConditionsPage from './pages/ConditionsPage';
import ConditionDetailPage from './pages/ConditionDetailPage';
import PackagesPage from './pages/PackagesPage';
import PackageDetailPage from './pages/PackageDetailPage';
import BranchesPage from './pages/BranchesPage';
import BranchDetailPage from './pages/BranchDetailPage';
import BookPage from './pages/BookPage';
import PackageEnquiryPage from './pages/PackageEnquiryPage';
import ContactPage from './pages/ContactPage';
import AyurVillagePage from './pages/AyurVillagePage';
import InternationalPage from './pages/InternationalPage';
import KnowledgePage from './pages/KnowledgePage';
import ArticlePage from './pages/ArticlePage';
import EcosystemPage from './pages/EcosystemPage';
import VerticalDetailPage from './pages/VerticalDetailPage';
import VideoGalleryPage from './pages/VideoGalleryPage';
import {
  AffiliationsPage,
  FacilitiesPage,
  FaqPage,
  MediaPage,
  NotFoundPage,
  TestimonialsPage,
} from './pages/MiscPages';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="doctors" element={<DoctorsPage />} />
          <Route path="doctors/:slug" element={<DoctorProfilePage />} />
          <Route path="treatments" element={<TreatmentsPage />} />
          <Route path="treatments/:slug" element={<TreatmentDetailPage />} />
          <Route path="conditions" element={<ConditionsPage />} />
          <Route path="conditions/:slug" element={<ConditionDetailPage />} />
          <Route path="packages" element={<PackagesPage />} />
          <Route path="packages/:slug" element={<PackageDetailPage />} />
          <Route path="package-enquiry" element={<PackageEnquiryPage />} />
          <Route path="branches" element={<BranchesPage />} />
          <Route path="branches/:slug" element={<BranchDetailPage />} />
          <Route path="ayur-village" element={<AyurVillagePage />} />
          <Route path="international-patients" element={<InternationalPage />} />
          <Route path="knowledge" element={<KnowledgePage />} />
          <Route path="knowledge/:slug" element={<ArticlePage />} />
          <Route path="ecosystem" element={<EcosystemPage />} />
          <Route path="ecosystem/:slug" element={<VerticalDetailPage />} />
          <Route path="videos" element={<VideoGalleryPage />} />
          <Route path="facilities" element={<FacilitiesPage />} />
          <Route path="media" element={<MediaPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="affiliations" element={<AffiliationsPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="book" element={<BookPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
