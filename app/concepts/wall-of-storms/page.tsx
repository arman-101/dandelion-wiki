'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Concept, ALL_CONCEPTS } from '@/app/data/wiki-data';
import ConceptPageTemplate from '@/app/components/ConceptPageTemplate';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR THIS SPECIFIC CONCEPT PAGE ---
const conceptData: Concept = {
    name: "The Wall of Storms",
    introduction: "A seemingly impassable, continent-spanning superstorm that has isolated the lands of Dara from the rest of the world for millennia.",
    image: "/concepts/wall-of-storms.png",
    infoBox: {
        Type: "Meteorological & Geographical Phenomenon",
        Location: "The Fathomed Sea, between Dara and Ukyu",
        Significance: "Cultural isolation, military barrier, central plot driver",
        FirstSuccessfullyCrossedBy: { text: "The Lyucu", link: "/concepts/lyucu" },
        RelatedBooks: [
            { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
            { text: "The Veiled Throne", link: "/books/the-veiled-throne" }
        ],
    },
    details: [
        { type: 'text', content: "The Wall of Storms is not merely a storm but a permanent fixture of the planet's climate, a continuous band of violent winds, colossal waves, and blinding rain. For most of Daran history, it was considered utterly impassable, a divine barrier that defined the known world." },
        { type: 'text', content: "Its existence shaped Daran culture, technology, and philosophy, fostering a sense of exceptionalism and security. The science and magic within Dara developed without outside influence, leading to unique innovations like the great airships." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 1, link: "/books/the-wall-of-storms#prologue" } },
        { type: 'text', content: " The storm's impassability was challenged and eventually overcome by the Lyucu people, whose deep understanding of naval engineering and ocean currents allowed them to find a 'seasonal corridor' through the tempest. This achievement marked the end of Dara's isolation and the beginning of a brutal invasion, fundamentally altering the course of history for both continents." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 27, link: "/books/the-wall-of-storms#chapter-27" } },
    ],
    // The 'link' property that caused the error has been removed.
};


// --- PAGE COMPONENT ---
export default function WallOfStormsPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CONCEPTS);
    const returnLink = { title: "Return to All Concepts", path: "/concepts" };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <ConceptPageTemplate conceptData={conceptData} />
        </>
    );
}