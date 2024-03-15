function Button({ children, className, type = "primary", ...props }) {
	const baseStyles =
		" inline-block py-2 px-6 text-[1.4rem] rounded-xl font-medium transition-colors";

	const styles = {
		primary: `${baseStyles} text-white bg-brand-500 hover:bg-brand-600`,
		secondary: `${baseStyles} text-black bg-gray-200 dark:bg-gray-600 hover:bg-gray-300`,
	};

	return (
		<button {...props} className={`${styles[type]} ${className}`}>
			{children}
		</button>
	);
}

export default Button;
