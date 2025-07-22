'use client'; 
import SportsCard from "../ui/SportsCard";

const ScrollCard = () => { 
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollAmount = 1;

    const autoScroll = () => {
      if (!scrollContainer) return;
      scrollContainer.scrollLeft += scrollAmount;

      if (
        scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
        scrollContainer.scrollWidth
      ) {
        scrollContainer.scrollLeft = 0;
      }
    };

    const interval = setInterval(autoScroll, 20);
    return () => clearInterval(interval);
  }, []);

   return (
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scrollbar-hide bg-white items-center"
      >
        {sportsEventsData.events.map((item, index) => (
          <div key={index} className="flex items-center">
            <SportsCard
              title={item.title}
              subTitle={item.subTitle}
              logo={item.logo}
            />
            {index !== sportsEventsData.events.length - 1 && <VerticalLine />}
          </div>
        ))}
      </div>
   )
}

export default ScrollCard; 