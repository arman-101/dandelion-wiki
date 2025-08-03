'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR WIDOW WASU ---
const characterData: Character = {
    name: "Widow Wasu",
    image: "/characters/kuni-garu.png",
    introduction: "Widow Wasu is a mysterious figure who becomes involved in the resistance movement during the Lyucu occupation of Dara.",
    infoBox: {
      "Also known as": "Wasu",
      "Affiliation": "Resistance Movement",
      "Role": "Resistance Fighter",
      "First appearance": "The Veiled Throne",
      "Related characters": [
        { text: "Tiphan Huto", link: "/characters/tiphan-huto" },
        { text: "Mozo Mu", link: "/characters/mozo-mu" },
        { text: "The Blossom Gang", link: "/concepts/the-blossom-gang" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Widow Wasu is a mysterious and resourceful figure who operates within the resistance network. Her background and true identity remain largely unknown, but she proves to be a valuable ally to the resistance cause." }
    ],
    history: [
      {
        era: "The Veiled Throne",
        summary: [
          { type: "text" as const, content: "Widow Wasu appears in Ginpen during the Lyucu occupation, working alongside resistance fighters like Tiphan Huto and Mozo Mu. She becomes involved in the activities of the Blossom Gang, a key resistance organization." },
          { type: "text" as const, content: "Her role in the resistance demonstrates the diverse network of individuals who worked to undermine Lyucu rule, from all walks of life and backgrounds." }
        ]
      }
    ]
};

export default function WidowWasuPage() {
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