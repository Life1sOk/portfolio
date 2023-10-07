import { forwardRef } from "react";
import { useTranslation } from "next-i18next";

import SkillSet from "@components/containers/skill-set";
import Title from "@components/shared/title";
import CubeBox from "@components/containers/cube";

import { MainWrapper, MainSkills, TitleWrapper, BoxWrapper } from "./index.style";

const SkillsSub = forwardRef<HTMLElement>(function Skills(_, ref) {
  const { t } = useTranslation();

  return (
    <MainWrapper ref={ref}>
      <BoxWrapper>
        <CubeBox />
      </BoxWrapper>
      <MainSkills>
        <TitleWrapper>
          <Title title={t("tools.title")} number={2} />
        </TitleWrapper>
        <SkillSet />
      </MainSkills>
    </MainWrapper>
  );
});

export default SkillsSub;
