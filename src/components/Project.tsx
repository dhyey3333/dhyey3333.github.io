import React from "react";
import nightshift from '../assets/images/nightshift.jpg';
import privagent from '../assets/images/privagent.jpg';
import threat from '../assets/images/threat.jpg';
import fraud from '../assets/images/fraud.jpg';
import bike from '../assets/images/bike.jpg';
import '../assets/styles/Project.scss';

type ProjectItem = { title: string; image: string; link?: string; alt: string; text: string; tags: string };

// Every number here is a measured result from the project's own benchmark.
const projects: ProjectItem[] = [
    {
        title: "Nightshift QA: AI Regression Testing Platform",
        image: nightshift,
        link: "https://nightshift-qa.github.io",
        alt: "Nightshift QA showing a test run with a visual bug caught",
        text: "An AI tester that runs plain-English test cases in a real browser. A judge model must quote proof from the page for every result, which gave 0 false passes in ~400 benchmark runs. It caught 23/23 planted bugs and judged 28/28 public practice sites correctly. Live multi-tenant web app with nightly runs and client reports.",
        tags: "Python · Playwright · Vision-language models · SQLite",
    },
    {
        title: "PrivAgent: On-Device Privacy for AI Browser Agents",
        image: privagent,
        link: "https://github.com/dhyey3333/On-device-browser-agent-for-information-security",
        alt: "PrivAgent's panel listing personal data it redacted on-device",
        text: "Built for a Smart India Hackathon problem statement from ISRO. A Chrome/Firefox extension that blacks out passwords, Aadhaar/PAN, cards, emails and faces on your device before an AI agent sees the page: precision 1.00 / recall 0.98, and 0.96 / 0.94 on blind test pages.",
        tags: "TypeScript · ONNX Runtime Web · YOLO · FastAPI",
    },
    {
        title: "Threat Detection System using AI/ML",
        image: threat,
        link: "https://github.com/Argonyx-26/T1-TechPoint",
        alt: "Threat detection dashboard with a live feed, a restricted zone and an alert",
        text: "Built with my team at the Argonyx hackathon. Real-time multi-camera CCTV system with ranked alerts for weapons, fights, falls and intrusions. Weapon detector at precision 0.86 / mAP50 0.83, fight classifier at AUC 0.86; benchmarked on 56 real surveillance clips; 4 cameras at ~8 fps on an RTX 3050.",
        tags: "Python · YOLOv8 · CLIP · OpenCV · FastAPI",
    },
    {
        title: "Credit Card Fraud Detection",
        image: fraud,
        link: "https://github.com/dhyey3333/credit-card-fraud-detection",
        alt: "The fraud detection dashboard: fraud count, rate and distribution for an uploaded set of transactions",
        text: "Logistic regression and a neural network on 284,807 real card transactions, of which only 0.17% are fraud. On a held-out test set the logistic regression catches 92% of frauds (ROC-AUC 0.97) and the neural network reaches 0.82 precision. A Streamlit dashboard scores uploaded CSVs of transactions, with a confusion matrix and a PDF report.",
        tags: "Python · Scikit-learn · TensorFlow · Streamlit",
    },
    {
        title: "Emergency Bike Crash SOS System",
        image: bike,
        alt: "Bike crash SOS project cover",
        text: "An ESP32 device that detects a crash in real time from accelerometer and vibration sensors, then sends an automated SOS with the rider's GPS location over GSM.",
        tags: "ESP32 · Sensors · GPS · GSM",
    },
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            {projects.map((project) => (
                <div className="project" key={project.title}>
                    {/* Only projects with something public to open are links. */}
                    {project.link ? <>
                        <a href={project.link} target="_blank" rel="noreferrer"><img src={project.image} className="zoom" alt={project.alt} width="100%"/></a>
                        <a href={project.link} target="_blank" rel="noreferrer"><h2>{project.title}</h2></a>
                    </> : <>
                        <img src={project.image} alt={project.alt} width="100%"/>
                        <h2>{project.title}</h2>
                    </>}
                    <p>{project.text}</p>
                    <p className="project-tags">{project.tags}</p>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Project;
