import React from 'react';
import { Component } from 'react';
import { Route, Routes } from "react-router-dom";
import ReadBlog from '../common/components/read.blog.page';
import Blog from '../pages/Blog/blog';
import ContactPage from '../pages/Contact/ContactPage';
import Home from '../pages/Home/home';
import MySkills from '../pages/MySkills/my.skills';
import Projects from '../pages/Projects/projects';

class AppRoutes extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/contact' element={<ContactPage />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/skills' element={<MySkills />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/blog/:id' element={ <ReadBlog />} />
                    {/* <Route path="/about" element={<AboutMe />} /> */}
                </Routes>
            </>
        );
    }
}

export default AppRoutes;