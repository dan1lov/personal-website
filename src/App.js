import React from "react";
import {Routes, Route} from "react-router-dom";
import {CustomNavLink} from "./js/components";

import Home from "./js/pages/Home";
import Projects from "./js/pages/Projects";
import Contacts from "./js/pages/Contacts";

function App() {
    return (
        <div className="main-container">
            <header>
                <ul className="page-header">
                    <CustomNavLink to="/" name="Кто я?" />
                    <CustomNavLink to="/projects" name="Проекты" />
                    <CustomNavLink to="/contacts" name="Контакты" />
                </ul>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contacts" element={<Contacts />} />

                <Route path="*" element={
                    <main className="page-content">
                        <section className="page-content__section">
                            not found
                        </section>
                    </main>
                } />
            </Routes>
        </div>
    );
}

export default App;

