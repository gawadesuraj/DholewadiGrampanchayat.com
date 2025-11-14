import { forwardRef } from 'react'

const Card = forwardRef(({ 
  children, 
  className = '', 
  hover = false, 
  gradient = false,
  glassmorphism = false,
  shadow = 'md',
  ...props 
}, ref) => {
  const shadowClasses = {
    sm: 'shadow-sm hover:shadow-md',
    md: 'shadow-md hover:shadow-lg',
    lg: 'shadow-lg hover:shadow-xl',
    xl: 'shadow-xl hover:shadow-2xl'
  }

  const baseClasses = `
    relative overflow-hidden rounded-2xl border transition-all duration-300 ease-out
    ${glassmorphism 
      ? 'bg-white/80 backdrop-blur-sm border-white/20' 
      : 'bg-white border-gray-200'
    }
    ${gradient 
      ? 'bg-gradient-to-br from-white via-white to-gray-50' 
      : ''
    }
    ${shadowClasses[shadow]}
    ${hover 
      ? 'cursor-pointer hover:scale-[1.02] hover:border-primary/20 hover:-translate-y-1' 
      : ''
    }
    ${className}
  `

  return (
    <div
      ref={ref}
      className={baseClasses}
      {...props}
    >
      {/* Gradient overlay for hover effect */}
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Decorative corner */}
      <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
})

Card.displayName = 'Card'

// Sub-components
function CardHeader({ children, className = '' }) {
  return (
    <div className={`p-6 pb-4 ${className}`}>
      {children}
    </div>
  )
}

function CardBody({ children, className = '' }) {
  return (
    <div className={`px-6 pb-6 ${className}`}>
      {children}
    </div>
  )
}

function CardFooter({ children, className = '' }) {
  return (
    <div className={`p-6 pt-4 border-t border-gray-100 bg-gray-50/50 ${className}`}>
      {children}
    </div>
  )
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter

export default Card
