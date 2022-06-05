import React from "react";
import {Routes, Route, NavLink} from "react-router-dom";

import Home from "./js/pages/Home";
import Projects from "./js/pages/Projects";
import Contacts from "./js/pages/Contacts";

function App() {
    return (
        <div className="main-container">
            <header>
                <ul className="page-header">
                    <li className="page-header__item">
                        <NavLink to="/">Кто я?</NavLink>
                    </li>
                    <li className="page-header__item">
                        <NavLink to="/projects">Проекты</NavLink>
                    </li>
                    <li className="page-header__item">
                        <NavLink to="/contacts">Контакты</NavLink>
                    </li>
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

