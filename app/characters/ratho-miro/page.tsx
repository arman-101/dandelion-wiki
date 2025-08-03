'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR RATHO MIRO ---
const characterData: Character = {
    name: "Ratho Miro",
    image: "/characters/kuni-garu.png",
    introduction: "Ratho Miro is the younger brother of Dafiro Miro and one of the first to shed blood in the rebellion against the Xana Empire.",
    infoBox: {
      "Also known as": "Ratho",
      "Affiliation": "Cocru Rebellion",
      "Role": "Rebel Fighter",
      "First appearance": "The Grace of Kings",
      "Related characters": [
        { text: "Dafiro Miro", link: "/characters/dafiro-miro" },
        { text: "Huno Krima", link: "/characters/huno-krima" },
        { text: "Zopa Shigin", link: "/characters/zopa-shigin" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Ratho Miro is a young and brave fighter who, along with his brother Dafiro, represents the new generation willing to fight against the oppressive Xana Empire. His actions help spark the broader rebellion." }
    ],
    history: [
      {
        era: "The Grace of Kings",
        summary: [
          { type: "text" as const, content: "Ratho Miro and his brother Dafiro are among the first to shed blood in the rebellion when they kill their corvée guards, helping to ignite the uprising led by Huno Krima and Zopa Shigin." },
          { type: "text" as const, content: "The brothers' actions demonstrate the desperation and determination of the common people to overthrow the oppressive Xana regime, marking the beginning of a new era of resistance." }
        ]
      }
    ]
};

export default function RathoMiroPage() {
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