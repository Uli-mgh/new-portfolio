import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there!. <br />
        I'm Ulises Maghenzani
      </SectionTitle>
      <SectionText>
        FullStack web developer and Technology enthusiast
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        My CV
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
