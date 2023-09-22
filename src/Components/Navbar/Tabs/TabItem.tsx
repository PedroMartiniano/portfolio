'use client'

import * as Tab from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface TabItemProps {
    description: string,
    route: string,
    value: string,
    isSelected?: boolean
}

export function TabItem({ description, route, value, isSelected = false }: TabItemProps) {
    const router = useRouter()
    return (
        <Tab.Trigger value={value} className='relative px-1 pb-4 text-sm font-medium text-gray-950 hover:text-yellow-600 data-[state=active]:text-yellow-600' onClick={() => router.push(route)}>
            <span>
                {description}
            </span>
            {
                isSelected && (
                    <motion.div
                        layoutId='activeTab'
                        className='absolute -bottom-px right-0 left-0 h-px bg-yellow-600' />
                )
            }
        </Tab.Trigger>
    )
}