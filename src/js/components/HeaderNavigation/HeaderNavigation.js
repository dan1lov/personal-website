import React from "react";
import {NavLink} from "react-router-dom";
import {ThemeSwitcher} from "../../components";
import "./HeaderNavigation.css";

// -- help components
function HeaderLink({to, name}) {
    return (
        <NavLink
            to={to}
            children={name}
            className={({isActive}) => isActive ?
                "header__item header__item_active" :
                "header__item"
            }
        />
    );
}

// -- main
function Component() {
    return (
        <header className="header">
            <HeaderLink to="/" name="Кто я?" />
            <HeaderLink to="/projects" name="Проекты" />
            <HeaderLink to="/contacts" name="Контакты" />
            <ThemeSwitcher className="header__item" />
        </header>
    );
}

export const HeaderNavigation = Component;
