import React from 'react'
import SectionTitle from './SectionTitle'
import services from '../data/services.jsx'
import Service from './Service.jsx'


function Services () {
    console.log('services:', services);
    return (
        <div className='py-12'>
          <SectionTitle>My Services</SectionTitle>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {services && services.length > 0 ? (
              services.map(service => (
                <Service
                  key={service.title}
                  title={service.title}
                  icon={service.icon}
                  description={service.description}
                />
              ))
            ) : (
              <div>No services available</div>
            )}
          </div>
        </div>
      );
    }
    

export default Services
