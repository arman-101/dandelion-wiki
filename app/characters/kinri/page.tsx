'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function KinriPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
  const returnLink = { title: 'Return to All Characters', path: '/characters' };

  const characterData: Character = {
    name: "Kinri",
    image: "/characters/kuni-garu.png", // Placeholder image
    introduction: "A young man who discovers his true identity as Savo Ryoto during the resistance against Lyucu occupation, representing the hidden potential within the people of Dara.",
    infoBox: {
      "Also known as": "Savo Ryoto",
      "Affiliation": "Dara Resistance",
      "Role": "Resistance Fighter",
      "First appearance": "The Veiled Throne",
      "Related characters": [
        { text: "Empress Üna", link: "/characters/empress-una" },
        { text: "Dandelion", link: "/characters/dandelion" },
        { text: "Goztan Ryoto", link: "/characters/goztan-ryoto" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Kinri embodies the resilience and hidden strength of the Dara people, combining youthful determination with the wisdom that comes from discovering one's true identity. His personality reflects the transformation from ordinary citizen to resistance fighter." }
    ],
    history: [
      {
        era: "The Veiled Throne",
        summary: [
          { type: "text" as const, content: "Kinri's journey begins as he discovers his true identity as Savo Ryoto, a revelation that transforms his understanding of himself and his role in the resistance against Lyucu occupation. His story represents the hidden potential within the people of Dara." }
        ]
      },
      {
        era: "Speaking Bones",
        summary: [
          { type: "text" as const, content: "As Savo Ryoto, he becomes a key figure in the resistance movement, using his newfound identity and abilities to fight against Lyucu rule and help determine the future of Dara." }
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