'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function TatenRyoAlvovoPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
  const returnLink = { title: 'Return to All Places', path: '/places' };

  const placeData: Place = {
    name: "Taten-ryo-alvovo",
    image: "/places/pan.png", // Placeholder image
    introduction: "A region that becomes significant during the later political developments, Taten-ryo-alvovo serves as a strategic location in the complex landscape of the later books.",
    infoBox: {
      "Type": "Region",
      "Location": "Dara",
      "Significance": "Political and Strategic",
      "First appearance": "Speaking Bones",
      "Related places": [
        { text: "Taten", link: "/places/taten" },
        { text: "Lurodia Tanta", link: "/places/lurodia-tanta" },
        { text: "Sliyusa Ki", link: "/places/sliyusa-ki" }
      ]
    },
    geography: [
      { type: "text" as const, content: "Taten-ryo-alvovo is a region with strategic geographical features that make it important for political and military control. The area's terrain and position provide advantages for the forces that seek to control it." }
    ],
    culture: [
      { type: "text" as const, content: "The culture of Taten-ryo-alvovo reflects the complex interactions between the original inhabitants and the various political forces that have sought to control the region. The local population has developed unique traditions shaped by their strategic position." }
    ],
    history: [
      {
        event: "Political Developments",
        summary: [
          { type: "text" as const, content: "Taten-ryo-alvovo becomes an important location during the later political developments of the series. The region's strategic value makes it a focus of attention for various factions seeking to shape the future of Dara." }
        ]
      },
      {
        event: "Strategic Importance",
        summary: [
          { type: "text" as const, content: "The strategic importance of Taten-ryo-alvovo during the later events makes it a key objective for political and military forces. Control of the region provides significant advantages in the complex power struggles of the later books." }
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