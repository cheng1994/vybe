import React from 'react'

interface CardProps {
    children: React.ReactNode
    className?: string
    variant?: 'container' | 'step'
    showAccent?: boolean
}

export default function Card({
    children,
    className = '',
    variant = 'step',
    showAccent = false,
}: CardProps) {
    const baseStyles = 'relative border transition-all duration-300'
    const heightStyles = variant === 'step' ? 'h-full' : ''
    const hoverStyles =
        variant === 'step'
            ? 'hover:border-[#4ade80] hover:shadow-lg hover:shadow-[#4ade80]/20 hover:-translate-y-1'
            : ''

    return (
        <div
            className={`${baseStyles} ${heightStyles} ${hoverStyles} ${className}`}
        >
            {/* Green triangular accent in top-left */}
            {showAccent && (
                <div
                    aria-hidden="true"
                    className="absolute top-0 left-0 z-10 w-4 h-4 bg-vybe-green-100"
                    style={{
                        clipPath: 'polygon(0 0, 0 100%, 100% 0)',
                    }}
                />
            )}
            {children}
        </div>
    )
}
