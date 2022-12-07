import React from 'react';

function Intro() {
    return (
        <section id="intro" className="flex items-center justify-center flex-col pt-20 pb-6">
            <div className="text-center">
                <h1 className="text-4xl md:text-7xl text-black mb-1 md:mb-3 font-bold">
                    Jordy
                </h1>
                <p className="text-base md:text-xl mb-3 font-medium">
                    Junior Frontend Developer
                </p>
                <p className="text-sm max-w-xl mb-6 font-semibold">
                Mijn naam is Jordy Krudde, Ik ben 22 jaar oud en ik ben een junior web developer. 
                Ik kom net vers uit de opleiding applicatieontwikkelaar aan het graafschapcollege. 
                Op deze site kun je mijn vorige projecten en mijn skills bekijken.
                </p>
            </div>
        </section>
    );
}

export default Intro;