import React from "react";
import {useParams} from "react-router-dom";

function ProjectShow() {
    const {id = null} = useParams();

    return (
        <main className="page-content">
            <section className="page-content__section">
                {`Right now I'm writing a story for a project with id${id}`}
            </section>
        </main>
    );
}

export default ProjectShow;
