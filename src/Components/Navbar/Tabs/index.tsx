'use client'

import { useState } from 'react'
import { TabItem } from './TabItem'
import * as Tab from '@radix-ui/react-tabs'

export function Tabs() {
    const [currentTab, setCurrentTab] = useState('tab1')

    return (
        <Tab.Root value={currentTab} onValueChange={setCurrentTab}>
            <Tab.List className='mt-6 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:border-b border-gray-950'>
                <TabItem route='/#about-me' value='tab1' description='Sobre Mim' isSelected={currentTab === 'tab1'} />
                <TabItem route='/projects' value='tab2' description='Projetos' isSelected={currentTab === 'tab2'} />
                <TabItem route='/#contact' value='tab3' description='Contato' isSelected={currentTab === 'tab3'} />
            </Tab.List>
        </Tab.Root>
    )
}