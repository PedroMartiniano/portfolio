'use client'

import * as AccordionRadix from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function Accordion() {
    const [isAccordionOpen, setIsAccordionOpen] = useState('')

    return (
        <AccordionRadix.Root className='AccordionRoot border border-gray-950 p-2' type='single' collapsible onValueChange={setIsAccordionOpen}>
            <AccordionRadix.Item className='AccordionItem' value='item-1'>
                <AccordionRadix.AccordionTrigger asChild>
                    <div className='flex gap-5 cursor-pointer'>
                        <h3 className='text-md font-bold font-sans text-gray-950'>TESTE ACCORDION</h3>
                        <ChevronDown className={`transition ${isAccordionOpen && 'rotate-180'}`} />
                    </div>
                </AccordionRadix.AccordionTrigger>
                <AccordionRadix.Content asChild>
                    <div className='p-5 rounded-lg border-2 mt-2 transition'>
                        COLOCAR AQUI UM FORM OU ALGO DO TIPO PARA FAZER UMA CHAMADA DA API
                    </div>
                </AccordionRadix.Content>
            </AccordionRadix.Item>
        </AccordionRadix.Root>
    )
}