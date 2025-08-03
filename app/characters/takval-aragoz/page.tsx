'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function TakvalAragozPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
  const returnLink = { title: 'Return to All Characters', path: '/characters' };

  const characterData: Character = {
    name: "Takval Aragoz",
    image: "/characters/kuni-garu.png", // Placeholder image
    introduction: "A Lyucu leader who becomes a key figure in the occupation and governance of Dara, representing the Aragoz family's role in Lyucu rule.",
    infoBox: {
      "Also known as": "Takval Aragoz",
      "Affiliation": "Lyucu",
      "Role": "Leader and Governor",
      "First appearance": "The Wall of Storms",
      "Related characters": [
        { text: "Volyu Aragoz", link: "/characters/volyu-aragoz" },
        { text: "Souliyan Aragoz", link: "/characters/souliyan-aragoz" },
        { text: "Tanto Aragoz", link: "/characters/tanto-aragoz" },
        { text: "Rokiri Aragoz", link: "/characters/rokiri-aragoz" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Takval Aragoz embodies the authority and leadership qualities expected of the Aragoz family, combining military prowess with the administrative skills necessary for governing conquered territories. His personality reflects the complex position of Lyucu nobility in occupied Dara." }
    ],
    history: [
      {
        era: "The Wall of Storms",
        summary: [
          { type: "text" as const, content: "Takval Aragoz emerges as a significant figure during the Lyucu invasion, representing the Aragoz family's commitment to the conquest and their role in establishing Lyucu authority over the conquered lands." }
        ]
      },
      {
        era: "The Veiled Throne",
        summary: [
          { type: "text" as const, content: "During the occupation, Takval Aragoz becomes deeply involved in the governance of Dara, working alongside other members of the Aragoz family to maintain Lyucu control while navigating the challenges of ruling a conquered people." }
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