import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';

function Timeline() {
   return (
      <>
      <p className="text-center md:text-2xl mt-16 font-medium">
         Tijdlijn
      </p>
      <div className="flex flex-col md:flex-row justify-center my-12">
            <div className="w-full md:w-7/12">
               {timeline.map(item => (
                  <TimelineItem
                     year={item.year}
                     title={item.title}
                     duration={item.duration}
                     details={item.details} />
               ))}
            </div>
         </div>
         </>
   )
}

export default Timeline;