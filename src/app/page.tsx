import Image from "next/image"
export default function Home() {
  return (
      <div className="bg-gray-200 min-h-screen flex flex-col items-center">
          <main className="flex flex-col md:flex-row justify-between items-center p-4 md:p-10">
              <div className="font-extrabold font-serif text-center md:text-left mt-10">
                  <p className="text-[40px] md:text-[50px]">Hi</p>
                  <p className="text-[40px] md:text-[50px]">
                      I am <span className="text-orange-600">Adina</span>
                  </p>
                  <p className="text-[35px] md:text-[45px]">A Web Developer.</p>
                  <p className="text-[16px] md:text-[18px] mt-2">
                      I am a web developer with a passion for creating dynamic and user-friendly websites. 
                      I love bringing ideas to life through technology.
                  </p>
              </div>

              <div className="mt-10 md:mt-0 md:ml-10">
                  <Image
                  width={200}
                  height={200}
                      className="rounded-full w-[200px] md:w-[330px] h-[200px] md:h-[330px]"
                      src="/me.webp" 
                      alt="me" 
                  />
              </div>
          </main>
          <button className="mt-4 p-2 bg-orange-600 text-white rounded">
              Learn More
          </button>
      </div>
  );
}
