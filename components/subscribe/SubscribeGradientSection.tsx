import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SubscribeGradientSectionProps = {
  children?: ReactNode
  className?: string
}

export default function SubscribeGradientSection({
  children,
  className,
}: SubscribeGradientSectionProps) {
  return (
    <section
      className={cn(
        'relative flex w-full min-h-[613px] items-center overflow-hidden pt-20',
        className,
      )}
    >
      <div
        className="absolute inset-0 z-0 bg-linear-to-r from-[#002045] to-[#1a365d]"
        aria-hidden
      />
      <div className="relative z-10 container mx-auto w-full max-w-7xl px-6 lg:px-12">
        {children}
      </div>
    </section>
  )
}
