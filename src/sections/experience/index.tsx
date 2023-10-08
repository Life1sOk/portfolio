import { forwardRef } from "react";
import { useTranslation } from "next-i18next";

import { PointExperience } from "./ui";

import { ExperienceStyle, FlagsWrapper } from "./index.style";

const data = [
  {
    company: "Learning",
    position: "Frontend developer",
    start: "01.06.22",
    end: "∞",
  },
  {
    company: "Kleo",
    position: "Full Stack developer",
    start: "01.06.22",
    end: "∞",
  },
];

const ExperienceSub = forwardRef<HTMLElement>(function Skills(_, ref) {
  const { t } = useTranslation();

  return (
    <ExperienceStyle ref={ref}>
      <h2>Experience</h2>

      <FlagsWrapper>
        {data.map((point) => (
          <PointExperience data={point} key={point.company} />
        ))}
      </FlagsWrapper>
    </ExperienceStyle>
  );
});

export default ExperienceSub;
