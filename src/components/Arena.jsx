import 'boxicons/css/boxicons.min.css';

const Arena = () => {
  return (
    <div className="md:min-h-[90%] p-0 lg:p-8 md:mt-0 mt-60">

      {/* Section Title */}
      <div className="relative z-10 pt-6 text-center">
        <h1
          className="text-5xl font-bold tracking-widest mb-28"
          style={{
            textShadow:
              "0 0 10px rgba(255,255,255,0.7), 0 0 20px rgba(167,139,250,0.5)",
          }}
        >
          Arena
        </h1>
      </div>

      {/* Main Container */}
      <div className="lg:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

        {/* Left Column (1/3) */}
        <div className="md:col-span-1 space-y-4 md:space-y-6">

          {/* Card 1 – Top Left */}
          <div className="relative overflow-hidden rounded-3xl border border-white aspect-[4/4] transform transition-transform duration-300 hover:scale-105">
            <img
              src="public/images/bento-card1.png"
              alt="card-1"
              className="h-full w-full object-cover"
            />

            <button className="absolute bottom-0 h-16 w-full bg-black bg-opacity-70 text-2xl font-bold hover:text-yellow-400 transition-all duration-300 text-nowrap">
              <i className="bx bx-store-alt"></i> NFT STORE
            </button>
          </div>

          {/* Card 2 – Bottom Left */}
          <div className="relative overflow-hidden rounded-3xl border border-white aspect-[4/4] transform transition-transform duration-300 hover:scale-105">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="public/videos/bento-card2.mp4"
            ></video>
          </div>
        </div>

        {/* Right Column (2/3) */}
        <div className="md:col-span-2 space-y-4 md:space-y-6">

          {/* Top Row – 3 Small Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">

            {/* Card 3 */}
            <div className="relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                src="public/videos/bento-card3.mp4"
              ></video>
              <h1 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-extrabold text-2xl">
                Scoriox
              </h1>
            </div>

            {/* Card 4 */}
            <div className="relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                src="public/videos/bento-card4.mp4"
              ></video>
              <h1 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-extrabold text-2xl">
                Floralynx
              </h1>
            </div>

            {/* Card 5 */}
            <div className="relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                src="public/videos/bento-card5.mp4"
              ></video>
              <h1 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-extrabold text-2xl">
                Titanor
              </h1>
            </div>
          </div>

          {/* Bottom Large Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white aspect-[16/9] transform transition-transform duration-300 hover:scale-105">
            <img
              src="public/images/bento-card5.png"
              alt="card-5"
              className="h-full w-full object-cover"
            />

            <button className="absolute bottom-0 h-16 w-full bg-black bg-opacity-70 text-2xl font-bold hover:text-yellow-400 transition-all duration-300 text-nowrap">
              <i className="bx bx-link-external"></i> Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arena;
