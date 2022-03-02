import Resume from "./Resume.pdf"
import pic from "./images/pic.jpg"
import IBM from "./images/ibm.png"
import Kyndryl from "./images/kyndryl.png";
import hackerRank from "./images/HackerRank.png"
import Codechef from "./images/codechef.png"
import linkedIn from "./images/linkedIn.png"
import git from "./images/git.png"

const user = {
    FirstName: "Vinayak",
    LastName: "Jaiswal",
    userImage: pic,
    resume: Resume,
    profiles: [
        {
            name: "linked",
            value: "https://www.linkedin.com/in/vinayak-jaiswal/",
            isCoding: false,
            stars: null,
            picture: linkedIn,

        },
        {
            name: "github",
            value: "https://github.com/hostem17-git",
            isCoding: false,
            stars: null,
            picture: git,
        },

        {
            name: "codechef",
            value: "https://www.codechef.com/users/hostem17",
            isCoding: true,
            stars: 3,
            picture: Codechef,
        },
        {
            name: "Hackerrank",
            value: "https://www.hackerrank.com/vinayakpbh1",
            isCoding: true,
            stars: 5,
            picture: hackerRank,
        }
    ],

    email: "vjjais17@gmail.com",

    // **********************************************
    aboutMe: {
        intro: ", a Full Stack Software Development Engineer from India.",
        description:
            "I enjoy taking up complex problems and use my expertise to make them simple. My major domains are Web Development (React) and Software Development (Python).",
        outro: "When I'm not developing any stuff , you will mostly find me cooking 😋",
    },
    // **********************************************

    experiences: [
        {
            organization: "Kyndryl",
            organizationPicture: Kyndryl,
            isCurrent: true,
            startDate: "Nov 2021",
            endDate: null,
            positions: [
                {
                    // Associate Developer
                    positionName: "Associate Developer",
                    startDate: "Nov 2021",
                    isCurrent: true,
                    endDate: null,
                    description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                }
            ]
        },
        {
            organization: "IBM India Pvt. Ltd",
            organizationPicture: IBM,
            isCurrent: false,
            startDate: "Sep 2020",
            endDate: "Nov 2021",
            positions: [
                {
                    // Associate Developer
                    positionName: "Associate Developer",
                    startDate: "Sep 2020",
                    isCurrent: false,
                    endDate: "Nov 2021",
                    description: "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
                }
            ]
        }
    ],
    education: [
        {
            instituteName: "VIT-Vellore",
            degree: "Bachelor's of Technology in Electronics and Communication",
            year: "2020",
            grade: "8.72"
        }, {
            instituteName: "Aatreya Academy",
            degree: "Intermediate",
            year: "2015",
            grade: "86.8%"
        }, {
            instituteName: "VIT-Vellore",
            degree: "Matriculation",
            year: "2013",
            grade: "10.0"
        },

    ],
    skills: [
        {
            name: "Language Proficiency",
            values: [
                "C++",
                "Python",
                "Java",
            ],
        },
        {
            name: "Web Development",
            values: [
                "React", "Redux", "Node.js", "Express.js", "Flask", "MonogDB",
                "Bootstrap", "HTML", "CSS", "Javascript", "MySQL"]
        },
        {
            name: "Miscellaneous ",
            values: ["Data Structures", "Algorithms", "Operating Systems", "Arduino"],
        },
    ],
    projects: [

        {
            name: "LinkedIn-Clone",
            techstack: ["React", "Redux", "firebase", "firestore", "Materil-UI"],
            description: "LinkedIn clone that allows users to login via mail and password.Once logged-in, users have option to see previous posts/ add their own posts",
            projectUrl: "https://linkedin-66877.web.app/",
        },
        {
            name: "Slack-Clone",
            techstack: ["React", "Redux", "React-Router", "firebase", "firestore", "Google Authentication", "Materil-UI"],
            description: "Slack Clone made using React.js. Users login using Google authentication and once logged-in, users have option to create new channels, post on existing channels",
            projectUrl: "https://slack-clone-562d1.web.app/",
        },

    ]
}






export default user;