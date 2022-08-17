import React from "react";

function Contact() {
	return (
		<div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800">
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full text-white">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
					<p className="py-6">Submit the form below to get in touch with me</p>
				</div>

				<div>
					<form action="">
						<input
							type="text"
							name="name"
							placeholder="Enter your name"
							className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
						/>
						<input
							type="text"
							name="email"
							placeholder="Enter your email address"
							className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
						/>
						<textarea
							name="message"
							rows="10"
							className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
						></textarea>
						<button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
