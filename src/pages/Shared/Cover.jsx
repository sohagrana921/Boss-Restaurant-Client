import { Parallax } from "react-parallax";
const Cover = ({ img, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      {" "}
      <div className="hero h-[600px]">
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="px-[200px] py-[80px] rounded  bg-[#151515] opacity-60">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{subTitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
