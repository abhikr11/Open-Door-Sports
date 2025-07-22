

const EventsHero1 = () => {
    return (
        <div>
            {/*  Fixed Fullscreen Video Background */}
            <div className="fixed top-0 left-0 w-full h-[400px] lg:h-[100vh] -z-10">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/zYhBJoBUSYA?si=OELTmC1qV8xWJo1F&autoplay=1&mute=1&loop=1&playlist=zYhBJoBUSYA"
                    title="Introduction Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>

            {/*  Section Title Over Video */}
            <div className="w-full h-[400px] lg:h-screen bg-white/20 flex items-end pb-20 px-10">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white">Sports Events</h1>
            </div>
        </div>
    )
}