import React from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {CustomNavLink, ThemeSwitcher} from "./js/components";

import Home from "./js/pages/Home";
import Projects from "./js/pages/Projects";
import Contacts from "./js/pages/Contacts";

function App() {
    const location = useLocation();

    return (
        <div className="main-container">
            <header>
                <ul className="page-header">
                    <CustomNavLink to="/" name="Кто я?" />
                    <CustomNavLink to="/projects" name="Проекты" />
                    <CustomNavLink to="/contacts" name="Контакты" />
                    <ThemeSwitcher />
                </ul>
            </header>

            <TransitionGroup component={null}>
                <CSSTransition key={location.key}
                               classNames="fade-animation"
                               timeout={200}>
                    <Routes location={location}>
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
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default App;

