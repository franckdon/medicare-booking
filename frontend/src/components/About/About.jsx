import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/** ============= about img ================== */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="about" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="about card" />
            </div>
          </div>

          {/** ============= about Content ================== */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text__para">
              Praesent elit tortor, tincidunt vitae neque nec, volutpat
              porttitor mauris. Aliquam placerat vehicula felis, a tempor dolor
              venenatis ut. Suspendisse non lorem eu ipsum laoreet molestie a
              vel nulla. Suspendisse ac libero et sapien iaculis efficitur.
              Aliquam rhoncus congue mi, vitae ultricies nibh aliquam bibendum.
            </p>

            <p className="text__para mt-[30px]">
              Vestibulum accumsan massa vel felis ullamcorper, a lacinia ante
              pellentesque. Proin fermentum gravida congue. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit.{" "}
            </p>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
          {/** ============= End about Content ================== */}
        </div>
      </div>
    </section>
  );
};

export default About;
