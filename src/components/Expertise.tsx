import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faRobot, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const areas = [
    {
        icon: faEye,
        title: "AI & Computer Vision",
        text: "I train and ship vision models that run in real time: weapon and fight detection for CCTV, and personal-data detection that runs on-device, inside the browser.",
        labels: ["Python", "PyTorch", "YOLO", "CLIP", "OpenCV", "ONNX Runtime", "TensorFlow", "Scikit-learn"],
    },
    {
        icon: faRobot,
        title: "AI Agents & Automation",
        text: "I build AI agents that operate real browsers, and make them trustworthy: every result has to be proven on the page, and every claim is measured on a benchmark.",
        labels: ["Vision-language models", "AI agents", "Playwright", "Benchmarking", "GitHub Actions", "SQLite"],
    },
    {
        icon: faLaptopCode,
        title: "Full-Stack Development",
        text: "From a MERN billing app built during my internship to a multi-tenant web app with logins, scheduling and reports: backend, API and a clean, fast UI.",
        labels: ["React", "Node.js", "Express", "MongoDB", "FastAPI", "TypeScript", "JavaScript", "SQL"],
    },
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                {areas.map((area) => (
                    <div className="skill" key={area.title}>
                        <FontAwesomeIcon icon={area.icon} size="3x"/>
                        <h3>{area.title}</h3>
                        <p>{area.text}</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {area.labels.map((label) => (
                                <Chip key={label} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Expertise;
