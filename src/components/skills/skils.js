import { HardSkillIcon, SoftSkillIcon, Wrench, WindowSidebar, Terminal, Git, GithubIcon, Microsoft, Database, BarChart, Pen, CodeSlash, ThreeDot, Clock, PersonArmUp, Communication, LightBlub, Jquery, ReactIcon, Html, Css, Bootstrap, PythonIcon, JavaIcon, JavascriptIcon, VbaIcon, RIcon, PycharmIcon, PostmanIcon, VscodeIcon, Gitlab, Postgresql, MySQL, SQLlite, MicroWord, MicroExcel, MicroPowerPoint, SASViyaIcon, MinitabIcon, SPSSIcon, NumpyIcon, PandasIcon, LookerStudio, PowerBi, PhotoshopIcon, FigmaIcon, NodeJS, ExpressJSIcon, FlaskIcon, NpmIcon, SeleniumIcon, MicrosoftTeamsIcon, Teamwork, EfficientCommu, AnalyticIcon, TimeManage, ProjectCoordinate, AdaptIcon, SelfLearning } from "../icon/icon";

const btns = [
    {
        Name: "Hard Skill",
        img: HardSkillIcon, // Add an appropriate image URL here
        contents: [
            {
                header: "Frontend Development",
                content: [
                    { name: "HTML5", details: "HTML5 is the latest version of HTML with enhanced features like multimedia integration, new semantic tags, and improved accessibility.", img: Html },
                    { name: "CSS", details: "CSS is used to style web pages, making them visually appealing with flexibility and responsiveness.", img: Css },
                    { name: "Bootstrap5", details: "Bootstrap5 is a CSS framework for building responsive and modern web designs.", img: Bootstrap },
                    { name: "React", details: "React is a JavaScript library for building user interfaces, mainly for single-page applications.", img: ReactIcon },
                    { name: "jQuery", details: "jQuery is a JavaScript library that simplifies DOM manipulation, event handling, and AJAX requests.", img: Jquery }
                ],
                img: WindowSidebar // Add an image URL for frontend
            },
            {
                header: "Programming Languages",
                content: [
                    { name: "Python", details: "Python is a high-level programming language known for its readability and versatility, widely used in web development, data science, and automation.", img: PythonIcon },
                    { name: "Java", details: "Java is a class-based, object-oriented programming language used in building large-scale enterprise applications.", img: JavaIcon },
                    { name: "JavaScript", details: "JavaScript is a dynamic programming language used for building interactive websites and web applications.", img: JavascriptIcon },
                    { name: "R language", details: "R is a programming language and software environment for statistical computing and graphics.", img: RIcon },
                    {
                        name: "VBA",
                        details: "VBA (Visual Basic for Applications) is a programming language built into Microsoft Office applications, commonly used for automation and creating complex macros.",
                        img: VbaIcon
                    }
                ],
                img: CodeSlash // Add an image URL for programming languages
            },
            {
                header: "Development Tools",
                content: [
                    { name: "Visual Studio Code", details: "Visual Studio Code is a free, open-source code editor developed by Microsoft, known for its extensibility.", img: VscodeIcon },
                    { name: "Postman", details: "Postman is an API client used for testing and interacting with APIs.", img: PostmanIcon },
                    { name: "PyCharm", details: "PyCharm is an integrated development environment (IDE) used for Python development.", img: PycharmIcon }
                ],
                img: Wrench // Add an image URL for development tools
            },
            {
                header: "Version Control",
                content: [
                    { name: "Git", details: "Git is a distributed version control system used to track changes in source code during software development.", img: Git },
                    { name: "GitHub", details: "GitHub is a cloud-based platform for hosting and versioning code using Git.", img: GithubIcon },
                    { name: "GitLab", details: "GitLab is a DevOps platform that provides a Git repository manager with CI/CD and monitoring features.", img: Gitlab }
                ],
                img: Git // Add an image URL for version control
            },
            {
                header: "Databases",
                content: [
                    { name: "MySQL", details: "MySQL is an open-source relational database management system.", img: MySQL },
                    { name: "SQLite", details: "SQLite is a C-language library that implements a small, fast, self-contained SQL database engine.", img: SQLlite },
                    { name: "PostgreSQL", details: "PostgreSQL is an open-source, object-relational database system known for its scalability and support for advanced features.", img: Postgresql }
                ],
                img: Database // Add an image URL for databases
            },
            {
                header: "Microsoft Office Suite",
                content: [
                    { name: "Word", details: "Microsoft Word is a word processing software for creating, editing, and formatting documents.", img: MicroWord },
                    { name: "Excel", details: "Microsoft Excel is a spreadsheet software used for data analysis and visualization.", img: MicroExcel },
                    { name: "PowerPoint", details: "Microsoft PowerPoint is a presentation software used to create slideshows composed of text, graphics, and multimedia.", img: MicroPowerPoint }
                ],
                img: Microsoft // Add an image URL for Office tools
            },
            {
                header: "Analytics & Visualization",
                content: [
                    { name: "Power BI", details: "Power BI is a Microsoft analytics tool used to visualize and share insights from data.", img: PowerBi },
                    { name: "Looker Studio", details: "Looker Studio (formerly Google Data Studio) is a free tool to create customizable reports and dashboards.", img: LookerStudio },
                    { name: "SPSS", details: "SPSS is a software package used for statistical analysis and data management.", img: SPSSIcon },
                    { name: "Minitab", details: "Minitab is a statistical software used for data analysis and visualization in quality improvement.", img: MinitabIcon },
                    { name: "SAS Viya", details: "SAS Viya is an analytics platform used for big data analysis and machine learning.", img: SASViyaIcon },
                    { name: "Numpy", details: "Numpy is a Python library used for working with arrays and matrices, and performing numerical calculations.", img: NumpyIcon },
                    { name: "Pandas", details: "Pandas is a Python library used for data manipulation and analysis, providing data structures like DataFrame.", img: PandasIcon }
                ],
                img: BarChart // Add an image URL for analytics tools
            },
            {
                header: "Design Tools",
                content: [
                    { name: "Adobe Photoshop", details: "Adobe Photoshop is a graphics editing software used for creating and manipulating visual images.", img: PhotoshopIcon },
                    { name: "Figma", details: "Figma is a browser-based design tool used for creating user interfaces and prototypes.", img: FigmaIcon }
                ],
                img: Pen // Add an image URL for design tools
            },
            {
                header: "Backend Development",
                content: [
                    { name: "Flask", details: "Flask is a Python web framework used for building web applications and RESTful APIs.", img: FlaskIcon },
                    { name: "Express.js", details: "Express.js is a fast, unopinionated web framework for Node.js used for building web applications.", img: ExpressJSIcon },
                    { name: "Node.js", details: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine used for building scalable network applications.", img: NodeJS },
                    { name: "npm", details: "npm is the default package manager for Node.js, used for managing dependencies in Node.js applications.", img: NpmIcon }
                ],
                img: Terminal // Add an image URL for additional skills
            },
            {
                header: "Other Skills",
                content: [
                    { name: "Selenium", details: "Selenium is a tool used for automating web browsers and performing browser testing.", img: SeleniumIcon },
                    {
                        name: "Teams",
                        details: "Microsoft Teams is a collaboration platform for chat, meetings, file sharing, and app integration, widely used for team communication and remote work.",
                        img: MicrosoftTeamsIcon
                    }
                ],
                img: ThreeDot // Add an image URL for additional skills
            }
        ],
        position: ["72.5%", "45%"] // left, top
    },
    {
        Name: "Soft Skill",
        img: SoftSkillIcon, // Add an appropriate image URL here
        contents: [
            {
                header: "Communication",
                content: [
                    { name: "Effective communication", details: "Clear and concise communication with team members and clients.", img: EfficientCommu },
                    { name: "Teamwork", details: "Collaborating with others to achieve common goals and deliver results.", img: Teamwork }
                ],
                img: Communication // Add an image URL for communication skills
            },
            {
                header: "Problem-Solving",
                content: [
                    { name: "Problem-solving", details: "Identifying issues and finding effective solutions quickly.", img: LightBlub },
                    { name: "Analytical thinking", details: "Breaking down complex problems and evaluating data to make informed decisions.", img: AnalyticIcon }
                ],
                img: LightBlub // Add an image URL for problem-solving
            },
            {
                header: "Time Management",
                content: [
                    { name: "Time management", details: "Efficiently managing tasks to meet deadlines.", img: TimeManage },
                    { name: "Project coordination", details: "Coordinating tasks and resources to ensure successful project completion.", img: ProjectCoordinate }
                ],
                img: Clock // Add an image URL for time management
            },
            {
                header: "Adaptability",
                content: [
                    { name: "Adaptability", details: "Adjusting to new challenges and changes in the environment.", img: AdaptIcon },
                    { name: "Self-directed learning", details: "Taking initiative to learn new skills independently.", img: SelfLearning }
                ],
                img: PersonArmUp // Add an image URL for adaptability
            }
        ],
        position: ["20%", "45%"] // Example position
    }
];


export default btns;