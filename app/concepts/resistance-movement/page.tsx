

import type { Metadata } from 'next';
import { Concept } from '../../data/wiki-data';
import { generateConceptMetadata } from '@/app/utils/metadata';
import ResistanceMovementClient from './ResistanceMovementClient';

const conceptData: Concept = {
    name: "Resistance Movement",
    introduction: "The multifaceted, organized efforts of the people of Dara to resist and ultimately overthrow the Lyucu occupation. It was not a single, unified front but a collection of disparate groups employing various methods, from open warfare and espionage to cultural and political rebellion.",
    infoBox: {
        "Type": "Political & Military Movement",
        "Primary Goal": "Liberation of Dara",
        "Key Fronts": "Théra's Rebellion, Jia's Secret War, Phyro's Clandestine Army, The 'Bloodless Rebellion'",
    },
    details: [
        { type: 'text', content: "The resistance against the Lyucu took many forms across two continents. In Ukyu-Gondé, Princess Théra led a military guerrilla war, forging an alliance with the Agon to fight the Lyucu on their home turf." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 13, link: "/books/the-veiled-throne#chapter-13" } },
        { type: 'text', content: "In Dara, Empress Jia waged a secret war of economic sabotage and biological warfare, most notably by addicting the Lyucu to a cultivated strain of tolyusa and then cutting off the supply, causing their society to collapse." },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 3, link: "/books/speaking-bones#chapter-3" } },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 37, link: "/books/speaking-bones#chapter-37" } },
        { type: 'text', content: "Simultaneously, Emperor Phyro defied his mother's regency by secretly building a new garinafin army, while the Blossom Gang organized a grassroots populist movement to push for open war. The final act of resistance was a political one: the 'bloodless rebellion' led by Cogo Yelu and Soto Zyndu, who used mass-produced books exposing Jia's crimes to depose her and install a new, just ruler." },
        { type: 'ref', data: { book: "The Veiled Throne", chapter: 18, link: "/books/the-veiled-throne#chapter-18" } },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 18, link: "/books/speaking-bones#chapter-18" } },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 50, link: "/books/speaking-bones#chapter-50" } },
    ]
};

export const metadata: Metadata = generateConceptMetadata(conceptData);

export default function ResistanceMovementPage() {
    return <ResistanceMovementClient conceptData={conceptData} />;
}