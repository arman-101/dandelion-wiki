'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function GinpenPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
  const returnLink = { title: 'Return to All Places', path: '/places' };

  const placeData: Place = {
    name: "Ginpen",
    image: "/places/haan.png", // Placeholder image
    introduction: "A city with significant cultural and political importance in the Dara empire, Ginpen serves as a center of learning, innovation, and governance.",
    infoBox: {
      "Type": "Major City",
      "Region": "Dara Empire",
      "Significance": "Cultural and Political Center",
      "First appearance": "The Veiled Throne",
      "Related places": [
        { text: "Haan", link: "/places/haan" },
        { text: "Pan", link: "/places/pan" },
        { text: "Kriphi", link: "/places/kriphi" }
      ]
    },
    geography: [
      { type: "text" as const, content: "Ginpen is located in a region that has historically been associated with learning and innovation. The city's location has made it accessible to scholars, inventors, and political figures from across the empire, contributing to its role as a center of intellectual and cultural activity." }
    ],
    culture: [
      { type: "text" as const, content: "Ginpen has developed a culture that emphasizes learning, innovation, and intellectual pursuit. The city is home to academies, libraries, and workshops where scholars and inventors work to advance knowledge and technology. This cultural emphasis has made Ginpen a beacon of progress in the empire." }
    ],
    history: [
      {
        event: "Establishment as Learning Center",
        summary: [
          { type: "text" as const, content: "Ginpen was established as a center of learning and innovation, drawing scholars and inventors from across the empire. The city's institutions became known for their contributions to knowledge and their role in advancing the empire's technological and cultural development." }
        ]
      },
      {
        event: "Political Importance",
        summary: [
          { type: "text" as const, content: "As the empire evolved, Ginpen's importance extended beyond its role as a learning center to include significant political functions. The city became a place where important decisions were made and where various factions within the empire could gather to discuss and negotiate." }
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