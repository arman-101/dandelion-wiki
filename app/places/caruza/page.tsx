'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR ÇARUZA ---
const placeData: Place = {
    name: "Çaruza",
    image: "/places/cocru.png",
    introduction: "Çaruza is the historic capital city of Cocru, serving as the political and cultural center of the kingdom and later becoming a key location during the rebellion against the Xana Empire.",
    infoBox: {
      "Type": "Capital City",
      "Region": "Cocru",
      "Significance": "Historic capital of Cocru, center of rebellion",
      "Related places": [
        { text: "Cocru", link: "/places/cocru" },
        { text: "Dimu", link: "/places/dimu" },
        { text: "Zudi", link: "/places/zudi" }
      ]
    },
    geography: [
      { type: "text" as const, content: "Çaruza is located in the heart of Cocru territory, serving as the kingdom's traditional capital. The city features grand architecture reflecting Cocru's proud heritage and military traditions." }
    ],
    culture: [
      { type: "text" as const, content: "As the capital of Cocru, Çaruza embodies the kingdom's martial culture and proud traditions. The city is known for its military academies, noble houses, and the legacy of the Zyndu family." }
    ],
    history: [
      {
        event: "Cocru Capital",
        summary: [
          { type: "text" as const, content: "Çaruza has long served as the capital of Cocru, the kingdom known for its martial traditions and proud nobility. The city was home to many of the kingdom's most important families, including the Zyndu clan." }
        ]
      },
      {
        event: "The Rebellion",
        summary: [
          { type: "text" as const, content: "During the rebellion against the Xana Empire, Çaruza becomes the center of resistance activity. King Thufi calls for a Grand Council of War here, hoping to unite the newly freed Tiro states." }
        ]
      },
      {
        event: "The Chrysanthemum-Dandelion War",
        summary: [
          { type: "text" as const, content: "Çaruza serves as a key strategic location during the war between Kuni Garu and Mata Zyndu, with both sides vying for control of the historic capital and its symbolic importance." }
        ]
      }
    ]
};

export default function CaruzaPage() {
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