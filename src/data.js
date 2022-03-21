export const skills = [
    {
        id: 1,
        title: "Front-End",
        text: "JavaScript, React JS, HTML/CSS, jQuery, Bootstrap, Semantic UI, Tailwind CSS",
        icon: "fab fa-react"
    },
    {
        id: 2,
        title: "Back-End",
        text: "Java, Maven, Spring Boot, Python",
        icon: "fab fa-java"
    },
    {
        id: 3,
        title: "Database",
        text: "MySQL, Mongo DB",
        icon: "fas fa-database"
    },
    {
        id: 4,
        title: "Project Management",
        text: "DevOps, Agile, Scrum, Jira",
        icon: "fab fa-jira"
    },
    {
        id: 5,
        title: "Source Control",
        text: "Git/Github",
        icon: "fab fa-git-alt"
    },
];
export const projects = [
    {
        id: 6,
        name: "Cocktail Find App",
        languages: ["React JS", "HTML", "CSS"],
        description: "This website, made with React JS, uses an external API (TheCocktailDB) to display data about different cocktails. I created a custom hook to fetch data from the API which is used in different components of the application. This is a single page application that uses React Router Dom v6.",
        code: "https://github.com/amydevlondon/Cocktail-Find-App",
        demo: "https://cocktailfind.netlify.app/",
        image: './images/cocktail4.jpg'
    },
    {
        id: 7,
        name: "Spring Boot API",
        languages: ["Java", "Maven", "Spring Boot", "MySQL"],
        description: "A Spring Boot API with full create, read, update, and delete functionality, connected to a MySQL database. I tested this API by making a series of HTTP requests using Postman, and used MySQL Workbench to ensure that the data sent to the API persisted on each request.",
        code: "https://github.com/amydevlondon/CRUD-Api",
    },
    {
        id: 8,
        name: "Users App",
        languages: ["React JS", "HTML", "CSS"],
        description: "In this application I worked with an external API (randomuser.me) to display a list of random users. I used useState to dynamically change the parameters of the URL to reflect the options selected by the user of the application. The list of random users displayed can be specified based on gender, location, and number of users desired to be shown.",
        code: "https://github.com/amydevlondon/Users-App",
        demo: "https://newusers.netlify.app/",
        image: './images/users.jpg'
    },
    {
        id: 9,
        name: "Wikipedia Search App",
        languages: ["JavaScript", "HTML", "CSS"],
        description: "",
        code: "https://github.com/amydevlondon/Wikipedia-Search-App/blob/main/index.js",
        demo: "https://wiki-find.netlify.app/",
        image: './images/wiki.jpg'
    },
    {
        id: 10,
        name: "Shopping List App",
        languages: ["React JS", "HTML", "CSS"],
        description: "",
        code: "https://github.com/amydevlondon/Shopping-List-App",
        demo: "https://shoppingbuddy.netlify.app/",
        image: './images/shopping.jpg'
    },
    {
        id: 11,
        name: "Bored App",
        languages: ["React JS", "HTML", "CSS"],
        description: "",
        code: "https://github.com/amydevlondon/Bored-App",
        demo: "https://boredrwe.netlify.app/",
        image: './images/bored.jpg'
    },
];
export const links = [
    {
        id: 12,
        link: "tel:+447752430672",
        icon: "fas fa-mobile-alt"
    },
    {
        id: 13,
        link: "mailto: amylopezdev@gmail.com",
        icon: "far fa-envelope"
    },
    {
        id: 14,
        link: "https://github.com/amydevlondon",
        icon: "fab fa-github"
    },
    {
        id: 15,
        link: "https://www.linkedin.com/in/amy-lopez-196bb0228/",
        icon: "fab fa-linkedin-in"
    }
];
