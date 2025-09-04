'use client';
import { usePathname } from 'next/navigation';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Consort Risana",
    image: "/characters/consort-risana.png",
    introduction: "Lady Risana is an enigmatic illusionist and Kuni Garu's second wife, later known as Consort Risana. She is a woman of great wisdom, grace, and subtle power, representing the more intuitive and martial aspects of the Dandelion Court.",
    infoBox: {
        aliases: "Lady Risana",
        occupation: "Illusionist, Imperial Consort",
        placeOfBirth: "Cocru",
        status: "Deceased",
        gender: "Female",
        significantOther: { text: "Kuni Garu", link: "/characters/kuni-garu" },
        relatives: [
            { text: "Prince Phyro (son)", link: "/characters/prince-phyro" },
            { text: "Princess Fara (daughter)", link: "/characters/princess-fara" }
        ],
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Risana is described as exquisitely beautiful, with a serene and mysterious demeanor. She is a master of illusions, or 'smokecraft,' using herbal smoke not to deceive, but to clear the confusion from people's minds and help them see the truth." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 38, link: "/books/the-grace-of-kings#chapter-38" } },
        { type: 'text', content: "She is deeply insightful, possessing a keen understanding of human nature and the unspoken currents of emotion and power. Unlike the systematic Empress Jia, Risana's wisdom is more intuitive and empathetic. She becomes the de facto leader of the 'Swords,' a court faction representing the military old guard, advocating for the values of the heroes who founded the empire." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/the-wall-of-storms#chapter-8" } },
    ],
    history: [
        {
            era: "The Grace of Kings",
            summary: [
                { type: 'text', content: "Risana emerged during the Chrysanthemum-Dandelion War, becoming a crucial advisor and source of strength for Kuni Garu." }
            ]
        },
        {
            era: "A New Alliance",
            summary: [
                { type: 'text', content: "Kuni met Risana in a secluded cottage while fleeing Mata Zyndu's patrols. She gave him shelter and, through her unique art, helped him cut through the 'smoke' of his own self-doubt, restoring his confidence. Recognizing her wisdom, and on the strategic advice of Jia Matiza, Kuni asked her to become his second wife." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 38, link: "/books/the-grace-of-kings#chapter-38" } },
                { type: 'text', content: "She worked with Marshal Gin Mazoti to establish a women's auxiliary corps, a key innovation for Kuni's army in Dasu." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 41, link: "/books/the-grace-of-kings#chapter-41" } },
                { type: 'text', content: "In the final battle against Mata Zyndu, Risana orchestrated a clever and decisive psychological ploy, bringing the soldiers' wives and mothers to the battlefield to sing songs of peace, which shattered the enemy's morale and secured Kuni's victory." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 50, link: "/books/the-grace-of-kings#chapter-50" } },
            ]
        },
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "As Imperial Consort, Risana's influence grew, but it also placed her on a collision course with the ruthlessly pragmatic Empress Jia." }
            ]
        },
        {
            era: "Consort, Strategist, and Sacrifice",
            summary: [
                { type: 'text', content: "As mother of Prince Phyro and Princess Fara, Risana became the respected leader of the court's military faction, providing a crucial balance to Empress Jia's bureaucratic approach." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/the-wall-of-storms#chapter-8" } },
                { type: 'text', content: "Her strategic mind proved vital once again during the rebellion in Arulugi, where her smokecraft created phantom armies and secured a stunning Imperial victory. She and Phyro also uncovered the military potential of the silkmotic force." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 32, link: "/books/the-wall-of-storms#chapter-32" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 55, link: "/books/the-wall-of-storms#chapter-55" } },
                { type: 'text', content: "After Emperor Ragin's death, Empress Regent Jia saw Risana as a political rival. Jia confronted Risana and manipulated her into a choice: drink 'poisoned' tea to ensure a stable court, or risk civil war. To protect her son's future and prevent further conflict, Risana accepted her tragic fate, ceding control of the empire to Jia and taking her own life." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 62, link: "/books/the-wall-of-storms#chapter-62" } },
            ]
        },
    ]
};

export default function ConsortRisanaPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_CHARACTERS]);
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <CharacterNavigation 
                prevPage={prevPage} 
                nextPage={nextPage} 
                returnLink={returnLink} 
            />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}