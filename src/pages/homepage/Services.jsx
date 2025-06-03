function Services() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-semibold text-gray-800">What I Do</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
                <div className="p-6 bg-white shadow rounded-xl">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Web Design</h3>
                <p className="text-gray-600">User-focused layouts and visually pleasing interfaces using Figma, Adobe XD, and Tailwind.</p>
                </div>
                <div className="p-6 bg-white shadow rounded-xl">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Frontend Development</h3>
                <p className="text-gray-600">Interactive, responsive websites using React, HTML/CSS, and JavaScript.</p>
                </div>
                <div className="p-6 bg-white shadow rounded-xl">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Website Maintenance</h3>
                <p className="text-gray-600">Keeping websites updated, secure, and performing at their best.</p>
                </div>
            </div>
        </section>

    );
}

export default Services;