const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100 text-center px-4">
            <div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Hi, I'm Cy 👋</h1>
                <p className="mt-4 text-xl text-gray-700">Web Designer & Frontend Developer — creating clean, user-friendly websites.</p>
                <a href="#projects" className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition">View My Work</a>
            </div>
        </section>

    );
}

export default Hero;