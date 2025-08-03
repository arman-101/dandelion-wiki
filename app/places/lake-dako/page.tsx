'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function LakeDakoPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_PLACES);
  const returnLink = { title: 'Return to All Places', path: '/places' };

  const placeData: Place = {
    name: "Lake Dako",
    image: "/places/mount-kiji.png", // Placeholder image
    introduction: "A mystical lake within the crater of Mount Kiji, Lake Dako is the sole source of the invaluable lift gas that powers the empire's airships, making it the strategic heart of Xana's military power.",
    infoBox: {
      "Type": "Crater Lake",
      "Location": "Mount Kiji, Rui",
      "Significance": "Source of Lift Gas",
      "First appearance": "The Grace of Kings",
      "Related places": [
        { text: "Mount Kiji", link: "/places/mount-kiji" },
        { text: "Rui", link: "/places/rui" },
        { text: "Xana", link: "/places/xana" }
      ]
    },
    geography: [
      { type: "text" as const, content: "Lake Dako is located within the crater of Mount Kiji, a snow-peaked volcano on the island of Rui. The lake is smaller than the nearby Lake Arisuso but is distinguished by its emerald-green color and the mystical properties of its waters." }
    ],
    culture: [
      { type: "text" as const, content: "Lake Dako holds immense cultural and strategic significance as the source of lift gas, the mystical substance that enables airship flight. The lake is considered sacred and is heavily protected by the Xana Empire, as control of the lake means control of the skies." }
    ],
    history: [
      {
        event: "Discovery and Early Use",
        summary: [
          { type: "text" as const, content: "The discovery of Lake Dako's unique properties marked a turning point in the history of Dara. The lift gas that bubbles up from the lake's depths became the foundation of Xana's military superiority, enabling the construction of airships that could dominate the skies." }
        ]
      },
      {
        event: "Imperial Control",
        summary: [
          { type: "text" as const, content: "Under Xana's rule, Lake Dako became the most strategically important location in the empire. The Imperial Air Base was established nearby to protect this vital resource, and the lake's waters were carefully managed to ensure a steady supply of lift gas for the empire's air fleet." }
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