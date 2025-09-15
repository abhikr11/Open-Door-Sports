'use client';

export const FloatingWhatsApp = () => {
  const phone = "9593382777";
  const message = "Hello! I would like to know more about Open Door Sports programs.";
  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-3 right-3 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-105"
    >
      {/* WhatsApp icon from Remix Icons */}
      <i className="ri-whatsapp-line text-white text-3xl"></i>
    </a>
  );
};
