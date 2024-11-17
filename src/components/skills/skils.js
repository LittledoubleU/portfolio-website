const btns = [
    {
        Name: "Hard Skill",
        img: "", // Add an appropriate image URL here
        contents: [
            {
                header: "Frontend Development",
                content: [
                    { name: "HTML5", details: "HTML5 is the latest version of HTML with enhanced features like multimedia integration, new semantic tags, and improved accessibility.", img: "" },
                    { name: "CSS", details: "CSS is used to style web pages, making them visually appealing with flexibility and responsiveness.", img: "" },
                    { name: "Bootstrap5", details: "Bootstrap5 is a CSS framework for building responsive and modern web designs.", img: "" },
                    { name: "React", details: "React is a JavaScript library for building user interfaces, mainly for single-page applications.", img: "" },
                    { name: "jQuery", details: "jQuery is a JavaScript library that simplifies DOM manipulation, event handling, and AJAX requests.", img: "" }
                ],
                img: "" // Add an image URL for frontend
            },
            {
                header: "Programming Languages",
                content: [
                    { name: "Python", details: "Python is a high-level programming language known for its readability and versatility, widely used in web development, data science, and automation.", img: "" },
                    { name: "Java", details: "Java is a class-based, object-oriented programming language used in building large-scale enterprise applications.", img: "" },
                    { name: "JavaScript", details: "JavaScript is a dynamic programming language used for building interactive websites and web applications.", img: "" },
                    { name: "R language", details: "R is a programming language and software environment for statistical computing and graphics.", img: "" }
                ],
                img: "" // Add an image URL for programming languages
            },
            {
                header: "Development Tools",
                content: [
                    { name: "Visual Studio Code", details: "Visual Studio Code is a free, open-source code editor developed by Microsoft, known for its extensibility.", img: "" },
                    { name: "Postman", details: "Postman is an API client used for testing and interacting with APIs.", img: "" },
                    { name: "PyCharm", details: "PyCharm is an integrated development environment (IDE) used for Python development.", img: "" }
                ],
                img: "" // Add an image URL for development tools
            },
            {
                header: "Version Control",
                content: [
                    { name: "Git", details: "Git is a distributed version control system used to track changes in source code during software development.", img: "" },
                    { name: "GitHub", details: "GitHub is a cloud-based platform for hosting and versioning code using Git.", img: "" },
                    { name: "GitLab", details: "GitLab is a DevOps platform that provides a Git repository manager with CI/CD and monitoring features.", img: "" }
                ],
                img: "" // Add an image URL for version control
            },
            {
                header: "Databases",
                content: [
                    { name: "MySQL", details: "MySQL is an open-source relational database management system.", img: "" },
                    { name: "SQLite", details: "SQLite is a C-language library that implements a small, fast, self-contained SQL database engine.", img: "" },
                    { name: "PostgreSQL", details: "PostgreSQL is an open-source, object-relational database system known for its scalability and support for advanced features.", img: "" }
                ],
                img: "" // Add an image URL for databases
            },
            {
                header: "Microsoft Office Suite",
                content: [
                    { name: "Word", details: "Microsoft Word is a word processing software for creating, editing, and formatting documents.", img: "" },
                    { name: "Excel", details: "Microsoft Excel is a spreadsheet software used for data analysis and visualization.", img: "" },
                    { name: "PowerPoint", details: "Microsoft PowerPoint is a presentation software used to create slideshows composed of text, graphics, and multimedia.", img: "" }
                ],
                img: "" // Add an image URL for Office tools
            },
            {
                header: "Analytics & Visualization",
                content: [
                    { name: "Power BI", details: "Power BI is a Microsoft analytics tool used to visualize and share insights from data.", img: "" },
                    { name: "Looker Studio", details: "Looker Studio (formerly Google Data Studio) is a free tool to create customizable reports and dashboards.", img: "" },
                    { name: "SPSS", details: "SPSS is a software package used for statistical analysis and data management.", img: "" },
                    { name: "Minitab", details: "Minitab is a statistical software used for data analysis and visualization in quality improvement.", img: "" }
                ],
                img: "" // Add an image URL for analytics tools
            },
            {
                header: "Design Tools",
                content: [
                    { name: "Adobe Photoshop", details: "Adobe Photoshop is a graphics editing software used for creating and manipulating visual images.", img: "" },
                    { name: "Figma", details: "Figma is a browser-based design tool used for creating user interfaces and prototypes.", img: "" }
                ],
                img: "" // Add an image URL for design tools
            },
            {
                header: "Other Skills",
                content: [
                    { name: "SAS Viya", details: "SAS Viya is an analytics platform used for big data analysis and machine learning.", img: "" },
                    { name: "Flask", details: "Flask is a Python web framework used for building web applications and RESTful APIs.", img: "" },
                    { name: "Express.js", details: "Express.js is a fast, unopinionated web framework for Node.js used for building web applications.", img: "" },
                    { name: "Node.js", details: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine used for building scalable network applications.", img: "" },
                    { name: "npm", details: "npm is the default package manager for Node.js, used for managing dependencies in Node.js applications.", img: "" },
                    { name: "Selenium", details: "Selenium is a tool used for automating web browsers and performing browser testing.", img: "" },
                    { name: "Numpy", details: "Numpy is a Python library used for working with arrays and matrices, and performing numerical calculations.", img: "" },
                    { name: "Pandas", details: "Pandas is a Python library used for data manipulation and analysis, providing data structures like DataFrame.", img: "" }
                ],
                img: "" // Add an image URL for additional skills
            }
        ],
        position: ["65%", "17.5%"] // left, top
    },
    {
        Name: "Soft Skill",
        img: "", // Add an appropriate image URL here
        contents: [
            {
                header: "Communication",
                content: [
                    { name: "Effective communication", details: "Clear and concise communication with team members and clients.", img: "" },
                    { name: "Teamwork", details: "Collaborating with others to achieve common goals and deliver results.", img: "" }
                ],
                img: "" // Add an image URL for communication skills
            },
            {
                header: "Problem-Solving",
                content: [
                    { name: "Problem-solving", details: "Identifying issues and finding effective solutions quickly.", img: "" },
                    { name: "Analytical thinking", details: "Breaking down complex problems and evaluating data to make informed decisions.", img: "" }
                ],
                img: "" // Add an image URL for problem-solving
            },
            {
                header: "Time Management",
                content: [
                    { name: "Time management", details: "Efficiently managing tasks to meet deadlines.", img: "" },
                    { name: "Project coordination", details: "Coordinating tasks and resources to ensure successful project completion.", img: "" }
                ],
                img: "" // Add an image URL for time management
            },
            {
                header: "Adaptability",
                content: [
                    { name: "Adaptability", details: "Adjusting to new challenges and changes in the environment.", img: "" },
                    { name: "Self-directed learning", details: "Taking initiative to learn new skills independently.", img: "" }
                ],
                img: "" // Add an image URL for adaptability
            }
        ],
        position: ["20%", "45%"] // Example position
    },
    {
        Name: "Certification",
        img: "", // Add an appropriate image URL here
        contents: [
            {
                header: "OIC INSURTECH AWARD 2023",
                content: [
                    { name: "Qualified as 30 Finalist Teams", details: "This award recognizes innovation and technological contributions to the insurance industry.", img: "" }
                ],
                img: "" // Add an image URL for this certification
            },
            {
                header: "SAS x KMITL Hackathon AWARD 2023",
                content: [
                    { name: "Gold Medal", details: "Awarded for exceptional performance in data analytics and problem-solving in the hackathon.", img: "" }
                ],
                img: "" // Add an image URL for this certification
            },
            {
                header: "Financial Well-being Ranger",
                content: [
                    { name: "Finance Management", details: "Completion of a course on managing personal finances effectively.", img: "" }
                ],
                img: "" // Add an image URL for this certification
            }
        ],
        position: ["72.5%", "70%"] // Example position
    }
];


export default btns;