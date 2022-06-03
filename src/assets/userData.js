import Resume from "./Resume.pdf"
import pic from "./images/pic.jpg"
import IBM from "./images/ibm.png"
import Kyndryl from "./images/kyndryl.png";
import hackerRank from "./images/HackerRank.png"
import Codechef from "./images/codechef.png"
import linkedIn from "./images/project/linkedIn.png"
import git from "./images/git.png"
import slack from "./images/project/slack.png";
import gmail from "./images/project/gmail.png"
import bnb from "./images/project/bnb.png"
import ethereum from "./images/project/ethereum.png"



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
            maxStars: 5,
            picture: Codechef,
        },
        {
            name: "Hackerrank",
            value: "https://www.hackerrank.com/vinayakpbh1",
            isCoding: true,
            stars: 5,
            maxStars: 6,
            picture: hackerRank,
        }
    ],

    email: "vjjais17@gmail.com",
    phone: "+91-9454559034",

    // **********************************************
    aboutMe: {
        intro: ", a Full Stack Software Development Engineer from India.",
        description:
            "I enjoy taking up complex problems and use my expertise to make them simple. My major domains are Web Development (React) and Software Development (Python).",
        outro: "When I'm not developing any stuff , you will mostly find me cooking 👨‍🍳😋",
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
                    description: " ",
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
                    description: "",
                }
            ]
        }
    ],
    education: [
        {
            name: "VIT-Vellore",
            degree: "Bachelor's of Technology in Electronics and Communication",
            year: "2020",
            grade: "8.72"
        }, {
            name: "Aatreya Academy",
            degree: "Intermediate",
            year: "2015",
            grade: "86.8%"
        }, {
            name: "Aatreya Academy",
            degree: "Matriculation",
            year: "2013",
            grade: "10.0"
        },

    ],
    skills: [
        {
            name: "BlockChain | Smart Contracts",
            values: ["DeFi", "DAO", "Solidity", "Hardhat", "Chai", "Ethereum", "Binance Smart Chain", "IPFS", "ERC20", "ERC721", "ERC1155"]
        },
        {
            name: "Web Development",
            values: [
                "React", "Redux", "Node.js", "Express.js", "Flask", "MonogDB",
                "Bootstrap", "HTML", "CSS", "Javascript", "MySQL"]
        },
        {
            name: "Language Proficiency",
            values: [
                "C++",
                "Python",
                "Java",
            ],
        },
        {
            name: "Miscellaneous ",
            values: ["Data Structures", "Algorithms", "Operating Systems"],
        },
    ],
    projects: [
        {
            name: "BEP20 Vesting Contract",
            techstack: ["Solidity", "Hardhat", "Chai", "OpenZepplin", "Binance Smart Chain", "Pancake Swap"],
            description: "BEP20 vesting contract for Binance smart chain. Tokens bought from a listed Launchpad will automatically be frozen for pre-defined vesting period.Owner has the option to send free or frozen tokens.",
            img: bnb,
            projectUrl: "https://testnet.bscscan.com/address/0xDd6eA97A68361389f3EcC255b501Cb3d2fB2D388",
            git: "https://github.com/hostem17-git/vesting"

        },
        {
            name: "LinkedIn Clone",
            techstack: ["React", "Redux", "firebase", "firestore", "Material-UI"],
            description: "LinkedIn clone that allows users to login via mail and password.Once logged-in, users have option to see previous posts/ add their own posts",
            projectUrl: "https://linkedin-66877.web.app/",
            img: linkedIn,
            git: "https://github.com/hostem17-git/LinkedIN"
        },
        {
            name: "Slack Clone",
            techstack: ["React", "Redux", "React-Router", "firebase", "firestore", "Google Authentication", "Material-UI"],
            description: "Slack Clone made using React.js. Users login using Google authentication and once logged-in, users have option to create new channels, post on existing channels",
            projectUrl: "https://slack-clone-562d1.web.app/",
            img: slack,
            git: "https://github.com/hostem17-git/slack"
        },
        {
            name: "Gmail Clone",
            techstack: ["React", "Redux", "firebase", "firestore", "Material-UI"],
            description: "LinkedIn clone that allows users to login via mail and password.Once logged-in, users have option to see previous posts/ add their own posts",
            projectUrl: "https://fir-69a7c.firebaseapp.com/",
            img: gmail,
            git: "https://github.com/hostem17-git/gmail"
        }

    ]
}


export default user;