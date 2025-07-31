'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const characterData: Character = {
    name: "Mata Zyndu",
    image: "/characters/mata-zyndu.png",
    introduction: "Mata Zyndu is the last son of the legendary Zyndu Clan and one of the two central protagonists of The Grace of Kings. A peerless warrior driven by honor and vengeance, his path is inextricably linked with that of his sworn brother and eventual rival, Kuni Garu.",
    infoBox: {
        aliases: "The Chrysanthemum, Hegemon of Dara, Butcher of Wolf's Paw",
        occupation: "Marshal of Cocru, Hegemon",
        placeOfBirth: { text: "Tunoa Islands", link: "/places/tunoa-islands" },
        status: "Deceased",
        gender: "Male",
        relatives: "Dazu Zyndu (grandfather), Soto Zyndu (aunt), Phin Zyndu (uncle)",
        affiliation: "House of Zyndu, Tiro Rebellion",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Mata is a physical giant, standing seven and a half feet tall even as a youth, with a powerful, muscular build. His most striking features are his coal-black, double-pupiled eyes, a rare trait said to mark a man for a great destiny." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 2, link: "/books/grace-of-kings#chapter-2" } },
        { type: 'text', content: " He is the living embodiment of the chrysanthemum: noble, proud, and unbending. Mata is driven by a rigid code of honor and a deep love for his family's legacy. While he is a brilliant battlefield commander, he is often naive in matters of politics and human nature, viewing the world in stark terms of right and wrong, honor and betrayal. This uncompromising worldview is both his greatest strength and his fatal flaw." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 21, link: "/books/grace-of-kings#chapter-21" } },
    ],
    history: [
        {
            era: "Early Life",
            summary: [
                { type: 'text', content: "Raised in exile on the Tunoa Islands by his uncle Phin, Mata grew up hearing tales of his grandfather's glory and the betrayal that led to his family's slaughter. He was trained from birth for a single purpose: to restore the honor of the Zyndu name and avenge his ancestors." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 2, link: "/books/grace-of-kings#chapter-2" } },
            ]
        },
        {
            era: "Rebellion against Xana Empire",
            summary: [
                { type: 'text', content: "At the start of the rebellion, Mata reclaimed his ancestral castle and quickly established himself as the most formidable warrior in Dara. He became Marshal of Cocru and the military leader of the Tiro states. His friendship and sworn brotherhood with Kuni Garu formed the heart of the rebellion, with his martial prowess perfectly complementing Kuni's strategic cunning." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 7, link: "/books/grace-of-kings#chapter-7" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 19, link: "/books/grace-of-kings#chapter-19" } },
            ]
        },
        {
            era: "Chrysanthemum-Dandelion War",
            summary: [
                { type: 'text', content: "After the fall of Pan, Mata felt betrayed by Kuni and believed his glory had been stolen. He declared himself Hegemon and exiled Kuni, sparking a new civil war. As a ruler, Mata was often heavy-handed, relying on force and honor where subtlety was needed. His reign was marked by incredible military victories, but also by horrific atrocities like the 'Slaughter at Wolf's Paw.' Ultimately, he was outmaneuvered by Kuni's unconventional strategies and made his last stand at Rana Kida, taking his own life rather than surrendering." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 33, link: "/books/grace-of-kings#chapter-33" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 31, link: "/books/grace-of-kings#chapter-31" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 50, link: "/books/grace-of-kings#chapter-50" } },
            ]
        },
    ]
};

export default function MataZynduPage() {
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