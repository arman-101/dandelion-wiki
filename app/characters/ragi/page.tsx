'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function RagiPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
  const returnLink = { title: 'Return to All Characters', path: '/characters' };

  const ragiData: Character = {
    name: "Ragi",
    image: "/characters/kuni-garu.png", // Placeholder image
    introduction: "A Lyucu leader and advisor who becomes involved in the political affairs of occupied Dara.",
    infoBox: {
        "Origin": "Lyucu Lands",
        "Role": "Lyucu Leader and Advisor",
        "Book Appearances": [
            { text: "The Veiled Throne", link: "/books/the-veiled-throne" }
        ]
    },
    appearanceAndPersonality: [
        { type: "text" as const, content: "Ragi is a Lyucu leader who serves as an advisor and political figure during the occupation of Dara. His knowledge and strategic thinking make him a valuable asset to the Lyucu administration." }
    ],
    history: [
        {
            era: "The Veiled Throne",
            summary: [
                { type: "text" as const, content: "Ragi becomes involved in the political affairs of occupied Dara, using his leadership skills and knowledge to help govern the conquered territories. His role in the administration highlights the complex nature of the Lyucu occupation." }
            ]
        }
    ]
  };

  return (
    <>
      <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
      <CharacterPageTemplate characterData={ragiData} />
    </>
  );
} 