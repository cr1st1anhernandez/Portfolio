import LinuxLearner from '../assets/linuxLearner.png';
import SpotifySearcher from '../assets/spotifySearcher.png';
import { ArrowUpIcon, GitMergeIcon, NextJsIcon, ReactIcon, TailwindIcon } from './Icons';

export const Projects = () => {
	return (
		<div className="text-lg bg-[#1D1C20] flex flex-col gap-8 rounded-lg p-6 pb-12 lg:p-12 col-span-3 font-normal text-neutral-400 lg:pb-24">
			<h2 className="text-2xl lg:text-4xl pb-4 font-bold text-neutral-100">Projects</h2>
			<section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
				<a
					href="https://linux-learner.vercel.app/"
					target="_blank"
					rel="noreferrer"
					className="block border-2 rounded-lg border-[#414044] shadow-md shadow-black cursor-pointer ease-in-out duration-300 transition-transform transform hover:scale-105 p-4">
					<header className="flex justify-between items-center">
						<h3 className="text-xl font-bold text-neutral-100">Linux Learner</h3>
						<ArrowUpIcon width={20} />
					</header>
					<p className="text-neutral-500">A website to learn linux for beginners.</p>
					<img src={LinuxLearner} alt="Linux Learner" className="w-full rounded-lg mt-4" />
					<footer className="flex gap-2">
						<NextJsIcon width={20} />
						<TailwindIcon width={20} />
						<ReactIcon width={20} />
						<GitMergeIcon width={20} />
					</footer>
				</a>
				<a
					href="https://spotify-searcher-artist.vercel.app/"
					target="_blank"
					rel="noreferrer"
					className="block border-2 rounded-lg border-[#414044] shadow-md shadow-black cursor-pointer ease-in-out duration-300 transition-transform transform hover:scale-105 p-4">
					<header className="flex justify-between items-center">
						<h3 className="text-xl font-bold text-neutral-100">Spotify Searcher</h3>
						<ArrowUpIcon width={20} />
					</header>
					<p className="text-neutral-500">A website for search artists in spotify.</p>
					<img src={SpotifySearcher} alt="SpotifySearcher" className="w-full rounded-lg mt-4" />
					<footer className="flex gap-2">
						<NextJsIcon width={20} />
						<TailwindIcon width={20} />
						<ReactIcon width={20} />
						<GitMergeIcon width={20} />
					</footer>
				</a>
			</section>
		</div>
	);
};
