import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character } from '../../data/wiki-data';

const characterData: Character = {
    name: "Phin Zyndu",
    image: "/characters/phin-zyndu.png",
    introduction: "Phin Zyndu was the uncle of Mata Zyndu and the acting patriarch of the Zyndu clan following its near-destruction. He was the guardian of Mata's legacy and the driving force behind his quest for vengeance.",
    infoBox: {
        aliases: "None",
        occupation: "Advisor, Acting Head of House Zyndu",
        status: "Deceased",
        gender: "Male",
        relatives: "Dazu Zyndu (father), Soto Zyndu (sister), Mata Zyndu (nephew)",
        affiliation: "House of Zyndu, Tiro Rebellion",
        nationality: { text: "Cocru", link: "/places/cocru" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Phin is described as a large, powerful man, though not as immense as his nephew Mata. He is a stern and serious individual, consumed by the tragedy of his family and dedicated entirely to their restoration. His personality is defined by a deep-seated grief and a relentless drive for vengeance, which he instills in Mata from a young age. He is a traditionalist who believes deeply in the honor codes of the old nobility." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 2, link: "/books/the-grace-of-kings#chapter-2" } },
    ],
    history: [
        {
            era: "Guardian of the Legacy",
            summary: [
                { type: 'text', content: "Phin was one of the few survivors of the Xana massacre of the Zyndu clan. He rescued the infant Mata and raised him in exile on the Tunoa Islands, training him to be a peerless warrior and constantly reminding him of his duty to avenge their family. His final words to Mata before his own death were 'Do not forget.'" },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 2, link: "/books/the-grace-of-kings#chapter-2" } },
            ]
        },
        {
            era: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "He stood by Mata's side when he reclaimed their ancestral castle and served as his primary advisor during the early stages of the rebellion. However, his traditionalist views often clashed with the pragmatic realities of the war. He became infatuated with Princess Kikomi of Amu, a passion that would prove to be his undoing. He was murdered by Kikomi as part of her secret deal with Kindo Marana to sow discord in the rebel leadership." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 27, link: "/books/the-grace-of-kings#chapter-27" } },
            ]
        },
    ]
};

export default function PhinZynduPage() { return <CharacterPageTemplate characterData={characterData} />; }