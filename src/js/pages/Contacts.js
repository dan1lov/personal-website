import React from "react";

function Contacts() {
    return (
        <main className="content">
            <section className="content__section">
                email: <a href="mailto: vladimir@danilov.pw"
                          target="_blank"
                          rel="noreferrer">vladimir@danilov.pw</a>
                <br />
                vk: <a href="https://vk.com/id807533"
                       target="_blank"
                       rel="noreferrer">vk.com/id807533</a>
                <br />
                telegram: <a href="https://t.me/ffwturtle"
                             target="_blank"
                             rel="noreferrer">t.me/ffwturtle</a>
                <br />
                github: <a href="https://github.com/dan1lov"
                           target="_blank"
                           rel="noreferrer">github.com/dan1lov</a>
            </section>
        </main>
    );
}

export default Contacts;
