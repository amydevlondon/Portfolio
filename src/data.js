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
        id: 1,
        name: "Cocktail Find App",
        languages: ["React JS", "HTML", "CSS"],
        description: "In this application, I used an external API (TheCocktailDB API) to fetch and display data about cocktails. This is a single-page app that uses React Router Dom v6 to create and navigate different Routes. The CocktailDB API offers several different URLs that lead to various end points. I created a custom hook in order to fetch data from different URLs in different areas of the application without having to repeat myself and re-write the same function for fetching data. The Search Cocktails page takes input from a user via a text input field and returns a list of cocktails that match the query inputted (if any). The Cocktails By Letter page of the application lists all cocktails that begin with a letter of the alphabet specified by a user’s selection.  I used the useState hook to update the letter used as a search parameter in the URL based on the user’s selection.",
        code: "https://github.com/amydevlondon/Cocktail-Find-App",
        demo: "https://cocktailfind.netlify.app/"
    },
    {
        id: 2,
        name: "Spring Boot API",
        languages: ["Java", "Maven", "Spring Boot", "MySQL", "Postman"],
        description: "This project is a Spring Boot API with full create, read, update, and delete functionality, connected to a MySQL database. I tested this API by making a series of HTTP requests using Postman, and used MySQL Workbench to ensure that the data sent to the API persisted on each request.",
        code: "https://github.com/amydevlondon/CRUD-Api",
    },
    {
        id: 3,
        name: "Users App",
        languages: ["React JS", "HTML", "CSS"],
        description: "",
        code: "https://github.com/amydevlondon/Users-App",
        demo: "https://newusers.netlify.app/"
    },
    {
        id: 5,
        name: "Wikipedia Search App",
        languages: ["JavaScript", "HTML", "CSS"],
        description: "",
        code: "https://github.com/amydevlondon/Wikipedia-Search-App/blob/main/index.js",
        demo: "https://wiki-find.netlify.app/"
    },
    {
        id: 5,
        name: "Shopping List App",
        languages: ["React JS", "HTML", "CSS"],
        description: "",
        code: "https://github.com/amydevlondon/Shopping-List-App",
        demo: "https://shoppingbuddy.netlify.app/"
    },
    {
        id: 6,
        name: "Bored App",
        languages: ["React JS", "HTML", "CSS"],
        description: "",
        code: "https://github.com/amydevlondon/Bored-App",
        demo: "https://boredrwe.netlify.app/"
    },
];
export const links = [
    {
        id: 1,
        link: "tel:+447752430672",
        icon: "fas fa-mobile-alt"
    },
    {
        id: 2,
        link: "mailto: amylopezdev@gmail.com",
        icon: "far fa-envelope"
    },
    {
        id: 3,
        link: "https://github.com/amydevlondon",
        icon: "fab fa-github"
    },
    {
        id: 4,
        link: "https://www.linkedin.com/in/amy-lopez-196bb0228/",
        icon: "fab fa-linkedin-in"
    }
];
