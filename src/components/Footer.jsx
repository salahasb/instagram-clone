function Link({ children }) {
	return <span className="cursor-pointer">{children}</span>;
}

function Footer() {
	return (
		<footer className="flex flex-col gap-5 text-gray-500 dark:text-gray-400 text-[1.2rem] items-center mb-24">
			<div className="flex flex-wrap justify-center gap-5 ">
				<Link>Meta</Link>
				<Link>About</Link>
				<Link>Blog</Link>
				<Link>Jobs</Link>
				<Link>Help</Link>
				<Link>API</Link>
				<Link>Privacy</Link>
				<Link>Terms</Link>
				<Link>Locations</Link>
				<Link>Instagram Lite</Link>
				<Link>Threads</Link>
				<Link>Contact Uploading & Non-Users</Link>
				<Link>Meta Verified</Link>
			</div>
			<span> &copy; {new Date().getFullYear()} Instagram from Meta</span>
		</footer>
	);
}

export default Footer;
