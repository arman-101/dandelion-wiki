'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR COGO YELU ---
const characterData: Character = {
    name: "Cogo Yelu",
    image: "/characters/kuni-garu.png",
    introduction: "Cogo Yelu is a brilliant administrator and advisor who serves as one of Kuni Garu's most trusted advisors throughout his rise to power.",
    infoBox: {
      "Also known as": "Cogo",
      "Affiliation": "Dandelion Dynasty",
      "Role": "Chief Administrator and Advisor",
      "First appearance": "The Grace of Kings",
      "Related characters": [
        { text: "Kuni Garu", link: "/characters/kuni-garu" },
        { text: "Jia Matiza", link: "/characters/jia-matiza" },
        { text: "Rin Coda", link: "/characters/rin-coda" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Cogo Yelu is a practical and intelligent administrator who excels at solving complex problems through innovative thinking. His calm demeanor and methodical approach make him an invaluable advisor to Kuni Garu." }
    ],
    history: [
      {
        era: "The Grace of Kings",
        summary: [
          { type: "text" as const, content: "Cogo Yelu first appears as a trusted friend and advisor to Kuni Garu, helping him establish effective governance in Zudi. He devises the innovative lottery tax system that turns every citizen into a tax collector." }
        ]
      },
      {
        era: "The Wall of Storms",
        summary: [
          { type: "text" as const, content: "As Kuni's empire grows, Cogo Yelu continues to serve as his chief administrator, helping to transform Dasu from a barren rock into a productive state and managing the complex logistics of the growing Dandelion Dynasty." }
        ]
      },
      {
        era: "The Veiled Throne",
        summary: [
          { type: "text" as const, content: "During the Lyucu occupation, Cogo Yelu remains loyal to the Dandelion cause, working behind the scenes to maintain the administrative systems that keep the empire functioning." }
        ]
      },
      {
        era: "Speaking Bones",
        summary: [
          { type: "text" as const, content: "In the final years of the Dandelion Dynasty, Cogo Yelu continues to serve as a trusted advisor, helping to navigate the complex political landscape and maintain the legacy of Kuni Garu's vision." }
        ]
      }
    ]
};

export default function CogoYeluPage() {
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