import React from 'react'
import { Routes, Route } from "react-router";
import { AddCourse, Course, CourseList, Dashboard, Educator, Home, MyCourses, MyEnrollments, Player, StudentsEnrolled } from './pages/index.js';

const App = () => {
  return (
    <div>
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
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='my-courses' element={<MyCourses />} />
          <Route path='students-enrolled' element={<StudentsEnrolled />} />
          <Route path='add-course' element={<AddCourse />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App