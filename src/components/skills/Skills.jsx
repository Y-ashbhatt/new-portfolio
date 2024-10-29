import Backend from "./elements/Backend";
import Frontend from "./elements/Frontend";
import "./skills.css";

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Tech Stack</span>

      <div className="skills__container container grid">
        <Frontend />

        <Backend />
      </div>
    </section>
  );
}
