const projects = [
    {
        name: "Puppy Cat E-commerce Website",
        description: "E-commerce, Database Management System, Flask, Bootstrap5",
        thumbnail: "./assets/project/Puppy/PuppyThumbnail.svg",
        content: {
            img: [
                "./assets/project/Puppy/puppy1.svg",
                "./assets/project/Puppy/puppy2.svg",
                "./assets/project/Puppy/puppy3.svg",
                "./assets/project/Puppy/puppy4.svg",
                "./assets/project/Puppy/puppy5.svg",
                "./assets/project/Puppy/puppy6.svg",
                "./assets/project/Puppy/puppy7.svg"
              ],
            link: "https://yourlink.com",
            tools: ["HTML", "CSS", "JavaScript"],
            detail: "This is an e-commerce website focused on selling healthy snacks and drinks products.",
            role: "Full Stack Developer",
            roleDetail: "I designed the database schema, developed the backend in Flask, and implemented the frontend using Bootstrap5.",
            collaborators: "",
            duration: "01/01/23 - 03/01/23",
            durationDetail: "This project was completed over three months during my free time while learning Flask."
        }
    },
    {
        name: "To do List Project Website",
        description: "Task management, React, Pure CSS",
        thumbnail: "./assets/project/TodoList/TodoListThumbnail.svg",
        content: {
            img: ["", "", ""], // for slider
            link: "https://yourlink.com",
            tools: ["React", "CSS", "JavaScript"],
            detail: "A task management website where users can add, remove, and mark tasks as completed.",
            role: "Frontend Developer",
            roleDetail: "Developed the user interface using React.js and styled components with pure CSS.",
            collaborators: "None (solo project)",
            duration: "02/01/23 - 02/15/23",
            durationDetail: "A quick two-week project to practice React.js fundamentals and component-based development."
        }
    },
    {
        name: "Squeeze-That-Circle Game Website",
        description: "Game, Pure JavaScript, Pure CSS",
        thumbnail: "./assets/project/SqueezeThatCircle/SqueezeThatCircleThumbnail.svg",
        content: {
            img: ["", "", ""], // for slider
            link: "https://yourlink.com",
            tools: ["HTML", "CSS", "JavaScript"],
            detail: "A fun game where users have to squeeze the circle as it gets smaller. Developed using JavaScript.",
            role: "Frontend Developer",
            roleDetail: "Implemented the game logic in JavaScript and ensured cross-browser compatibility.",
            collaborators: "",
            duration: "03/01/23 - 03/15/23",
            durationDetail: "Completed in two weeks as part of a personal challenge to build interactive web games."
        }
    },
    {
        name: "Frontend Project (Genshin Icon Animated)",
        description: "Animation, Genshin Impact",
        thumbnail: "path/to/your/image.jpg",
        content: {
            img: ["", "", ""], // for slider
            link: "https://yourlink.com",
            tools: ["HTML", "CSS", "JavaScript"],
            detail: "A frontend project where I animated the Genshin Impact icon to improve my animation skills.",
            role: "Frontend Developer",
            roleDetail: "Focused on creating smooth animations and ensuring visual appeal with CSS keyframes and JavaScript.",
            collaborators: "None (solo project)",
            duration: "04/01/23 - 04/15/23",
            durationDetail: "This was a one-month project aimed at improving animation techniques in web development."
        }
    },
    {
        name: "Weather App Website",
        description: "Weather, React, API",
        thumbnail: "path/to/your/image.jpg",
        content: {
            img: ["", "", ""], // for slider
            link: "https://yourlink.com",
            tools: ["React.js", "API", "CSS"],
            detail: "A weather app that forecasts the weather in real-time using React.js and RESTful API.",
            role: "Frontend Developer",
            roleDetail: "Developed the weather app UI using React and integrated an external weather API to fetch data.",
            collaborators: "None (solo project)",
            duration: "05/01/23 - 06/01/23",
            durationDetail: "A month-long project where I built a real-time weather forecasting app from scratch."
        }
    },
    {
        name: "Plastic Pollution Data Visualization Project Competition",
        description: "Data Visualization, Python, Competition",
        thumbnail: "path/to/your/image.jpg",
        content: {
            img: ["", "", ""], // for slider
            link: "https://yourlink.com",
            tools: ["Python", "Data Visualization", "Flask"],
            detail: "A project where we visualized plastic pollution data for a competition. I handled the data visualization using Python.",
            role: "Data Visualization Specialist",
            roleDetail: "Used Python libraries like Matplotlib and Seaborn to visualize large datasets for the competition.",
            collaborators: "Team project",
            duration: "07/01/23 - 08/01/23",
            durationDetail: "This was a two-month team project focused on using data science techniques to compete in a public competition."
        }
    },
    {
        name: "University Project (Database & Full-stack)",
        description: "Full-stack, Database, UX/UI, Flask",
        thumbnail: "path/to/your/image.jpg",
        content: {
            img: ["", "", ""], // for slider
            link: "https://yourlink.com",
            tools: ["Flask", "Bootstrap5", "UX/UI"],
            detail: "This project involves creating a full-stack web application with database schema design, front-end using Bootstrap5, and back-end using Flask.",
            role: "Full Stack Developer",
            roleDetail: "Designed and developed both the frontend and backend of the web app, ensuring database functionality with Flask.",
            collaborators: "Team of 4",
            duration: "09/01/23 - 12/01/23",
            durationDetail: "This was a 3-month university project where I worked in a team to deliver a complete web application."
        }
    },
    {
        name: "Project for Learning React.js",
        description: "Learning React.js",
        thumbnail: "path/to/your/image.jpg",
        content: {
            img: ["", "", ""], // for slider
            link: "https://yourlink.com",
            tools: ["React.js"],
            detail: "This project was focused on learning React.js through hands-on experience.",
            role: "Frontend Developer",
            roleDetail: "Worked on understanding React.js concepts, including state management, component rendering, and JSX syntax.",
            collaborators: "None (solo project)",
            duration: "10/01/23 - 10/15/23",
            durationDetail: "This was a short, 2-week project focused on learning React.js fundamentals."
        }
    },
    {
        name: "Pure JavaScript Skill Challenge & Deployment",
        description: "JavaScript, GitHub Pages",
        thumbnail: "path/to/your/image.jpg",
        content: {
            img: ["", "", ""], // for slider
            link: "https://yourlink.com",
            tools: ["JavaScript", "GitHub Pages"],
            detail: "This project was a challenge to test my pure JavaScript skills and to deploy the website using GitHub Pages.",
            role: "Frontend Developer",
            roleDetail: "Created the project entirely with JavaScript and deployed it using GitHub Pages for easy accessibility.",
            collaborators: "None (solo project)",
            duration: "11/01/23 - 11/10/23",
            durationDetail: "Completed over a 10-day period to test JavaScript skills and learn deployment processes."
        }
    },
    {
        name: "CSS Transition & Animation Focus Project",
        description: "CSS, Animation, Transition",
        thumbnail: "path/to/your/image.jpg",
        content: {
            img: ["", "", ""], // for slider
            link: "https://yourlink.com",
            tools: ["CSS", "HTML"],
            detail: "I focused on improving my CSS skills, particularly with transitions and animations.",
            role: "Frontend Developer",
            roleDetail: "Explored CSS transitions, animations, and keyframes to create engaging user experiences.",
            collaborators: "None (solo project)",
            duration: "12/01/23 - 12/15/23",
            durationDetail: "This was a 2-week project dedicated to mastering CSS animation and transitions for modern web design."
        }
    },
    {
        name: "Weather Forecasting App (React.js)",
        description: "Weather, React.js, API",
        thumbnail: "path/to/your/image.jpg",
        content: {
            img: ["", "", ""], // for slider
            link: "https://yourlink.com",
            tools: ["React.js", "RESTful API"],
            detail: "An app built in React.js to forecast the weather in real-time using a RESTful API.",
            role: "Frontend Developer",
            roleDetail: "Developed the frontend interface using React.js and integrated it with a weather API for real-time data.",
            collaborators: "None (solo project)",
            duration: "01/01/24 - 01/15/24",
            durationDetail: "A 2-week project where I focused on building a real-time weather forecasting app."
        }
    },
    {
        name: "Web Scraping Project (Selenium & BeautifulSoup)",
        description: "Web Scraping, Selenium, BeautifulSoup",
        thumbnail: "path/to/your/image.jpg",
        content: {
            img: ["", "", ""], // for slider
            link: "https://yourlink.com",
            tools: ["Python", "Selenium", "BeautifulSoup"],
            detail: "A web scraping project using Selenium and BeautifulSoup to collect data from a website.",
            role: "Backend Developer",
            roleDetail: "Built the scraping logic using Selenium for dynamic content and BeautifulSoup for data parsing.",
            collaborators: "",
            duration: "02/01/24 - 02/10/24",
            durationDetail: "Completed in 10 days to learn how to automate web scraping tasks."
        }
    }
];

export default projects;
