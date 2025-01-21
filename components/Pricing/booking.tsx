'use client'
import React from 'react'

const booking = () => {
    return (
        <section className='w-full bg-primary text-white'>
            <div className='flex justify-center items-center p-8'>
                <h2 className='text-xl'>Book Before 6 PM for Next Day</h2>
                <button onClick={() => window.location.href = 'https://wa.me/4379862492?text=I\'m%20here%20to%20book%20a%20ride.%0A%0APickup%20Address:%20[Your%20Pickup%20Address]%0ADropoff%20Address:%20[Your%20Dropoff%20Address]%0ADeadline%20to%20Reach:%20[Your%20Deadline%20Time]'} className='bg-white text-primary p-2 rounded-md ml-4'>Book Now</button>
            </div>
        </section>
    )
}

export default booking
