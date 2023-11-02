
function Landing() {
  return (
    <div className="">
      <section className="bg-slate-200 text-slate-700 grid gap-5">
        <div className="container mx-auto py-28 md:px-20 px-5">
          <div className="grid xl:grid-cols-5 gap-5 border-b">
            <div className="grid xl:col-span-2 rounded-full">
              <img
                className="md:h-96 md:w-96 object-cover rounded-full"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mj1l753EgMwOfLFDRLvKxgAAAA%26pid%3DApi&f=1&ipt=608459c5e138dda1f9209a4aa1bec33a90b621be7fe32dfc9efadedf85d2c3b6&ipo=images"
                alt="profile"
              />
            </div>
            <div className="grid xl:col-span-3 items-center h-full">
              <div className="flex flex-col gap-5">
                <h3 className="text-3xl md:text-5xl font-bold sm:mt-8">
                  Olaniyi Micheal Oluwatosin
                </h3>
                <h4 className="text-2xl md:text-4xl font-semibold">
                  Hello Distinguished,
                </h4>
                <span className="text-md">
                  Welcome to my website! As a data analyst, I believe that
                  numbers tell a story. By examining data sets and extracting
                  insights, I help individuals and organizations make
                  data-driven decisions. To quote W. Edwards Deming, 'In God we
                  trust, all others must bring data.' I wholeheartedly agree
                  with this sentiment, and it drives my work every day.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-5 md:py-16 px-5 md:px-20">
          <div className="bg-[#312450] rounded-lg shadow-xl my-16">
            <div className="grid md:grid-cols-5">
              <div className="grid md:col-span-2">
                <img
                  className="md:h-96 md:w-96 w-full object-cover"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mj1l753EgMwOfLFDRLvKxgAAAA%26pid%3DApi&f=1&ipt=608459c5e138dda1f9209a4aa1bec33a90b621be7fe32dfc9efadedf85d2c3b6&ipo=images"
                  alt="profile"
                />
              </div>
              <div className="flex flex-col gap-5 py-9 px-5 md:col-span-3">
                <p className="text-white text-sm text-justify">
                  Mike is passionate about using data to solve complex problems.
                  With years of experience in the industry, I have honed my
                  skills in data visualization, statistical analysis, and data
                  modeling. My expertise lies in translating complex data into
                  meaningful insights that drive business growth.
                </p>
                <p className="text-white text-sm text-justify">
                  Whether you're a small business owner or a large corporation,
                  I can help you make sense of your data. Let's work together to
                  uncover insights that will drive your success.
                </p>
                <p className="text-white text-sm text-justify">
                  Contact me to learn more about how I can help you achieve your
                  data goals.
                </p>
                <div className="flex justify-start py-9">
                  <a className="py-3 px-5 border text-white" href="">
                    HIRE ME
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing