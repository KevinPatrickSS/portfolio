export const myProjects = [
  {
    id: 1,
    title: "Vivid-World",
    description:
      "A web platform focused on improving visual accessibility for colorblind individuals through intelligent image processing and real-time analysis.",
    subDescription: [
      "Built using Django with real-time object classification to identify and highlight important elements in images and video streams.",
      "Implemented Daltonization-based color correction to enhance color perception for different types of color vision deficiency.",
      "Integrated 3D visual enhancement techniques to improve depth understanding and object clarityDesigned a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Designed for both live camera input and uploaded images/videos to ensure broad usability.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/vivid-world.jpeg",
    tags: [
      {
        id: 1,
        name: "python",
        path: "/assets/logos/Python.png",
      },
      {
        id: 2,
        name: "django",
        path: "/assets/logos/django.png",
      },
      {
        id: 3,
        name: "open-cv",
        path: "/assets/logos/open-cv.png",
      },
      {
        id: 4,
        name: "React",
        path: "/assets/logos/react.svg",
      },
    ],
  },
  {
    id: 2,
    title: "MCP Architecture for SQL with Goose",
    description:
      "A modular, scalable backend architecture designed to intelligently interact with a MySQL database and generate data-driven recommendations.",
    subDescription: [
      "Developed a custom MCP (Model-Context-Protocol) architecture for structured and secure database interactions",
      "Implemented tool-based SQL query execution for reading, analyzing, and recommending data from MySQL",
      "Designed the system to support Goose integration for natural language querying and reasoning over structured data",
      "Connected to a secure RDS in AWS",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/gooseMCP.png",
    tags: [
      {
        id: 1,
        name: "AWS",
        path: "/assets/logos/aws.svg",
      },
      {
        id: 2,
        name: "Flask",
        path: "/assets/logos/flask.svg",
      },
      {
        id: 3,
        name: "SQL",
        path: "/assets/logos/sql.svg",
      },
      {
        id: 4,
        name: "Goose",
        path: "/assets/logos/goose.jpeg",
      },
    ],
  },
  {
    id: 3,
    title: "Turning Traffic into Power",
    description:
      "An IoT-based sustainable energy solution that converts mechanical stress from road traffic into usable electrical power.",
    subDescription: [
      "Designed a piezoelectric energy harvesting system to generate electricity from vehicle-induced pressure.",
      "Implemented using Arduino with real-time sensor data acquisition and power management logic",
      "Analyzed and vizualized energy output efficiency under varying traffic conditions",
      "Aimed at promoting renewable micro-energy generation for smart city infrastructure.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/blazor-app.jpg",
    tags: [
      {
        id: 1,
        name: "C",
        path: "/assets/logos/c.svg",
      },
      {
        id: 2,
        name: "arduino",
        path: "/assets/logos/arduino.svg",
      },
      {
        id: 3,
        name: "Power BI",
        path: "/assets/logos/powerBI.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Cogni Chat",
    description:
      "An AI-powered learning assistant designed to help students and professionals quickly understand large volumes of study material.",
    subDescription: [
      "Developed an LLM-based system to summarize and extract key insights from multiple PDF documents.",
      "Integrated NLP techniques for contextual understanding and structured summarization.",
      "Enabled efficient study workflows by reducing reading time while preserving essential concepts.",
      "Designed with scalability in mind to support academic and technical learning use cases.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/cognichat.jpeg",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/Python.png",
      },
      {
        id: 2,
        name: "Hugging Face",
        path: "/assets/logos/hugging_face.svg",
      },
      {
        id: 3,
        name: "Streamlit",
        path: "/assets/logos/streamlit.svg",
      },
    ],
  },
  {
    id: 5,
    title: "EduRoot",
    description:
      "A web application that allows secondary school students to learn understand the courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using standard HTML CSS and javaScript for ease of use.",
      "Implemented a News Section so that students can know about the day to day updates to learn about the surroundings.",
      "Added a quiz system with dynamic question generation and real-time grading.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/EduRoot.png",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 2,
        name: "css",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/kevin-patrick-s-s-/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kevinpatrick460/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "AI Model Development",
    job: "AI Research Intern",
    company: "Telkom University, Indonessia",
    date: "May 2024 - June 2024",
    contents: [
      "Researched on the best models to work with the analog signals collected from the robots.",
      "Framed a model and tested with the real time analog data.",
      "Documented the framed algorithm and published the paper in Telkom University, Indonessia."
    ],
  },
  {
    title: "SDE",
    job: "AI and AWS intern",
    date: "July 2025-Present",
    company: "Dsignz Media, Coimbatore",
    contents: [
      "Researched on the AI model integration to the existing KOALA architecture.",
      "Implemented Effectve Model for the existing architecture so that the user may able to check on the future price of the resorts.",
      "Created a CI/CD pipeline for continuous model training and maintanence using amazon sagemaker in AWS."    
    ],
  },
  {
    title: "Bussiness Executive",
    job: "Market Analyst and Strategy Implementation",
    company: "Salar Space",
    date: "April 2024- June 2024",
    contents: [
      "Provided the strategy on improving the startup and pushing the company to publish the POC to the coimbatore corporate.",
      "Worked on marketing the company through the active social media platforms."
    ],
  },
];