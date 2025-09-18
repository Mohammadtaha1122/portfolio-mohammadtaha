import Header from "@/components/home/header";
import ProjectsSlider from "@/components/home/projectsSlider";
import Skills from "@/components/home/skills";

const Home = () => {
  return (
    <main>
      <Header />
      <Skills />
      <ProjectsSlider />
    </main>
  );
}

export default Home;