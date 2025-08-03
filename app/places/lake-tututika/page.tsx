'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function LakeTututikaPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
  const returnLink = { title: 'Return to All Places', path: '/places' };

  const placeData: Place = {
    name: "Lake Tututika",
    image: "/places/mount-kiji.png", // Placeholder image
    introduction: "A sacred lake associated with the goddess Tututika, representing the spiritual and mystical aspects of the natural world in the Dandelion series.",
    infoBox: {
      "Type": "Sacred Lake",
      "Region": "Dara",
      "Significance": "Religious and Spiritual",
      "First appearance": "The Wall of Storms",
      "Associated deity": [
        { text: "Tututika", link: "/gods/tututika" }
      ]
    },
    geography: [
      { type: "text" as const, content: "Lake Tututika is a body of water of significant spiritual importance, known for its connection to the goddess Tututika and its role in the religious practices of the people of Dara." }
    ],
    culture: [
      { type: "text" as const, content: "The lake holds deep cultural and religious significance, serving as a site for spiritual practices and ceremonies dedicated to the goddess Tututika. Its waters are considered sacred and are used in various religious rituals." }
    ],
    history: [
      {
        event: "Religious Significance",
        summary: [
          { type: "text" as const, content: "Lake Tututika has long been associated with the goddess Tututika, serving as a center for religious worship and spiritual practices throughout the history of Dara." }
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