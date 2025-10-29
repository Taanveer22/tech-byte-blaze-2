import wave from "../assets/wave.svg";
import Hero from "../components/Hero";
const Homepage = () => {
  return (
    <div className="flex relative flex-col justify-center items-center min-h-[calc(100vh-116px)]">
      <Hero></Hero>
      <img
        src={wave}
        className="w-full absolute bottom-0 left-0 pointer-events-none"
      ></img>
    </div>
  );
};

export default Homepage;
