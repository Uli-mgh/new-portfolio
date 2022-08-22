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
      <a
        target="_blank"
        href="https://drive.google.com/file/d/1P0xf9UeGwTF6728h3iaNqYStPEqD3j5V/view?usp=sharing"
        rel="noopener noreferrer"
      >
        <Button>My CV</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
