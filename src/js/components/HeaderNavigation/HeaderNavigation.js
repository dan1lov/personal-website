import React from "react";
import {NavLink} from "react-router-dom";
import {ThemeSwitcher} from "../../components";
import "./HeaderNavigation.css";

// -- help components
function HeaderLink({to, name}) {
    return (
        <li className="header__item">
            <NavLink
                to={to}
                children={name}
                className={({isActive}) => isActive ?
                    "header__link header__link_active" :
                    "header__link"
                }
            />
        </li>
    );
}

// -- main
function Component() {
    return (
        <header>
            <ul className="header">
                <HeaderLink to="/" name="Кто я?" />
                <HeaderLink to="/projects" name="Проекты" />
                <HeaderLink to="/contacts" name="Контакты" />
                <ThemeSwitcher />
            </ul>
        </header>
    );
}

export const HeaderNavigation = Component;
