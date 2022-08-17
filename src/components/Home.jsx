import React from "react";
import HeroImage from "../assets/profile.jpg";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-scroll";

function Home() {
	return (
		<div
			name="home"
			className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
		>
			<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
				<div className="flex flex-col justify-center h-full">
					<h2 className="text-4xl sm:text-7xl font-bold text-white">
						I'm a Full Stack Developer{" "}
					</h2>
					<p className="text-gray-500 py-4 max-w-md">
						A recent software engineering graduate from King’s College London with an
						extensive background in software design, development, and testing. I am a
						motivated individual seeking to use my experience in a fast-paced software
						development role where I can continue to develop my skills and technical
						knowledge while contributing to complex large scale projects.
					</p>
					<div>
						<Link
							to="portfolio"
							smooth
							duration={500}
							className="text-white w-fit px-6 py-3 my-6 flex  items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group"
						>
							Portfolio
							<span className="group-hover:rotate-90 duration-300">
								<RiArrowRightLine size={23} className="ml-1" />
							</span>
						</Link>
					</div>
				</div>
				<div>
					<img
						src={HeroImage}
						alt="my profile"
						className="rounded-2xl mx-auto w-2/3 md:w-[70%]"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
