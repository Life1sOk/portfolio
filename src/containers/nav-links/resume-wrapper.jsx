import React from "react";

import ru from "../../assets/resume/resume-ru.pdf";
import en from "../../assets/resume/resume-eng.pdf";

const ResumeWrapper = ({ lang, children }) => {
  return (
    <a href={lang === "ru" ? ru : en} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ResumeWrapper;
