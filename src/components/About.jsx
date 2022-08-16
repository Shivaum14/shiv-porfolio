import React from "react";

function About() {
	return (
		<div
			name="about"
			className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
				</div>
				<p className="text-xl mt-20">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis provident, minus
					consequuntur unde reprehenderit neque sapiente pariatur quo. Cumque dolorem
					totam consequuntur assumenda obcaecati unde ducimus aliquam sapiente deserunt
					iusto! Ea sequi provident iure sint ratione labore! Quod assumenda quibusdam
					obcaecati pariatur, ducimus cumque ipsa in beatae reiciendis! Excepturi, esse.
				</p>
				<br />
				<p className="text-xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis provident, minus
					consequuntur unde reprehenderit neque sapiente pariatur quo. Cumque dolorem
					totam consequuntur assumenda obcaecati unde ducimus aliquam sapiente deserunt
					iusto! Ea sequi provident iure sint ratione labore! Quod assumenda quibusdam
					obcaecati pariatur, ducimus cumque ipsa in beatae reiciendis! Excepturi, esse.
				</p>
			</div>
		</div>
	);
}

export default About;
