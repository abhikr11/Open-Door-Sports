import { TextHeading } from "../ui/TextHeading";
import ourFeatureData from "../../data/ourFeaturesData";
import SlideInView from "../animation/SlideInView";

// ===================
// Main Section Component
// ===================

const OurFeatures = () => {
  const { heading, features } = ourFeatureData;

  return (
    <section className="px-10 lg:px-20 xl:px-40 2xl-60">
      <TextHeading
        text_1={heading.title_1}
        text_2={heading.title_2}
        addBreak={false}
        className="text-center"
      />

      <p className="text-center mt-4">{heading.subTitle}</p>

      {features.map((feature, index) => (
        <FeatureBlock
          key={index}
          imageSide={feature.imageSide}
          titleHighlight={feature.titleHighlight}
          titleMain={feature.titleMain}
          titleSub={feature.titleSub}
          description={feature.description}
          imageSrc={feature.imageSrc}
          GraphicComponent={feature.imageSide === "right" ? ImageRight : ImageLeft}
        />
      ))}
    </section>
  );
};


export default OurFeatures;

// ===================
// Text + Graphic Layout Component
// ===================
const FeatureBlock = ({
  imageSide = "right",
  titleHighlight = "",
  titleMain = "",
  titleSub = "",
  description = "",
  imageSrc = "",
  GraphicComponent,
}) => {
  const isImageLeft = imageSide === "left";

  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-6 mt-10">
      {/* Image on Left */}
      {isImageLeft && GraphicComponent && (
        <SlideInView direction="left">
          <GraphicComponent imageSrc={imageSrc} />
        </SlideInView>
      )}

      {/* Text Content */}
      <SlideInView direction={isImageLeft ? "right" : "left"} delay={0.2}>
        <FeatureText
          highlight={titleHighlight}
          main={titleMain}
          sub={titleSub}
          description={description}
        />
      </SlideInView>

      {/* Image on Right */}
      {!isImageLeft && GraphicComponent && (
        <SlideInView direction="right">
          <GraphicComponent imageSrc={imageSrc} />
        </SlideInView>
      )}
    </div>
  );
};

// ===================
// Text Content Component
// ===================
const FeatureText = ({
  highlight = "",
  main = "",
  sub = "",
  description = "",
}) => {
  return (
    <div className="max-w-[350px] min-w-[250px] space-y-3">
      <h1 className="text-2xl md:text-3xl lg:text-4xl">
        {highlight && (
          <span className="text-green-heading-text">{highlight}</span>
        )}{" "}
        <span className="text-heading-text">{main}</span>
        {sub && (
          <>
            <br />
            <span className="text-green-heading-text">{sub}</span>
          </>
        )}
      </h1>
      <p>{description}</p>
    </div>
  );
};

// ===================
// Placeholder Graphic Components
// ===================
const ImageRight = ({ imageSrc }) => (
  <div className="min-w-[250px] md:max-w-[500px] aspect-square  flex items-center justify-center overflow-hidden rounded-xl">
    <img src={imageSrc} alt="feature" className="w-full h-full " />
  </div>
);

const ImageLeft = ({ imageSrc }) => (
  <div className="min-w-[250px] md:max-w-[500px] aspect-square  flex items-center justify-center overflow-hidden rounded-xl">
    <img src={imageSrc} alt="feature" className="w-full h-full " />
  </div>
);


export { FeatureBlock, FeatureText, ImageRight, ImageLeft }