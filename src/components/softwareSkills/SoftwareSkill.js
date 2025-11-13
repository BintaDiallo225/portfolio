import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div  center">
        <ul className="dev-icons p-20">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline p-20"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
