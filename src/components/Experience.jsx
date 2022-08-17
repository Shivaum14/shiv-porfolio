import React from "react";

import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import javaScriptLogo from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import nextLogo from "../assets/nextjs.png";
import nodeLogo from "../assets/node.png";
import tailwindLogo from "../assets/tailwind.png";
import pythonLogo from "../assets/Python.png";
import gitHubLogo from "../assets/github.png";

function Experience() {
	const techStack = [
		{
			id: 1,
			src: htmlLogo,
			name: "HTML",
			link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
			style: "shadow-orange-500",
		},
		{
			id: 2,
			src: cssLogo,
			name: "CSS",
			link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
			style: "shadow-blue-500",
		},
		{
			id: 3,
			src: javaScriptLogo,
			name: "JavaScript",
			link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
			style: "shadow-yellow-400",
		},
		{
			id: 4,
			src: reactLogo,
			name: "React",
			link: "https://reactjs.org/",
			style: "shadow-blue-600",
		},
		{
			id: 5,
			src: nextLogo,
			name: "Next js",
			link: "https://nextjs.org/",
			style: "shadow-white",
		},
		{
			id: 6,
			src: nodeLogo,
			name: "Node js",
			link: "https://nodejs.org/en/about/",
			style: "shadow-green-600",
		},
		{
			id: 7,
			src: tailwindLogo,
			name: "Tailwind",
			link: "https://tailwindcss.com/",
			style: "shadow-sky-400",
		},
		{
			id: 8,
			src: pythonLogo,
			name: "Python",
			link: "https://www.python.org/",
			style: "shadow-yellow-600",
		},
		{
			id: 9,
			src: gitHubLogo,
			name: "GitHub",
			link: "https://github.com/Shivaum14",
			style: "shadow-gray-400",
		},
	];

	const openInNewTab = (url) => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div
			name="experience"
			className="w-full bg-gradient-to-b from-gray-800 to-black h-screen pb-12 md:pb-0"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white pb-12 md:pb-0">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
						Experience
					</p>
					<p className="py-6">These are the technologies I have worked with</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
					{techStack.map(({ id, src, name, link, style }) => {
						return (
							<div
								onClick={() => {
									openInNewTab(link);
								}}
								key={id}
								className={
									"shadow-md hover:scale-105 duration-500 py-2 rounded-lg hover:cursor-pointer" +
									" " +
									style
								}
							>
								<img
									src={src}
									alt={name + " logo Image"}
									className="w-20 mx-auto"
								/>
								<p className="mt-4">{name}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Experience;
