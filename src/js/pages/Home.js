import React from "react";
const yo = new Date().getFullYear() - 2001;

function Home() {
    return (
        <main className="page-content">
            <section className="page-content__section">
                {`Vladimir Danilov, ${yo} yo`}
                <br />
                Backend- & frontend-разработчик
            </section>

            <section className="page-content__section">
                Начал увлекаться программированием в 2015 году, и это быстро
                стало моим основным хобби, которому я уделял практически все
                свободное время
            </section>

            <section className="page-content__section">
                К настоящему времени имею достаточно большой багаж знаний
                в сфере серверной разработки (php, mysql), а также постепенно
                развиваюсь в клиентской части (js, react, etc.)
            </section>
        </main>
    );
}

export default Home;
