import Image from "next/image"
function About() {
    return (
        <div className="bg-gray-200 min-h-screen flex flex-col items-center">
            <main className="flex flex-col md:flex-row gap-x-10 p-4 max-w-5xl mx-auto">
                <div className="mt-10 md:mt-20">
                    <Image
                        src="/me.webp"
                        className="w-[350px] rounded-3xl mx-auto md:mx-0" 
                        alt="me"
                        width={450}
                        height={450}
                    />
                </div>
                <div className="mt-10 md:mt-20">
                    <p className="text-3xl font-serif font-extrabold text-gray-900 text-center md:text-left">
                        About <span className="text-orange-600">Me</span> <br />
                        <span className="text-5xl">Web <span className="text-orange-600">Developer</span></span>
                    </p>
                    <p className="text-[16px] font-serif text-gray-900 font-extrabold mt-7 w-full md:w-[690px] text-justify mx-auto md:mx-0">
                        I am a Web Developer. I specialize in creating engaging and user-friendly websites that not only look great but also function seamlessly. With a solid grasp of front-end technologies like HTML, CSS, and JavaScript, I focus on crafting responsive designs that adapt to any device. On the back end, I work with frameworks like Node.js and databases to ensure that my web applications are efficient and scalable. I am always eager to learn new skills and stay updated on industry trends, which helps me deliver innovative solutions tailored to meet the unique needs of my clients. My goal is to create digital experiences that are both visually appealing and highly functional, making the web a better place for everyone.
                    </p>
                </div>
            </main>
        </div>
    );
}

export default About;
