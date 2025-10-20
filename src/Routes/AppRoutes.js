import React from 'react'
import { Route, Routes, Navigate, Router } from 'react-router-dom'
import AddLayout from '../component/AddLayout'
import AddStudentModel from '../component/AddStudentModel'
import DashboradScreen from '../component/DashboradScreen'
import ScoreScreen from '../component/ScoreScreen'
import SettingScreen from '../component/SettingScreen'
import StudentScreen from '../component/StudentScreen'
import Demo1screen from '../component/demo1screen'
import Newscreen from '../component/newscreen'
import Profile from '../component/profile'
import From from '../component/From'
import Carousel from '../component/carousel'
import Carousel1 from '../component/carousel'

export default function AppRoutes() {
  return (
    <>
<Routes>
      <Route path="/" element={<AddLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboradScreen />} />
        <Route path="students" element={<StudentScreen />} />
        <Route path="courses" element={<ScoreScreen />} />
        <Route path="settings" element={<SettingScreen />} />
        <Route path="demo1screen" element={<Demo1screen />} />
        <Route path="newscreen" element={<Newscreen/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="from" element={<From/>}/>
        <Route path="Carousel" element={<Carousel1/>}/>
      </Route>
      {/* Catch all route - redirect to dashboard */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
</Routes>
</>
  )
}
