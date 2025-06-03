import { Link } from "react-router-dom";

const projects = [
    {id: 1, title: "Project One", description: "react app for task"},
    {id: 1, title: "Project Two", description: "react app for task"},
];

function Projects() {
    return (
        <div className="p-8">
            <h2 className="text-3x1 font-semibold mb-4">Projects</h2>
            <div className="grid gap-4">
                {projects.map((proj) => (
                    <Link 
                        key={proj.id}
                        to={`/projects/${proj.id}`}
                        className="block p-4 border rounderd hover:bg-gray-50"
                    >
                        <h3 className="text-x1 font-medium">{proj.title}</h3>
                        <p className="text-gray-600">{proj.description}</p>
                    </Link>

                ))}
            </div>
        </div>
    );
}

export default Projects;