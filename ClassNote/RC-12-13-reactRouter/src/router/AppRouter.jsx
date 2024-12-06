import React from "react";
import Home from "../pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import Teacher from "../pages/Teacher";
import CourseCard from "../pages/CourseCard";
import ContactForm from "../pages/ContactForm";
import Paths from "../pages/Paths";
import TeacherDetails from "../pages/TeacherDetails";
import CardDetails from "../pages/CardDetails";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import NotFound from "../pages/NotFound";
import FS from "../pages/FS";
import AWS from "../pages/AWS";
const AppRouter = () => {
  return (
    <Router>
      {/* demirbaşlar yani her daim görünecek componentler Router ve Routes etiketinin içine yazılır */}
      <MyNavbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* "/" (ana yol) tüm yollara dahil edilmiştir, bu nedenle onu "/" ile
          başlayan diğer yollardan ayırt etmek için exact anahtar kelimesine
          sahip olması gerekir . */}
        <Route path="/login" element={<Login />} />

        {/* şifre kontrolü için privateRouter a gideceğiz */}

        <Route path="/teacher" element={<PrivateRouter />}>
          <Route path="" element={<Teacher />} />
        </Route>

        {/* <Route path="/teacher" element={<Teacher />} /> */}
        <Route path="/teacher/:id" element={<TeacherDetails />} />

        <Route path="/courses" element={<CourseCard />} />
        <Route path="/courses/:namee" element={<CardDetails />} />

        <Route path="/contact" element={<ContactForm />} />

        {/* <Route path="/paths" element={<Paths />} /> */}

        {/* nested route : paths sayfası açıkken (paths gitmeden) altına extra sayfa açılsın istiyorum, paths sayfasında 2 buton var, navigate ile biri fs biri aws yollarını yolluyor buraya, bende paths sarmal route un içine self-closing route larla ikisinin açacağı sayfaları ekliyorum (toggle benzeri bir durumu navigate ile yaptık) */}
        <Route path="/paths" element={<Paths />}>
          <Route path="/paths/fs" element={<FS />} />
          <Route path="aws" element={<AWS />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default AppRouter;
