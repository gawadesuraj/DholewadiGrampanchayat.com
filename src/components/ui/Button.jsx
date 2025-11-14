import { forwardRef } from "react";

const variants = {
  // NOTE: Removed direct hover effects like `hover:from-primary-dark` to let the new overlay handle the hover state.
  primary:
    "bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg hover:shadow-xl",
  secondary:
    "bg-gradient-to-r from-secondary to-blue-600 text-white shadow-lg hover:shadow-xl",
  success:
    "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl",
  warning:
    "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg hover:shadow-xl",
  danger:
    "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg hover:shadow-xl",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-lg",
  ghost: "text-primary hover:bg-primary/10 hover:shadow-md",
  glass:
    "bg-white/20 backdrop-blur-sm border border-white/30 text-gray-800 hover:bg-white/30 shadow-lg hover:shadow-xl",
};

const sizes = {
  xs: "px-3 py-1.5 text-xs",
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
  xl: "px-10 py-5 text-xl",
};

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      disabled,
      loading = false,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`
        relative inline-flex items-center justify-center font-semibold rounded-xl 
        transition-all duration-200 ease-out transform hover:scale-105 active:scale-95
        focus:outline-none focus:ring-4 focus:ring-primary/25 
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${variants[variant]}
        ${sizes[size]}
        ${className}
        group overflow-hidden // <-- 1. ADDED group and overflow-hidden
      `}
        disabled={disabled || loading}
        {...props}
      >
        {/* --- Your existing content (icons, text, etc.) --- */}
        {/* Making sure content is on top of the overlay */}
        <span className="relative z-10 flex items-center">
          {loading && (
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}

          {leftIcon && !loading && <span className="mr-2">{leftIcon}</span>}

          <span>{children}</span>

          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </span>

        {/* Shine effect (optional, kept from your original code) */}
        <div className="absolute inset-0 z-20 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

        {/* 2. ADDED expanding overlay effect */}
        <span className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out" />
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
