import { useParams } from "react-router-dom";

const projectData = {
    1: {title: "Project One", content: "Detailed explanation of Project One."},
    2: {title: "Project Two", content: "Detailed explanation of Project Two."}
}


function ProjectShow() {

    const {id} = useParams();
    const project = projectData[id];

    if (!project) return <div>Project not Found</div>


    return (
        <div>
            <h2>{project.title}</h2>
            <p>{project.content}</p>
        </div>
    );
}

export default ProjectShow;