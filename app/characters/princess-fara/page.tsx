'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function PrincessFaraPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
  const returnLink = { title: 'Return to All Characters', path: '/characters' };

  const characterData: Character = {
    name: "Princess Fara",
    image: "/characters/kuni-garu.png", // Placeholder image
    introduction: "A Lyucu princess who becomes a key figure in the conflict between Dara and Ukyu, representing the intersection of two cultures.",
    infoBox: {
      "Also known as": "Fara",
      "Affiliation": "Lyucu/Dara",
      "Role": "Princess",
      "First appearance": "The Wall of Storms",
      "Related characters": [
        { text: "Kuni Garu", link: "/characters/kuni-garu" },
        { text: "Tanvanaki", link: "/characters/tanvanaki" },
        { text: "Kinri", link: "/characters/kinri" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Princess Fara embodies the cultural blending and personal struggles of those caught between two worlds. Her personality reflects both the strength and vulnerability of her unique position." }
    ],
    history: [
      {
        era: "The Wall of Storms",
        summary: [
          { type: "text" as const, content: "Princess Fara's story is one of adaptation and survival, as she navigates the challenges of her dual heritage and the expectations placed upon her by both Lyucu and Dara societies." }
        ]
      }
    ]
  };

  return (
    <>
      <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
      <CharacterPageTemplate characterData={characterData} />
    </>
  );
} 