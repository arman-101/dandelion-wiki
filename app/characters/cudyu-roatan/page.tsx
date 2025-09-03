import { Metadata } from 'next';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';

const characterData: Character = {
    name: "Cudyu Roatan",
    image: "/characters/cudyu-roatan.png",
    introduction: "Cudyu Roatan is the son of Pékyu Tenryo and brother to Tanvanaki. He is a ruthless and effective Lyucu commander, driven by a deep-seated belief in his people's superiority and their manifest destiny to conquer Dara.",
    infoBox: {
        aliases: "Prince Cudyu, Pékyu Cudyu",
        occupation: "Lyucu Commander, Pékyu",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Deceased",
        gender: "Male",
        relatives: [
            { text: "Pékyu Tenryo (father)", link: "/characters/pekyu-tenryo" },
            { text: "Tanvanaki (sister)", link: "/characters/tanvanaki" }
        ],
        affiliation: "Lyucu Empire",
        nationality: { text: "Lyucu", link: "/concepts/lyucu" },
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Cudyu embodies the harsh, martial traditions of the Lyucu. He is a skilled warrior and commander, but he lacks his father's strategic patience and his sister's political acumen. He is straightforwardly brutal and disdainful of Dara's culture, seeing it as soft and decadent." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 46, link: "/books/the-wall-of-storms#chapter-46" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "Along with his sister, Cudyu was part of the deception used to extract information from the captive Luan Zya, telling him a fabricated story about the fate of Mapidéré's expedition." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 46, link: "/books/the-wall-of-storms#chapter-46" } },
            ]
        },
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "As the leading commander in the Lyucu homeland, Cudyu was tasked with crushing the Agon rebellion. Guided by the traitor Volyu Aragoz, he led a devastating surprise attack on the secret Agon base in Kiri Valley, shattering the rebellion and forcing Princess Théra into exile." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 27, link: "/books/the-veiled-throne#chapter-27" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "After the death of his father and sister, Cudyu became Pékyu and prepared a massive reinforcement fleet to invade Dara. However, he was outmaneuvered by Princess Théra's final gambit. Believing she was dead, he held a grand ceremony to desecrate what he thought was her corpse. He opened a booby-trapped burial box, which exploded and killed him, ending his reign and the threat of a new invasion." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 13, link: "/books/speaking-bones#chapter-13" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 16, link: "/books/speaking-bones#chapter-16" } },
            ]
        },
    ]
};

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
    return generateCharacterMetadata(characterData);
}

export default function CudyuRoatanPage() {
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <CharacterNavigation prevPage={null} nextPage={null} returnLink={returnLink} />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}