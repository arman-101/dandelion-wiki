import { Metadata } from 'next';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';

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
        relatives: [
            { text: "Crown Prince Pulo (son)", link: "" },
            { text: "Emperor Erishi (son)", link: "/characters/emperor-erishi" }
        ],
        affiliation: "House of Xana, Xana Empire",
        nationality: { text: "Xana", link: "/places/xana" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "By the start of the series, Mapidéré is a gaunt and fearful old man, his authority masking a deep-seated vulnerability. This was shockingly revealed to a young Kuni Garu during Luan Zya's kite attack on his procession, where he was seen not as a god, but as a wrinkled, fearful man." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/the-grace-of-kings#chapter-1" } },
        { type: 'text', content: "Mapidéré was a ruler of immense ambition, driven by the belief that only a unified Dara could achieve lasting peace. However, his methods were brutal and tyrannical. He was deeply paranoid and possessed a streak of profound cruelty, as shown when he murdered his chatelain's lover and child for a perceived betrayal. This act turned his closest friend, Goran Pira, into a secret enemy dedicated to his dynasty's ruin." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 11, link: "/books/the-grace-of-kings#chapter-11" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Emperor Mapidéré's reign is depicted in its final years, as the consequences of his tyranny come to fruition, leading directly to his dynasty's collapse upon his death." }
            ]
        },
        {
            era: "A Failing Reign",
            summary: [
                { type: 'text', content: "Mapidéré's reign is introduced through the spectacular but terrifying Imperial Procession, which is violently interrupted by Luan Zya's kite attack. The assault shatters the Emperor's aura of invincibility." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 1, link: "/books/the-grace-of-kings#chapter-1" } },
                { type: 'text', content: "Years later, aging and terminally ill from failed alchemical immortality treatments, he has a powerful dream where the gods of Dara debate his legacy and prophesize a new war." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
                { type: 'text', content: "On his deathbed, his trusted friend Goran Pira and Prime Minister Lügo Crupo conspire against him. They forge a decree, usurp the throne from the true heir, Crown Prince Pulo, and install the pliable Prince Loshi as Emperor Erishi, setting the stage for the empire's implosion." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 5, link: "/books/the-grace-of-kings#chapter-5" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "Long after his death, the full, disastrous consequences of Mapidéré's actions are revealed to have reached far beyond the shores of Dara." }
            ]
        },
        {
            era: "The Lost Expedition",
            summary: [
                { type: 'text', content: "Mapidéré's secret expedition to find a fabled Land of the Immortals was not lost at sea as believed. The fleet was captured by the cunning Lyucu people, who feigned submission." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 49, link: "/books/the-wall-of-storms#chapter-49" } },
                { type: 'text', content: "After years of absorbing Dara's advanced knowledge, the Lyucu slaughtered the expedition and used the stolen technology to build their own city-ships. Mapidéré's obsessive quest for eternal life ultimately provided the means for a foreign power to nearly destroy the very empire he had built." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 47, link: "/books/the-wall-of-storms#chapter-47" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 49, link: "/books/the-wall-of-storms#chapter-49" } },
            ]
        },
    ]
};

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
    return generateCharacterMetadata(characterData);
}

export default function EmperorMapiderePage() {
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <CharacterNavigation prevPage={null} nextPage={null} returnLink={returnLink} />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}