'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function LurodiaTantaPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
  const returnLink = { title: 'Return to All Places', path: '/places' };

  const placeData: Place = {
    name: "Lurodia Tanta",
    image: "/places/pan.png", // Placeholder image
    introduction: "A region with unique cultural and geographical features, Lurodia Tanta becomes significant during the later events of the series and the resistance against Lyucu occupation.",
    infoBox: {
      "Type": "Region",
      "Location": "Dara",
      "Significance": "Cultural and Strategic",
      "First appearance": "The Veiled Throne",
      "Related places": [
        { text: "Taten", link: "/places/taten" },
        { text: "Sliyusa Ki", link: "/places/sliyusa-ki" },
        { text: "Kiri Valley", link: "/places/kiri-valley" }
      ]
    },
    geography: [
      { type: "text" as const, content: "Lurodia Tanta is characterized by its unique geographical features that distinguish it from other regions of Dara. The landscape provides both natural resources and strategic advantages for those who control the area." }
    ],
    culture: [
      { type: "text" as const, content: "The people of Lurodia Tanta have developed a distinct culture shaped by their environment and their interactions with neighboring regions. Their traditions and way of life reflect the unique challenges and opportunities of their homeland." }
    ],
    history: [
      {
        event: "Early History",
        summary: [
          { type: "text" as const, content: "Lurodia Tanta has a long history as a region within the Dara empire, with its people contributing to the cultural and economic diversity of the unified realm. The region's unique characteristics have made it a valuable part of the empire." }
        ]
      },
      {
        event: "Role in Later Events",
        summary: [
          { type: "text" as const, content: "During the complex political events of the later books, Lurodia Tanta becomes an important location where various factions and interests converge. The region's strategic value and cultural significance make it a focal point for political maneuvering." }
        ]
      }
    ]
  };

  return (
    <>
      <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
      <PlacePageTemplate placeData={placeData} />
    </>
  );
} 