import Main from "@/components/main";
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
    </div>
  )
}

export default Page;