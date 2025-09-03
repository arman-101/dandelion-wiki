import { Metadata } from 'next';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';

const characterData: Character = {
    name: "Volyu Aragoz",
    image: "/characters/volyu-aragoz.png",
    introduction: "Volyu Aragoz was the treacherous uncle of Takval Aragoz and the chieftain of the exiled Agon tribe at the Sliyusa Ki oasis. He was a collaborator with the Lyucu, secretly betraying his own people to maintain his precarious position of power.",
    infoBox: {
        aliases: "Chief of Sliyusa Ki",
        occupation: "Agon Chieftain, Collaborator",
        placeOfBirth: { text: "Ukyu-Gondé", link: "/places/ukyu-gonde" },
        status: "Alive",
        gender: "Male",
        relatives: [
            { text: "Takval Aragoz (nephew)", link: "/characters/takval-aragoz" },
            { text: "Souliyan Aragoz (sister)", link: "/characters/souliyan-aragoz" }
        ],
        affiliation: "Agon (Exiled), Lyucu Empire",
        nationality: { text: "Agon", link: "/concepts/agon" },
        firstAppeared: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Volyu is portrayed as a proud and hostile leader. He is deeply resentful of the Lyucu but chooses collaboration out of a sense of pragmatism and a desire to preserve his own power. He is treacherous and untrustworthy, viewing Théra and her Dara followers with suspicion and disdain." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 13, link: "/books/the-veiled-throne#chapter-13" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "When Théra and Takval's expedition reached his oasis, Volyu was revealed to have been betraying Agon rebels to the Lyucu for years. Théra and Takval staged a coup, deposing him but sparing his life to use him as a double agent." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 13, link: "/books/the-veiled-throne#chapter-13" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 14, link: "/books/the-veiled-throne#chapter-14" } },
                { type: 'text', content: "In an act of ultimate betrayal, he later guided the Lyucu forces to the secret rebel base in Kiri Valley, leading to its destruction." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 27, link: "/books/the-veiled-throne#chapter-27" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "After Théra's forces defeated the Lyucu, Volyu reappeared at a grand council of Agon chiefs. He accused Théra of murdering Takval and betraying their people, exploiting the chiefs' xenophobia to turn them against her. His actions shattered the new Agon alliance and plunged the region into civil war." },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 33, link: "/books/speaking-bones#chapter-33" } },
            ]
        },
    ]
};

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
    return generateCharacterMetadata(characterData);
}

export default function VolyuAragozPage() {
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <CharacterNavigation prevPage={null} nextPage={null} returnLink={returnLink} />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}