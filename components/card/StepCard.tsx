import React from 'react'
import Card from './Card'

interface StepCardProps {
    number: string
    title: string
    highlightedWord: string
    description: string
    className?: string
}

export default function StepCard({
    number,
    title,
    highlightedWord,
    description,
    className = '',
}: StepCardProps) {
    // Split title to highlight the specified word (case-insensitive, whole word match)
    const regex = new RegExp(`(${highlightedWord})`, 'i')
    const titleParts = title.split(regex)

    return (
        <Card variant="step" className="p-3" showAccent={true}>
            <div className={`flex flex-col gap-5 h-full p-2 bg-[#DDE4C3] ${className}`}>
                {/* Title */}
                <h3 className="top-left-clip-path flex-col flex justify-center text-center p-10 text-4xl  font-medium text-white bg-black">
                    {titleParts.map((part, index) =>
                        part.toLowerCase() === highlightedWord.toLowerCase() ? (
                            <span key={index} className="text-vybe-green-200">
                                {part}
                            </span>
                        ) : (
                            <span key={index}>{part}</span>
                        )
                    )}
                </h3>
                <div className="flex gap-4 flex-1 grow flex-col justify-between relative">
                    {/* Description */}
                    <p className="px-1 text-sm md:text-base text-gray-800 grow leading-relaxed">
                        {description}
                    </p>

                    {/* Number indicator */}
                    <div className="mt-auto self-end w-10 h-10 md:w-12 md:h-12 rounded-lg border-2 bg-vybe-green-100 border-black flex items-center justify-center">
                        <span className="font-pp-neue-machina text-black font-bold text-lg md:text-xl">
                            {number}
                        </span>
                    </div>
                </div>
            </div>
        </Card>
    )
}
