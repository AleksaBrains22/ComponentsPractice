import className from "classnames";

function Button({ children, primary, secondary, success, warning, danger, outline, rounded, ...rest }) {
  const classes = className(rest.className, "flex items-center px-3 py-1.5 border", {
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-yellow-400 bg-yellow-400 text-white": warning,
    "border-red-500 bg-red-500 text-white": danger,
    "border-gray-900 bg-gray-900 text-white": secondary,
    "border-green-500 bg-green-500 text-white": success,
    "rounded-full": rounded,
    "bg-white": outline,
    "text-blue-700": outline && primary,
    "text-yellow-600": outline && warning,
    "text-gray-900": outline && secondary,
    "text-green-600": outline && success,
    "text-red-500": outline && danger,
  });
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count = Number(!!primary) + Number(!!success) + Number(!!secondary) + Number(!!danger) + Number(!!warning);
    if (count > 1) {
      return new Error("Only one primary , secondary , success , warning , danger can be true ");
    }
  },
};
