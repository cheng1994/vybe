import { Blade } from '@/components/blade'
import { Card, StepCard } from '@/components/card'
import React from 'react'

export default function Home() {
    const steps = [
        {
            number: '01',
            title: 'Train Your Brand Memory',
            highlightedWord: 'Memory',
            description:
                'Upload your site, assets, and product data. VybeOS builds a private brand memory that captures your tone and design DNA. No shared models, no data leaks.',
        },
        {
            number: '02',
            title: 'Generate With Precision',
            highlightedWord: 'Precision',
            description:
                "Create complete campaigns in one click. Every line and layout stays true to your brand's identity, handcrafted quality, automated delivery.",
        },
        {
            number: '03',
            title: 'Learn + Refine Safely',
            highlightedWord: 'Safely',
            description:
                'Approve, adjust, and publish inside VybeOS. The system learns only from your edits, closing the loop between performance and creative consistency.',
        },
    ]

    return (
        <main>
            <Blade
                title="How It Works"
                description="VybeOS transforms a single input into hundreds of outputs, each perfectly aligned with your brand voice and visual identity."
            >
                {/* Cards Container - also a Card component */}
                <Card
                    variant="container"
                    className="bg-gray-500 border-0 before:top-px before:left-px before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:absolute before:inset-0 before:bottom-right-clip-path bottom-right-clip-path p-6 md:p-8 lg:p-12 before:md:bg-radial-[at_50%_100%] before:bg-radial-[at_50%_80%] before:from-vybe-green-950 before:from-50% before:md:from-30% before:to-[#1A1A1A] before:to-80% before:md:to-50%"
                >
                    {/* Step Cards */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
                        {steps.map((step, index) => (
                            <React.Fragment key={step.number}>
                                <div className="flex-1 flex">
                                    <StepCard
                                        number={step.number}
                                        title={step.title}
                                        highlightedWord={step.highlightedWord}
                                        description={step.description}
                                    />
                                </div>
                                {/* Arrow between cards - hidden on mobile, shown on desktop */}
                                {index < steps.length - 1 && (
                                    <>
                                        {/* Mobile: vertical arrow */}
                                        <div className="flex justify-center md:hidden py-2">
                                            <img
                                                className="z-10"
                                                src="/arrow-down.svg"
                                                alt="Arrow Down"
                                            />
                                        </div>
                                        {/* Desktop: horizontal arrow */}
                                        <div className="hidden md:flex items-center">
                                            <img
                                                className="z-10"
                                                src="/arrow-right.svg"
                                                alt="Arrow Right"
                                            />
                                        </div>
                                    </>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </Card>
            </Blade>
        </main>
    )
}
