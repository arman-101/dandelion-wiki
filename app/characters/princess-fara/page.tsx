import { Metadata } from 'next';

import PageTemplate, { convertCharacterData } from '../../components/layout/PageTemplate';
import { generateCharacterMetadata } from '@/app/utils/metadata';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { CharacterNavigation } from '@/app/components/layout/PageNavigation';

const characterData: Character = {
    name: "Princess Fara",
    image: "/characters/princess-fara.png",
    introduction: "Princess Fara is the youngest child of Emperor Ragin and Consort Risana, raised by Empress Jia. A talented artist and inventor, she operates under the alias 'Dandelion,' becoming the heart of a grassroots cultural renaissance in Ginpen and, ultimately, the unlikely heir to a fractured empire.",
    infoBox: {
        aliases: "Dandelion, Empress Shizona",
        occupation: "Princess, Artist, Inventor, Empress of Dara",
        placeOfBirth: { text: "Pan", link: "/places/pan" },
        status: "Alive",
        gender: "Female",
        significantOther: { text: "Kinri (Savo Ryoto)", link: "/characters/kinri" },
        relatives: [
            { text: "Kuni Garu (father)", link: "/characters/kuni-garu" },
            { text: "Consort Risana (mother)", link: "/characters/consort-risana" },
            { text: "Jia Matiza (adoptive mother)", link: "/characters/jia-matiza" },
            { text: "Prince Phyro (brother)", link: "/characters/prince-phyro" },
            { text: "Prince Timu (brother, by adoption)", link: "/characters/prince-timu" },
            { text: "Princess Théra (sister, by adoption)", link: "/characters/princess-thera" }
        ],
        affiliation: "Dandelion Court, The Blossom Gang",
        nationality: "Daran",
        firstAppeared: { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Fara is intelligent, creative, and empathetic. She possesses a deep curiosity about the world, which manifests in her artistic and scientific pursuits. She has a strong sense of justice and a deep connection to the common people, often using her art and influence to help them. Her romance with the Lyucu refugee Kinri challenges her worldview and places her at the heart of the series' core conflicts of identity and culture." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 15, link: "/books/the-veiled-throne#chapter-15" } },
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: 'text', content: "Under the guise of 'Dandelion,' Fara traveled to Ginpen and allied with the brilliant outcasts of the Blossom Gang. She fell in love with Kinri, a young Lyucu refugee. Their investigation into a corrupt merchant led them to the secret facility, Last Bite, where Kinri's true identity was revealed, creating a painful rift between them." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 28, link: "/books/the-veiled-throne#chapter-28" } },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 47, link: "/books/the-veiled-throne#chapter-47" } },
            ]
        },
        {
            era: "Speaking Bones",
            summary: [
                { type: 'text', content: "Fara reunited with Kinri (now Savo Ryoto) and played a key role in the resistance against her mother's regency, using her insight to help invent a revolutionary printing press. After the deaths of her brothers and the deposing of Empress Jia, a reluctant Fara was persuaded by Zomi Kidosu to accept the throne. As Empress Shizona, she forged a difficult but just peace with the Lyucu, ushering in a 'Reign of Enduring Spring.'" },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 34, link: "/books/speaking-bones#chapter-34" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 49, link: "/books/speaking-bones#chapter-49" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 53, link: "/books/speaking-bones#chapter-53" } },
                { type: 'ref', data: { book: "Speaking Bones", chapter: 57, link: "/books/speaking-bones#chapter-57" } },
            ]
        },
    ]
};

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
    return generateCharacterMetadata(characterData);
}

export default function PrincessFaraPage() {
    const returnLink = { title: 'Return to All Characters', path: '/characters' };

    return (
        <>
            <CharacterNavigation prevPage={null} nextPage={null} returnLink={returnLink} />
            <PageTemplate pageData={convertCharacterData(characterData)} infoBoxTitle="Biographical Information" />
        </>
    );
}