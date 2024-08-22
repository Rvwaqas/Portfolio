import Image from "next/image";
import Hero from "./component/Hero";
import Contact from "./component/contact"
import Project from "./component/Project"
import About from "./component/About"
import Skill from "./component/Skill"
export default function Home() {
  return (
<>
<Hero></Hero>
<About></About>
<Skill></Skill>
<Project></Project>
<Contact></Contact>
</>
  );
}
  