import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

/**
 *
 * @returns jsx navigation bar compnent
 */
function NavBar() {
	const [nav, setNav] = useState(false); //State for expanable nav bar

	const links = [
		{ id: 1, link: "home" },
		{ id: 2, link: "about" },
		{ id: 3, link: "portfolio" },
		{ id: 4, link: "experience" },
		{ id: 5, link: "contact" },
	]; // Nav nar links

	return (
		<div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed">
			<div>
				<h1 className="text-5xl font-signature ml-2">Shivaum Mehta</h1>
			</div>
			<ul className="hidden md:flex">
				{links.map(({ id, link }) => {
					return (
						<li
							key={id}
							className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 border-b-2 border-hidden hover:border-solid pb-1"
						>
							<Link to={link} smooth duration={500}>
								{link}
							</Link>
						</li>
					);
				})}
			</ul>
			<div
				onClick={() => setNav(!nav)}
				className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
			>
				{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>

			{/* Handles logic for expandable nav bar 
			{nav && (
				<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
					{links.map(({ id, link }) => {
						return (
							<li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
								{link}
							</li>
						);
					})}
				</ul>
			)}*/}

			<ul
				className={
					(nav ? "translate-x-0" : "translate-x-full") +
					" " +
					"flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 duration-300"
				}
			>
				{links.map(({ id, link }) => {
					return (
						<li
							key={id}
							className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-125 duration-200"
						>
							<Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
								{link}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default NavBar;
