'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR ZOPA SHIGIN ---
const characterData: Character = {
    name: "Zopa Shigin",
    image: "/characters/kuni-garu.png",
    introduction: "Zopa Shigin is a sturdy corvée laborer who becomes Huno Krima's co-conspirator in the first rebellion against the Xana Empire, only to be betrayed and executed by his friend.",
    infoBox: {
      "Also known as": "Shigin",
      "Affiliation": "Cocru Rebellion",
      "Role": "Rebel Co-Leader",
      "First appearance": "The Grace of Kings",
      "Related characters": [
        { text: "Huno Krima", link: "/characters/huno-krima" },
        { text: "Dafiro Miro", link: "/characters/dafiro-miro" },
        { text: "King Thufi", link: "/characters/king-thufi" }
      ]
    },
    appearanceAndPersonality: [
      { type: "text" as const, content: "Zopa Shigin is described as a sturdy and reliable laborer who possesses both physical strength and practical wisdom. His loyalty to Huno Krima and his willingness to risk everything for the rebellion demonstrates his courage and commitment to the cause." }
    ],
    history: [
      {
        era: "The Grace of Kings",
        summary: [
          { type: "text" as const, content: "Zopa Shigin works alongside Huno Krima as a corvée laborer captain. When they face certain execution for being late to their assignment, Shigin supports Krima's desperate plan to create a fake prophecy by hiding a silk scroll in a fish." },
          { type: "text" as const, content: "Together, they lead the rebellion that seizes the town of Napi and opens the imperial granaries to the starving populace. Shigin plays a crucial role in helping to establish the first major uprising against the Xana Empire." },
          { type: "text" as const, content: "As the rebellion grows, Shigin remains loyal to Krima and helps him install the humble shepherd Thufi as King of Cocru. However, when Krima becomes increasingly paranoid and power-hungry, he tragically executes his trusted friend and co-conspirator Shigin, marking the beginning of his own downfall." }
        ]
      }
    ]
};

export default function ZopaShiginPage() {
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