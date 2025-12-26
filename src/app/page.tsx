import { Wrapper } from "@/components";
import { Spotlight } from "@/components/ui/spotlight";

const HomePage = () => {
  return (
    <Wrapper className="pt-20 relative">
      <div className="relative">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="rgba(255, 255, 255, 0.5)"
        />
      </div>
    </Wrapper>
  );
};

export default HomePage;
