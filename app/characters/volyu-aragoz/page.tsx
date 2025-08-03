'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR VOLYU ARAGOZ ---
const characterData: Character = {
    name: "Volyu Aragoz",
    image: "/characters/kuni-garu.png", // Placeholder image
    introduction: "A Lyucu leader and member of the Aragoz family involved in the occupation of Dara, representing the complex dynamics of Lyucu governance.",
    infoBox: {
      "Also known as": "Volyu Aragoz",
      "Affiliation": "Lyucu",
      "Role": "Leader",
      "First appearance": "The Veiled Throne",
      "Related characters": [
        { text: "Takval Aragoz", link: "/characters/takval-aragoz" },
        { text: "Souliyan Aragoz", link: "/characters/souliyan-aragoz" },
        { text: "Tanto Aragoz", link: "/characters/tanto-aragoz" },
        { text: "Rokiri Aragoz", link: "/characters/rokiri-aragoz" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Volyu Aragoz embodies the leadership qualities of the Aragoz family, combining military skill with the administrative abilities needed to govern occupied territories. His personality reflects the complex position of Lyucu nobility in Dara." }
    ],
    history: [
      {
        era: "The Veiled Throne",
        summary: [
          { type: "text" as const, content: "Volyu Aragoz serves as a key member of the Aragoz family during the Lyucu occupation of Dara, working alongside his relatives to maintain control over the conquered territories while navigating the challenges of governance." }
        ]
      }
    ]
};

export default function VolyuAragozPage() {
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