import Main from "@/components/main";
import SectionFour from "@/components/section-four";
import SectionOne from "@/components/section-one";
import SectionThree from "@/components/section-three";
import SectionTwo from "@/components/section-two";

const Page = () => {
  return (
    <div className="container  md:mx-auto">
      <Main />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  )
}

export default Page;