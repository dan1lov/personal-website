import React, {useEffect, useState} from "react";
import {CSSTransition} from "react-transition-group";
import moon from "../../svg/moon.svg";
import sun from "../../svg/sun.svg";

function Component() {
    const defDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState(defDark ? "dark" : "light");

    const switchTheme = () => {
        const next = theme === "light" ? "dark" : "light";
        setTheme(next);
    }

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    return (
        <li className="page-header__item theme-switcher" onClick={switchTheme}>
            <CSSTransition in={theme === "dark"}
                           classNames="rotate-animation"
                           timeout={200}>
                <img src={theme === "light" ? sun : moon} width="24px" alt="" />
            </CSSTransition>
        </li>
    );
}

export const ThemeSwitcher = Component;
