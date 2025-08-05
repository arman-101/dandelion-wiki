'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR LAKE DAKO ---
const placeData: Place = {
    name: "Lake Dako",
    image: "/places/lake-dako.png",
    introduction: "Lake Dako is a mystical, beautiful lake located within the crater of the volcano Mount Kiji on the island of Rui. It is the sole and irreplaceable source of the magical lift gas that enables Dara's airships to fly, making it one of the most strategically vital locations in the world.",
    infoBox: {
        type: "Crater Lake",
        location: { text: "Mount Kiji, Rui", link: "/places/mount-kiji" },
        continent: { text: "Dara", link: "/places/dara" },
        KeyResource: { text: "Lift Gas", link: "/concepts/lift-gas" }
    },
    geography: [
        { type: 'text', content: "Situated at the summit of a volcano, Lake Dako is a place of serene and otherworldly beauty. The unique geological or supernatural properties of the lake cause it to generate a seemingly endless supply of a gas that is lighter than air." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/the-grace-of-kings#chapter-20" } },
    ],
    culture: [
        { type: 'text', content: "The lake and the mountain are sacred to Kiji, the god of the air. The Mount Kiji Air Base, built on its shores, is the center of Dara's aerial power. Control of this location is synonymous with control of the skies." },
    ],
    history: [
        {
            event: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "The Xana Empire's power was built on their control of Lake Dako and its lift gas. During the rebellion, the Xana commander Kindo Marana traveled to the Mount Kiji Air Base to find it in a state of corrupt disrepair. He ruthlessly purged the incompetent administration to restore the flow of lift gas and rebuild the imperial air force, recognizing that control of the lake was essential to the war effort." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/the-grace-of-kings#chapter-20" } },
            ]
        },
        {
            event: "The Lyucu War",
            summary: [
                { type: 'text', content: "After the Lyucu conquered Rui, they took control of Mount Kiji and Lake Dako. The desecration of this sacred site was a source of great anger for the god Kiji and a major strategic blow to the people of Dara. The struggle to reclaim the source of air power was a central element of the war." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 40, link: "/books/the-wall-of-storms#chapter-40" } },
            ]
        },
    ]
};

export default function LakeDakoPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_PLACES]);
    const returnLink = { title: 'Return to All Places', path: '/places' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <PlacePageTemplate placeData={placeData} />
        </>
    );
}