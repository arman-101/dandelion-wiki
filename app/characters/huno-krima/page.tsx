'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR HUNO KRIMA ---
const characterData: Character = {
    name: "Huno Krima",
    image: "/characters/kuni-garu.png",
    introduction: "Huno Krima is the charismatic leader who sparked the first major rebellion against the Xana Empire, becoming the first 'King of West Cocru' before his tragic downfall.",
    infoBox: {
      "Also known as": "King of West Cocru",
      "Affiliation": "Cocru Rebellion",
      "Role": "Rebel Leader",
      "First appearance": "The Grace of Kings",
      "Related characters": [
        { text: "Zopa Shigin", link: "/characters/zopa-shigin" },
        { text: "Dafiro Miro", link: "/characters/dafiro-miro" },
        { text: "King Thufi", link: "/characters/king-thufi" },
        { text: "Tanno Namen", link: "/characters/tanno-namen" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Huno Krima is a bald, charismatic leader who possesses the ability to inspire others through his vision and determination. His journey from desperate corvée laborer to rebel king demonstrates both his leadership qualities and the tragic flaws that ultimately lead to his downfall." }
    ],
    history: [
      {
        era: "The Grace of Kings",
        summary: [
          { type: "text" as const, content: "Huno Krima begins as a corvée laborer captain who, facing certain execution for being late to his assignment, creates a fake prophecy by hiding a silk scroll reading 'Huno Krima Will Be King' inside a fish. This 'miracle' galvanizes his fellow laborers into rebellion." },
          { type: "text" as const, content: "Leading the rebellion, Krima seizes the town of Napi, opens imperial granaries to the starving populace, and sparks the first major uprising against the Xana Empire. He helps install the humble shepherd Thufi as King of Cocru." },
          { type: "text" as const, content: "However, as his power grows, Krima becomes increasingly paranoid and arrogant. He declares himself King of West Cocru, executes his co-conspirator Zopa Shigin, and rules through fear using a secret police force known as the 'Black Caps'." },
          { type: "text" as const, content: "His disastrous reign ends when General Tanno Namen launches a devastating surprise attack on his capital, Dimu. Krima's undisciplined army collapses, and he is killed by his own fleeing soldiers, marking the pathetic end of the first rebellion." }
        ]
      }
    ]
};

export default function HunoKrimaPage() {
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