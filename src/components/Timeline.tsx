import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faTrophy, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

const iconStyle = { background: '#5000ca', color: 'rgb(39, 40, 34)' };

// Work first, then hackathons, then education. Dates and details come from the internship certificate,
// the repositories and the resume.
const entries = [
  { date: "May 2026 – Jun 2026", icon: faBriefcase, title: "Full-Stack Developer Intern", place: "Digizura Technologies Pvt. Ltd., Bangalore",
    text: "Built CableNXT, a MERN-stack billing app for local cable operators: role-based JWT login, subscribers, packages, automatic invoicing and a revenue dashboard." },
  { date: "Sep 2026", icon: faTrophy, title: "Argonyx Hackathon", place: "Team project",
    text: "Built a real-time AI/ML threat detection system for CCTV: weapons, fights, falls and intrusions, with an analyst dashboard." },
  { date: "2026", icon: faTrophy, title: "Smart India Hackathon", place: "ISRO problem statement",
    text: "Built PrivAgent, an on-device privacy layer that lets AI agents use web pages without seeing personal data." },
  { date: "RV University", icon: faTrophy, title: "University Ideathon: 3rd Place", place: "Team",
    text: "Designed and presented a technology-based solution, placing 3rd among the competing teams." },
  { date: "2024 – 2028", icon: faGraduationCap, title: "B.Tech in Computer Science", place: "RV University, Bangalore",
    text: "Coursework: Data Structures & Algorithms, Database Management Systems, Machine Learning Fundamentals." },
];

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience &amp; Education</h1>
        <VerticalTimeline>
          {entries.map((entry, index) => (
            <VerticalTimelineElement
              key={entry.title}
              className="vertical-timeline-element--work"
              {...(index === 0 ? { contentStyle: { background: 'white', color: 'rgb(39, 40, 34)' },
                                   contentArrowStyle: { borderRight: '7px solid  white' } } : {})}
              date={entry.date}
              iconStyle={iconStyle}
              icon={<FontAwesomeIcon icon={entry.icon} />}
            >
              <h3 className="vertical-timeline-element-title">{entry.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{entry.place}</h4>
              <p>{entry.text}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
