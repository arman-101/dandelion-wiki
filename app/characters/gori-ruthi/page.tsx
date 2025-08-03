'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR GORI RUTHI ---
const characterData: Character = {
    name: "Gori Ruthi",
    image: "/characters/kuni-garu.png",
    introduction: "Gori Ruthi is a character who appears during the final events of the Dandelion Dynasty in Speaking Bones.",
    infoBox: {
      "Also known as": "Gori",
      "Affiliation": "Dandelion Dynasty",
      "Role": "Court Official",
      "First appearance": "Speaking Bones",
      "Related characters": [
        { text: "Jia Matiza", link: "/characters/jia-matiza" },
        { text: "Zomi Kidosu", link: "/characters/zomi-kidosu" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Gori Ruthi appears to be a court official or advisor during the final years of the Dandelion Dynasty. Their specific role and background remain to be explored." }
    ],
    history: [
      {
        era: "Speaking Bones",
        summary: [
          { type: "text" as const, content: "Gori Ruthi appears in Pan during the final events of the Dandelion Dynasty, likely serving in some official capacity as the empire faces its ultimate challenges." }
        ]
      }
    ]
};

export default function GoriRuthiPage() {
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