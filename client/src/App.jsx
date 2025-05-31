import React from 'react'
import { Routes, Route, Navigate } from "react-router";
import { AddCourse, Course, CourseList, Educator, Error, Home, MyCourses, MyEnrollments, Player, StudentsEnrolled } from './pages/index.js';
import Navbar from './components/student/Navbar.jsx';
import FooterStudents from './components/student/FooterStudents.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx';

const App = () => {

  return (
    <div>
      <ScrollToTop />

      <Navbar />

      <Routes>

        {/* Students Routes */}

        <Route path='/' element={<Home />} />
        <Route path='/course-list/:input' element={<CourseList />} />
        <Route path='/course-list' element={<CourseList />} />
        <Route path='/course/:id' element={<Course />} />
        <Route path='/my-enrollments' element={<MyEnrollments />} />
        <Route path='/player/:courseId' element={<Player />} />

        {/* Educator Routes */}

        <Route path='/educator' element={<Educator />}>
          <Route index element={<Navigate to="my-courses" replace />} />
          <Route path='my-courses' element={<MyCourses />} />
          <Route path='students-enrolled' element={<StudentsEnrolled />} />
          <Route path='add-course' element={<AddCourse />} />
        </Route>

        <Route path='*' element={<Error />} />

      </Routes>

      <FooterStudents />

    </div>
  )
}

export default App