import React, {useEffect, useState} from "react";
import {CSSTransition} from "react-transition-group";
import moon from "../../../svg/moon.svg";
import sun from "../../../svg/sun.svg";
import "./ThemeSwitcher.css";

const AnimImage = ({image, size, ...rest}) => {
    return (
        <CSSTransition
            children={<img src={image} width={size} alt="" />}
            classNames="rotate-animation"
            timeout={{enter: 300, exit: 200}}
            unmountOnExit
            {...rest}
        />
    );
}

function Component({className}) {
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
        <div className={["theme-switcher", className].filter(Boolean).join(" ")}
             onClick={switchTheme}>
            <AnimImage image={sun} in={theme === "dark"} size="24px" />
            <AnimImage image={moon} in={theme === "light"} size="24px" />
        </div>
    );
}

export const ThemeSwitcher = Component;
