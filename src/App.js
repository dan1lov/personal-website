import React from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {PageHeaderLink, ThemeSwitcher} from "./js/components";

import Home from "./js/pages/Home";
import ProjectsList from "./js/pages/ProjectsList";
import ProjectShow from "./js/pages/ProjectShow";
import Contacts from "./js/pages/Contacts";

function App() {
    const location = useLocation();

    return (
        <div className="main-container">
            <header>
                <ul className="page-header">
                    <PageHeaderLink to="/" name="Кто я?" />
                    <PageHeaderLink to="/projects" name="Проекты" />
                    <PageHeaderLink to="/contacts" name="Контакты" />
                    <ThemeSwitcher />
                </ul>
            </header>

            <TransitionGroup component={null}>
                <CSSTransition key={location.key}
                               classNames="fade-animation"
                               timeout={200}>
                    <Routes location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects">
                            <Route index element={<ProjectsList />} />
                            <Route path=":id" element={<ProjectShow />} />
                        </Route>
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

