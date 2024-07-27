import avatar from '../assets/avatar.png';
import { Github01Icon, InstagramIcon, Linkedin01Icon } from './Icons';
import { TextGenerateEffect } from './TextGenerateEffect';

export const Header = () => {
	const words = `Software engineer, specialized in web development with springboot on the backend and react on the frontend.`;
	return (
		<header className="flex flex-col gap-2 max-w-xl">
			<div className="flex flex-col md:flex-row gap-4 items-center">
				<div className="hidden md:flex border-[#35A2B1] border-2 pt-2 rounded-full overflow-hidden w-20 h-20 bg-[#1D1C20]">
					<img src={avatar} width={1200} height={1200} />
				</div>
				<div className="flex md:hidden border-[#35A2B1] border-2 pt-2 rounded-full overflow-hidden w-28 h-28 bg-[#1D1C20]">
					<img src={avatar} width={400} height={400} />
				</div>
				<a
					href="https://www.linkedin.com/in/cristian-neftali-hernandez-ramirez-b17742221/"
					target="_blank"
					className="cursor pointer inline-flex animate-shimmer items-center justify-center rounded-md border border-[#35A2B1] bg-[linear-gradient(110deg,#0a0f0d,45%,#0A2735,55%,#0a0f0d)] bg-[length:200%_100%] py-1 px-2 font-medium text-[#D2D4D7] transition-colors">
					Disponible para trabajar
				</a>
			</div>
			<h1 className="text-4xl text-center md:text-left">
				Hi. I am
				<span className="text-[#35A2B1] font-extrabold"> Cristian.</span>
			</h1>
			<div className="text-center w-full md:text-left">
				<TextGenerateEffect words={words} />
			</div>
			<div className="flex flex-row gap-4 items-center justify-center md:justify-normal">
				<a target="_blank" href="https://www.instagram.com/cristian_ncc/">
					<InstagramIcon width={25} />
				</a>
				<a
					target="_blank"
					href="https://www.linkedin.com/in/cristian-neftali-hernandez-ramirez-b17742221/">
					<Linkedin01Icon width={25} />
				</a>
				<a target="_blank" href="https://github.com/cr1st1anhernandez/">
					<Github01Icon width={25} />
				</a>
			</div>
		</header>
	);
};
