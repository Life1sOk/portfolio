// import ru from "../../public/resume/resume-ru.pdf";
// import en from "../../public/resume/resume-eng.pdf";

interface IComponent {
  lang: string;
  children: React.ReactNode;
}

const ResumeWrapper = ({ lang, children }: IComponent) => {
  return (
    <a href={lang === "ru" ? "ru" : "en"} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ResumeWrapper;
