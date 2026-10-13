import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatisticsSection } from './components/StatisticsSection';
import { CoursesSection } from './components/CoursesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { WhyStartumSection } from './components/WhyStartumSection';
import { RoadmapSection } from './components/RoadmapSection';
import { InstructorSection } from './components/InstructorSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { EnrollmentSection } from './components/EnrollmentSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CourseDetailModal } from './components/CourseDetailModal';
import { CommunityModal } from './components/CommunityModal';
import { BackToTop } from './components/BackToTop';
import { 
  Course, 
  COURSES_DATA, 
  SchoolConfig, 
  initialSchoolConfig, 
  Instructor, 
  INITIAL_INSTRUCTOR 
} from './data/schoolData';

function MainAppContent() {
  const [schoolConfig, setSchoolConfig] = useState<SchoolConfig>(() => {
    const saved = localStorage.getItem('startum_school_config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          ...initialSchoolConfig,
          ...parsed,
          phone: "+998 (91) 068 03 08",
          telegram: "@startum_256",
          telegramUrl: "https://t.me/startum256",
        };
      } catch {
        return initialSchoolConfig;
      }
    }
    return initialSchoolConfig;
  });

  const [instructor, setInstructor] = useState<Instructor>(() => {
    const saved = localStorage.getItem('startum_instructor_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_INSTRUCTOR;
      }
    }
    return INITIAL_INSTRUCTOR;
  });

  const [selectedCourseForModal, setSelectedCourseForModal] = useState<Course | null>(null);
  const [preselectedCourseForEnroll, setPreselectedCourseForEnroll] = useState<string>('foundation');
  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);

  const scrollToEnrollment = (courseId?: string) => {
    if (courseId) {
      setPreselectedCourseForEnroll(courseId);
    }
    const target = document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreCourses = () => {
    const target = document.getElementById('courses');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCourseById = (courseId: string) => {
    const found = COURSES_DATA.find((c) => c.id === courseId);
    if (found) {
      setSelectedCourseForModal(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0714] text-white flex flex-col font-sans selection:bg-[#8B2CFF]/40 selection:text-white">
      {/* Sleek Navigation Bar with Language Switcher and Projects link */}
      <Navbar
        onOpenEnroll={() => scrollToEnrollment()}
      />

      <main className="flex-1">
        {/* A. Hero Section */}
        <HeroSection
          onExploreCourses={handleExploreCourses}
          onJoinCommunity={() => setIsCommunityModalOpen(true)}
        />

        {/* B. Statistics Section */}
        <StatisticsSection
          config={schoolConfig}
        />

        {/* C. Courses Section */}
        <CoursesSection
          onSelectCourse={(course) => setSelectedCourseForModal(course)}
          onEnrollCourse={(courseId) => scrollToEnrollment(courseId)}
        />

        {/* D. Projects Section (New: Between Courses and About Us) */}
        <ProjectsSection />

        {/* E. About STARTUM */}
        <AboutSection />

        {/* F. Why STARTUM */}
        <WhyStartumSection />

        {/* G. Learning Roadmap */}
        <RoadmapSection />

        {/* H. Instructor Section */}
        <InstructorSection
          instructor={instructor}
        />

        {/* I. Testimonials Section */}
        <TestimonialsSection />

        {/* J. Contact and Enrollment Section */}
        <EnrollmentSection
          config={schoolConfig}
          preselectedCourse={preselectedCourseForEnroll}
        />

        {/* K. FAQ Section */}
        <FaqSection
          onContactClick={() => scrollToEnrollment()}
        />
      </main>

      {/* L. Footer */}
      <Footer
        config={schoolConfig}
        onSelectCourseById={handleSelectCourseById}
      />

      {/* Course Detail Modal */}
      <CourseDetailModal
        course={selectedCourseForModal}
        onClose={() => setSelectedCourseForModal(null)}
        onEnroll={(courseId) => scrollToEnrollment(courseId)}
      />

      {/* Community Modal */}
      <CommunityModal
        isOpen={isCommunityModalOpen}
        onClose={() => setIsCommunityModalOpen(false)}
        config={schoolConfig}
      />

      {/* Back to top floating button */}
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainAppContent />
    </LanguageProvider>
  );
}
