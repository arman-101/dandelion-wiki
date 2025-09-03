import { Metadata } from 'next';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';

const characterData: Character = {
    name: "Ra Olu",
    image: "/characters/ra-olu.png",
    introduction: "Ra Olu was a Dara official and the regent of Dasu under Prince Timu. After the Lyucu invasion, he became a willing and influential collaborator, advising the invaders on how to control and suppress the conquered populace.",
    infoBox: {
        aliases: "The Collaborator",
        occupation: "Regent of Dasu, Advisor to the Lyucu",
        placeOfBirth: { text: "Dasu", link: "/places/dasu" },
        status: "Alive",
        gender: "Male",
        affiliation: "Dandelion Court, Lyucu Occupation Government",
        nationality: { text: "Dasu", link: "/places/dasu" },
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Ra Olu is a pragmatic and opportunistic bureaucrat. His primary motivation appears to be survival and the maintenance of order, regardless of who is in power. He readily applies his administrative skills to the service of the Lyucu, showing little moral compunction about betraying his own people." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 40, link: "/books/the-wall-of-storms#chapter-40" } },
    ],
    history: [
        {
            era: "The Wall of Storms",
            summary: [
                { type: 'text', content: "Ra Olu's story is a portrait of pragmatic collaboration in the face of overwhelming force." }
            ]
        },
        {
            era: "The Collaborator of Dasu",
            summary: [
                { type: 'text', content: "After the Lyucu conquered Dasu, Ra Olu quickly became a collaborator. He advised Pékyu Tenryo on methods of control, such as collective punishment and rewarding informants, and aided in the syncretization of the Dara and Lyucu gods. It was he who penned the ultimatum to the Dandelion Court on Tenryo's behalf, a letter Zomi Kidosu later deconstructed to find hidden intelligence." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 35, link: "/books/the-wall-of-storms#chapter-35" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 40, link: "/books/the-wall-of-storms#chapter-40" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 41, link: "/books/the-wall-of-storms#chapter-41" } },
            ]
        },
    ]
};

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
    return generateCharacterMetadata(characterData);
}

export default function RaOluPage() {
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <CharacterNavigation prevPage={null} nextPage={null} returnLink={returnLink} />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}