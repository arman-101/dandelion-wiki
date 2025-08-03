'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR DARA ---
const placeData: Place = {
    name: "Dara",
    image: "/maps/dara.jpeg",
    introduction: "Dara is the name for the entire world and empire that encompasses the Islands of Dara, representing the unified realm that has been ruled by various dynasties throughout history.",
    infoBox: {
      "Type": "World/Empire",
      "Region": "The Islands of Dara",
      "Significance": "The entire known world and unified empire",
      "Related places": [
        { text: "The Islands of Dara", link: "/maps" },
        { text: "Pan", link: "/places/pan" },
        { text: "Ukyu & Gondé", link: "/places/ukyu-gonde" }
      ]
    },
    geography: [
      { type: "text" as const, content: "Dara encompasses the entire known world, consisting of the Islands of Dara (the Seven States) and the lands beyond the Wall of Storms, including Ukyu and Gondé. The world is characterized by its diverse geography, from tropical islands to frozen northern territories." }
    ],
    culture: [
      { type: "text" as const, content: "Dara represents the cultural and political unity of the various peoples and kingdoms that have been brought together under different empires. The name embodies the ideal of a unified realm where diverse cultures can coexist." }
    ],
    history: [
      {
        event: "The Seven States",
        summary: [
          { type: "text" as const, content: "Originally, Dara consisted of seven independent states: Amu, Cocru, Faça, Gan, Haan, Rima, and Xana. Each state had its own unique culture, traditions, and ruling families." }
        ]
      },
      {
        event: "The Xana Empire",
        summary: [
          { type: "text" as const, content: "Emperor Mapidéré of Xana conquered and united the Seven States, creating the first unified empire of Dara. This unification brought both progress and oppression, leading to the rebellion that would overthrow the Xana Dynasty." }
        ]
      },
      {
        event: "The Dandelion Dynasty",
        summary: [
          { type: "text" as const, content: "Kuni Garu's victory over Mata Zyndu established the Dandelion Dynasty, which would rule Dara for generations, bringing a new philosophy of governance that emphasized the common people over noble privilege." }
        ]
      },
      {
        event: "The Lyucu Invasion",
        summary: [
          { type: "text" as const, content: "The Lyucu invasion from beyond the Wall of Storms brought new challenges and cultural exchange to Dara, testing the resilience of the unified empire and its people." }
        ]
      }
    ]
};

export default function DaraPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
  const returnLink = { title: 'Return to All Places', path: '/places' };

  return (
    <>
      <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
      <PlacePageTemplate placeData={placeData} />
    </>
  );
} 