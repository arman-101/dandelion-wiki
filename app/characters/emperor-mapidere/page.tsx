'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Emperor Mapidere",
    image: "/characters/emperor-mapidere.png",
    introduction: "Emperor Mapidéré of House Xana was the ambitious and ruthless conqueror who first unified the Seven States of Dara into an empire. His reign, known as 'One Bright Heaven,' was marked by both grand, unifying projects and immense cruelty, planting the seeds of the rebellion that would ultimately lead to his dynasty's downfall.",
    infoBox: {
        aliases: "The Unifier",
        occupation: "Emperor of Dara",
        placeOfBirth: { text: "Xana", link: "/places/xana" },
        status: "Deceased",
        gender: "Male",
        relatives: "Crown Prince Pulo (son), Prince Loshi (son, later Emperor Erishi)",
        affiliation: "House of Xana, Xana Empire",
        nationality: { text: "Xana", link: "/places/xana" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "In his prime, Mapidéré was a powerful figure, but by the start of the series, he is seen as a gaunt and fearful man, his authority masking a deep-seated vulnerability. This was shockingly revealed to a young Kuni Garu during the kite attack on his procession." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/the-grace-of-kings#chapter-1" } },
        { type: 'text', content: " Mapidéré was a ruler of immense ambition and vision, driven by the belief that only a unified Dara could achieve lasting peace. However, his methods were brutal and tyrannical. He was deeply paranoid and possessed a streak of profound cruelty, as shown when he murdered his chatelain's lover and child simply for a perceived slight, an act that turned his closest friend, Goran Pira, into a secret enemy dedicated to his ruin." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 11, link: "/books/the-grace-of-kings#chapter-11" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Mapidéré's reign begins with the spectacular but terrifying Imperial Procession, which is violently interrupted by Luan Zya's kite attack, exposing the Emperor's vulnerability." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/the-grace-of-kings#chapter-1" } },
                { type: 'text', content: "Years later, aging and terminally ill, he has a powerful dream where the gods of Dara debate his legacy, foreshadowing the coming war. On his deathbed, his trusted friend Goran Pira and Prime Minister Lügo Crupo forge a decree, usurp the throne from the true heir, and install the pliable Prince Loshi as Emperor Erishi, setting the stage for the empire's collapse." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "Mapidéré's legacy looms large long after his death. His lost expedition to find the Land of the Immortals is revealed to have been captured by the Lyucu. The invaders used the knowledge and technology of the stranded Dara fleet to build their own city-ships and plan their invasion, twisting Mapidéré's quest for immortality into the instrument of Dara's near-destruction." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 47, link: "/books/the-wall-of-storms#chapter-47" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 49, link: "/books/the-wall-of-storms#chapter-49" } },
            ]
        },
    ]
};

export default function EmperorMapiderePage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_CHARACTERS]);
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <CharacterPageTemplate characterData={characterData} />
        </>
    );
}