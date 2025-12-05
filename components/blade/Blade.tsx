import React from 'react'
import { Card } from '../card'
import StepCard from '../card/StepCard'

interface BladeProps {
    title: string
    description: string
    children: React.ReactNode
}

export default function Blade({ title, description, children }: BladeProps) {
    return (
        <section className="min-h-screen py-16 md:py-24 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-5xl md:text-4xl font-medium text-white mb-4">
                        How It Works
                    </h2>
                    <p className="text-md text-white max-w-3xl mx-auto">
                        VybeOS transforms a single input into hundreds of
                        outputs, each perfectly aligned with your brand voice
                        and visual identity.
                    </p>
                </div>

                <div>{children}</div>
            </div>
        </section>
    )
}
