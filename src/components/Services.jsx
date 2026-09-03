import React from 'react'
import Title from './Title'
import ServiceCard from './Services.Card'
import assets from '../assets/assets'

const Services = () => {
    const serviceData = [
    {
        title: 'Advertising',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        icon: assets.ads_icon
    },
    {
        title: 'Content Marketing',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        icon: assets.marketing_icon
    },
    {
        title: 'Search Engine Optimization',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        icon: assets.content_icon
    },
    {
        title: 'Search Engine Optimization',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        icon: assets.social_icon
    }
    ]

    return (
        <div id="services" className='relative flex flex-col items-center gap-7 px-4 
        sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

            <img src={assets.bgImage2} alt='' className='absolute -top-110 -left-70 -z-10
            dark:hidden' />

            <Title title="How we can help?" subTitle="From strategy to execution, we craft digital
            solution that move your businees forward" />

            {/* Service Card */}

        <div className='flex flex-col md:grid grid-cols-2'>
            {serviceData.map((service, index) => {
                return <ServiceCard key={index} service={service} index={index} />
            })}

        </div>

        </div>
        
    )
}

export default Services
