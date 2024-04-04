function Button({ children, className, type = 'primary', ...props }) {
  const baseStyles =
    'inline-block py-2 focus:ring-2 text-[1.4rem] rounded-xl font-medium transition-colors outline-none disabled:cursor-not-allowed  ';

  const styles = {
    primary: `${baseStyles} text-white hover:bg-brand-600 bg-brand-500 px-4 450:px-10 `,
    secondary: `${baseStyles} text-black bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 px-4 450:px-10`,
    icon: `${baseStyles} text-black bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 450:px-[1rem] px-[0.8rem]`,
  };

  return (
    <button {...props} className={`${styles[type]} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
