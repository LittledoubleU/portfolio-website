import './project.css'
import projects from './projectJson.js'

export default function Project() {
    return (
        <section className="w-full h-auto flex flex-col justify-center items-center mt-40">
            <div className='w-5/6 project-container aspect-video'>
            {projects.map((element, index) => (
                <div
                    key={index}
                    className='thumbnail rounded-2xl overflow-hidden'
                >
                    <img src={element.thumbnail.img} alt={element.thumbnail.name} />
                    <h2>"{element.thumbnail.name}"</h2>
                    <h3>{element.thumbnail.description}</h3>
                </div>
            ))}
            </div>
        </section>
    )
}