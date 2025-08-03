'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR THÉCA KIMO ---
const characterData: Character = {
    name: "Théca Kimo",
    image: "/characters/kuni-garu.png",
    introduction: "Théca Kimo is a pragmatic Duke of Géfica who defects from Mata Zyndu's side to join Kuni Garu during the Chrysanthemum-Dandelion War.",
    infoBox: {
      "Also known as": "Duke Kimo",
      "Affiliation": "Géfica, later Dandelion Dynasty",
      "Role": "Noble and Military Commander",
      "First appearance": "The Grace of Kings",
      "Related characters": [
        { text: "Kuni Garu", link: "/characters/kuni-garu" },
        { text: "Mata Zyndu", link: "/characters/mata-zyndu" },
        { text: "Gin Mazoti", link: "/characters/gin-mazoti" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Théca Kimo is a pragmatic and calculating noble who understands the realities of power and survival. His famous quote 'You pick the stronger gang or you're lost' reflects his practical approach to politics and warfare." }
    ],
    history: [
      {
        era: "The Grace of Kings",
        summary: [
          { type: "text" as const, content: "As one of Mata Zyndu's key allies and a Duke of Géfica, Théca Kimo initially supports the Hegemon's cause during the Chrysanthemum-Dandelion War." },
          { type: "text" as const, content: "However, as Kuni Garu's forces begin to gain the upper hand and make steady progress across the Big Island, Kimo pragmatically defects to Kuni's side, viewing the conflict as a gang war and recognizing Kuni's faction as the stronger." },
          { type: "text" as const, content: "His defection helps shift the balance of power in the war and demonstrates the growing momentum of Kuni's cause, as even Mata's closest allies begin to abandon him." }
        ]
      }
    ]
};

export default function ThecaKimoPage() {
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