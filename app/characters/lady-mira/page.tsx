'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR LADY MIRA (WITH FULL INLINE REFERENCES) ---
const characterData: Character = {
    name: "Lady Mira",
    image: "/characters/lady-mira.png", // NOTE: You will need to create this image file
    introduction: "Lady Mira is a gentle embroiderer and songstress from Tunoa who becomes Mata Zyndu's closest confidante during the final stages of the war. Described as the only woman who truly understands him, she represents a connection to his lost home and a path of peace and introspection that stands in stark contrast to his life of violence.",
    infoBox: {
        aliases: "Mira",
        occupation: "Embroiderer, Songstress, Confidante to the Hegemon",
        placeOfBirth: { text: "Tunoa Islands", link: "/places/tunoa-islands" },
        status: "Deceased",
        gender: "Female",
        significantOther: [
            { text: "Mata Zyndu", link: "/characters/mata-zyndu" }
        ],
        relatives: [
            { text: "Mado (brother)", link: "" },
        ],
        affiliation: "Hegemon's Court",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Mira is depicted as a slender and tall woman with a dark complexion and a beautiful, haunting singing voice. Her personality is defined by a quiet strength, deep empathy, and a profound sense of introspection. She is unafraid to speak her mind to Mata, challenging his views on glory and vengeance with a gentle but firm wisdom. She finds satisfaction not in grand deeds, but in the simple, creative act of her embroidery, seeing it as a parallel to the way Mata shapes the world, albeit on a much smaller and more peaceful scale." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 44, link: "/books/the-grace-of-kings#chapter-44" } },
    ],
    history: [
        {
            era: "Meeting the Hegemon (The Grace of Kings)",
            summary: [
                { type: 'text', content: "Mira travels to the smoldering ruins of Pan to find her brother, Mado, a soldier who had followed Mata Zyndu from Tunoa. She discovers he died during the chaotic looting of Emperor Mapidéré's Mausoleum. As she sings a traditional Tunoan dirge for him by the side of the road, she attracts the attention of Mata himself. Moved by the sound of his homeland and her profound grief, Mata takes her into his household, offering his protection." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 33, link: "/books/the-grace-of-kings#chapter-33" } },
                { type: 'text', content: " In the Hegemon's court, she becomes an object of fascination and jealousy, but she sees that Mata's interest in her stems not from desire, but from a deep longing for home. She is later visited by a disguised Kiji, who gives her the bone dagger used to kill Phin Zyndu and urges her to 'see him for who he really is,' tempting her to assassinate the Hegemon." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 44, link: "/books/the-grace-of-kings#chapter-44" } },
            ]
        },
        {
            era: "Confidante and Tragic End (The Grace of Kings)",
            summary: [
                { type: 'text', content: "Mira becomes the only person who can speak to Mata with honesty, refusing to be intimidated by his power. She gently challenges his brutal actions and his all-consuming quest for glory, trying to guide him toward a more peaceful path. She helps him understand that his cruelty is not his true nature, but a role he plays based on others' expectations. During the final standoff at Rana Kida, as Mata's army is surrounded and defeat is certain, Mira takes her own life with the bone dagger given to her by Kiji. She cannot bear to watch him die and chooses to join him in the afterlife. Her suicide is the final act that breaks Mata's spirit, leading him to make his own final, suicidal charge." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 50, link: "/books/the-grace-of-kings#chapter-50" } },
            ]
        },
    ]
};

export default function LadyMiraPage() {
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