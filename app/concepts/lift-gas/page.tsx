

import type { Metadata } from 'next';
import { Concept } from '../../data/wiki-data';
import { generateConceptMetadata } from '@/app/utils/metadata';
import LiftGasClient from './LiftGasClient.tsx';

// --- DATA FOR LIFT GAS ---
const conceptData: Concept = {
    name: "Lift Gas",
    image: "/concepts/lift-gas.png",
    introduction: "Lift Gas is the rare, lighter-than-air element that makes airship flight possible. Found only in a single, sacred location in Dara, control of this resource is the ultimate key to military supremacy.",
    infoBox: {
        Type: "Natural Resource",
        Properties: "Lighter-than-air, Non-flammable",
        Source: { text: "Lake Dako, Mount Kiji", link: "/places/mount-kiji" },
        StrategicImportance: "Essential for airship construction",
    },
    details: [
        { type: 'text', content: "The gas bubbles up from the depths of Lake Dako within the crater of the volcano Mount Kiji. The secrets of its extraction were closely guarded by the Xana Empire, giving them a technological monopoly that allowed for their conquest of Dara." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 20, link: "/books/the-grace-of-kings#chapter-20" } },
        { type: 'text', content: "Because Mount Kiji is the only known source, its capture is a primary strategic objective in every major war. When Gin Mazoti captured Rui for Kuni Garu, it effectively crippled Mata Zyndu's ability to build new airships, a turning point in the civil war." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 43, link: "/books/the-grace-of-kings#chapter-43" } },
        { type: 'text', content: "When the Lyucu invaded, they learned of the gas's location from a duped Zato Ruthi and made seizing Mount Kiji a top priority." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 36, link: "/books/the-wall-of-storms#chapter-36" } },
    ]
};

export const metadata: Metadata = generateConceptMetadata(conceptData);

export default function LiftGasPage() {
    return <LiftGasClient conceptData={conceptData} />;
}