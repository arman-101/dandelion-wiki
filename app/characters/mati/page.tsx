'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR MATI ---
const characterData: Character = {
    name: "Mati",
    image: "/characters/mati.png",
    introduction: "Mati is a character who becomes involved in the resistance movement during the Lyucu occupation of Dara.",
    infoBox: {
      "Also known as": "Mati",
      "Affiliation": "Resistance Movement",
      "Role": "Resistance Fighter",
      "First appearance": "The Veiled Throne",
      "Related characters": [
        { text: "Dandelion", link: "/characters/dandelion" },
        { text: "Mozo Mu", link: "/characters/mozo-mu" },
        { text: "The Blossom Gang", link: "/concepts/the-blossom-gang" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Mati is a member of the resistance network who works alongside other fighters in the struggle against Lyucu occupation. Their specific role and background remain to be explored." }
    ],
    history: [
      {
        era: "The Veiled Throne",
        summary: [
          { type: "text" as const, content: "Mati appears in Ginpen during the Lyucu occupation, working with resistance figures like Dandelion and Mozo Mu. They contribute to the broader resistance effort against the occupying forces." }
        ]
      }
    ]
};

export default function MatiPage() {
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