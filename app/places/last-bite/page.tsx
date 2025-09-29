

import type { Metadata } from 'next';
import { Place } from '../../data/wiki-data';
import { generatePlaceMetadata } from '@/app/utils/metadata';
import LastBiteClient from './LastBiteClient';

// --- DATA FOR LAST BITE ---
const placeData: Place = {
    name: "Last Bite",
    image: "/places/last-bite.png",
    introduction: "Last Bite is a secret Imperial research facility that becomes the site of a shocking revelation, fundamentally altering the lives of several key characters and the political landscape of Dara.",
    infoBox: {
        Type: "Secret Research Facility",
        Location: "Dara",
        Significance: "Revelation of Kinri's and Zomi's parentage",
        FirstAppearance: { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        KeyEvents: "Infiltration by the Blossom Gang"
    },
    geography: [
        { type: 'text', content: "The location of Last Bite is clandestine, known only to the highest echelons of the Dandelion Court's intelligence services. It is a place of secrets and advanced research." },
    ],
    culture: [
        { type: 'text', content: "The 'culture' of Last Bite is one of secrecy and scientific inquiry. It houses sensitive information and projects vital to the security and future of the Dandelion Dynasty." },
    ],
    history: [
        {
            event: "The Family Revelation",
            summary: [
                { type: 'text', content: "After uncovering Tiphan Huto's criminal enterprise, the Blossom Gang and Princess Fara decided to infiltrate Last Bite, believing it held secrets about Marshal Gin Mazoti's death. Once inside, Kinri, disguised as his half-sister Zomi Kidosu, discovered a secret study belonging to the real Zomi." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 46, link: "/books/the-veiled-throne#chapter-46" } },
                { type: 'text', content: "In a dramatic confrontation, Zomi herself appeared. Through the turtle shell given to him by his mother, Kinri and Zomi discovered they were long-lost half-siblings, both fathered by Oga Kidosu. The revelation forced Kinri to embrace his true identity as Savo Ryoto and become a fugitive, shattering his romance with Fara." },
                { type: 'ref', data: { book: "The Veiled Throne", chapter: 47, link: "/books/the-veiled-throne#chapter-47" } },
            ]
        },
    ]
};

export const metadata: Metadata = generatePlaceMetadata(placeData);

export default function LastBitePage() {
    return <LastBiteClient placeData={placeData} />;
}