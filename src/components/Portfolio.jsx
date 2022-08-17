import React from "react";
/**
 * Customise all image imports or remove!!!
 */
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

function Portfolio() {
	const projecs = [
		{
			id: 1,
			src: arrayDestruct,
			demoLink: "",
			githubLink: "",
		},
		{
			id: 2,
			src: installNode,
			demoLink: "",
			githubLink: "",
		},
		{
			id: 3,
			src: navbar,
			demoLink: "",
			githubLink: "",
		},
		{
			id: 4,
			src: reactParallax,
			demoLink: "",
			githubLink: "",
		},
		{
			id: 5,
			src: reactSmooth,
			demoLink: "",
			githubLink: "",
		},
		{
			id: 6,
			src: reactWeather,
			demoLink: "",
			githubLink: "",
		},
	];

	const openInNewTab = (url) => {
		const newWindow = window.open(url, "_blank", "noopener,noreferrer");
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div
			name="portfolio"
			className="w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen pb-12 md:pb-0"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb-12 md:pb-0">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						Portfolio
					</p>
					<p className="py-6">Check out some of my work right here</p>
				</div>

				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-12 md:pb-0">
					{projecs.map(({ id, src, demoLink, githubLink }) => {
						return (
							<div key={id} className="shadow-md shadow-gray-600 rounded-lg">
								<img
									src={src}
									alt=""
									className="rounded-md duration-200 hover:scale-105"
								/>
								<div className="flex items-center justify-center">
									<button
										className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
										onClick={() =>
											openInNewTab(
												"https://www.linkedin.com/in/shivaum-mehta/"
											)
										}
									>
										Demo
									</button>
									<button
										className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110"
										onClick={() => openInNewTab("https://github.com/Shivaum14")}
									>
										Code
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
