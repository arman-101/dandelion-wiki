'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Soto Zyndu",
    image: "/characters/soto-zyndu.png",
    introduction: "Soto Zyndu is the formidable and politically brilliant aunt of Mata Zyndu. Thought to have perished with the rest of her clan, she survives and re-emerges as a wise and influential advisor to Empress Jia, playing a crucial role from the shadows.",
    infoBox: {
        aliases: "The Housekeeper",
        occupation: "Noblewoman, Advisor, Housekeeper",
        status: "Deceased",
        gender: "Female",
        relatives: "Dazu Zyndu (father), Mata Zyndu (nephew)",
        affiliation: "House of Zyndu, Dandelion Court",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Soto is an older woman with a calm and unassuming demeanor, which she uses to mask a sharp, strategic mind. She possesses the deep wisdom of the Zyndu clan but without the martial rigidity of its men. She is a master of 'soft power,' understanding that true influence is often wielded through quiet advice, careful observation, and the subtle management of relationships. She is deeply practical and patient, teaching Jia the importance of seeing politics as a long game." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 32, link: "/books/grace-of-kings#chapter-32" } },
    ],
    history: [
        {
            era: "Surviving the Purge",
            summary: [
                { type: 'text', content: "When the Xana Empire massacred the Zyndu clan, Soto was one of the few who managed to escape. She went into hiding for decades, living a quiet, anonymous life and observing the rise and fall of the empire from afar." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 32, link: "/books/grace-of-kings#chapter-32" } },
            ]
        },
        {
            era: "Advisor to the Empress",
            summary: [
                { type: 'text', content: "During the Chrysanthemum-Dandelion War, she revealed herself by taking a position as a housekeeper in Jia Matiza's household. She quickly became Jia's most trusted confidante and mentor, teaching her the intricacies of court politics and strategy. It was Soto who advised Jia on how to manage her complex relationship with Kuni and how to assert her own political power." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 37, link: "/books/grace-of-kings#chapter-37" } },
            ]
        },
    ]
};

export default function SotoZynduPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <CharacterPageTemplate characterData={characterData} />
        </>
    );
}