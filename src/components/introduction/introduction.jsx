import './introduction.css'

export default function Introduction() {
    return (
        <section className="w-full h-auto flex flex-col justify-center items-center mt-8" id="Introduction">
            <div className="container">
                <div className="relative introduction-container flex items-end">
                    <div className="absolute">
                        <h1>
                            Hi, I am <span className='text-[#e983d8]'>Sukhum Phonnopparat</span>
                        </h1>
                        <p className='mb-6 mt-2'>A third-year Applied Statistics and Data Analytics student at King Mongkut's Institute of Technology Ladkrabang, I am interested to intern as a Full-Stack Developer. With many experience in frontend like HTML, CSS, JavaScript, jQuery, and React, alongside basic knowledge in backend development with Express.js, Flask, and RESTful APIs, web-hosting, I learn web development through project-based. I study by myself through online communities and also have experiences in working in team environment. I am excited to participate internship.</p>
                        <button className='bg-[#e983d8] rounded-full py-2 px-6 mb-10 hover:opacity-70'>
                            Download CV
                        </button>
                    </div>
                </div>
                <div className='p-6 flex justify-center items-center'>
                    <div className='me-img relative flex justify-center items-center h-full'>
                        <img src="./src/assets/img/me.jpg" alt="me" />
                    </div>
                </div>
            </div>
        </section>
    )
}