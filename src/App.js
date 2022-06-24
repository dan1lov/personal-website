import React from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {PageHeaderLink, ThemeSwitcher} from "./js/components";

import Contacts from "./js/pages/Contacts";
import Home from "./js/pages/Home";
import NotFound from "./js/pages/NotFound";
import ProjectShow from "./js/pages/ProjectShow";
import ProjectsList from "./js/pages/ProjectsList";

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
                        <Route path="*" element={<NotFound />} />

                        <Route path="/projects">
                            <Route index element={<ProjectsList />} />
                            <Route path=":id" element={<ProjectShow />} />
                        </Route>

                        <Route path="/contacts" element={<Contacts />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default App;

