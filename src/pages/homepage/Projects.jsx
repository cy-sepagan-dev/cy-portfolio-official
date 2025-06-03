function Projects() {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-semibold text-gray-800">Featured Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 px-6 max-w-5xl mx-auto">
                <div className="bg-gray-100 p-4 rounded-xl shadow">
                    <img src="/project1.jpg" alt="Project 1" className="rounded-lg mb-4" />
                    <h3 className="font-semibold text-lg">Humeda Landing Page</h3>
                    <p className="text-sm text-gray-600">Landing page for a skincare product with modern UI.</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-xl shadow">
                    <img src="/project2.jpg" alt="Project 2" className="rounded-lg mb-4" />
                    <h3 className="font-semibold text-lg">SSC Digital Agency Site</h3>
                    <p className="text-sm text-gray-600">Custom CMS blog and services page for a marketing agency.</p>
                </div>
            </div>
        </section>
    );
}

export default Projects;