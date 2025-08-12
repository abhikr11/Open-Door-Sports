const SchoolName = ({ className = "" }) => {
  const logo = "/logo.png"
  return (
    <div className="flex gap-1">
      <img src={logo} alt="School Logo" className="w-16 h-16 object-contain" />
      <div
        className={`w-fit p-2 hidden sm:flex sm:flex-col items-center justify-center min-w-[200px] cursor-pointer  ${className}`}
        style={{ color: "var(--color-nav-text)" }}
      >
        <h2 className="font-bold text-[18px] mb-2 ">
          OPEN DOOR SPORTS
        </h2>
        <div className="flex items-center w-fit mx-auto">
          <Line />
          <p className="mx-2 text-[8px] gradient-text">
            Come, Let's Play Together
          </p>
          <Line />
        </div>
      </div> 
    </div>
  );
};

const Line = () => (
  <div className="flex flex-col items-center justify-center">
    <div className="gradient-line mb-0.5" />
    <div className="gradient-line mt-0.5" />
  </div>
);

export { SchoolName };
