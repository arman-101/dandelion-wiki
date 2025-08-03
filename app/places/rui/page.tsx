'use client';

import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR RUI ---
const placeData: Place = {
    name: "Rui",
    image: "/places/xana.png",
    introduction: "Rui is the homeland of the Xana people and the heart of the Xana Empire, containing the sacred Mount Kiji and the source of the mystical lift gas that powers the empire's airships.",
    infoBox: {
      "Type": "Island Homeland",
      "Region": "Xana Empire",
      "Significance": "Xana homeland, source of lift gas",
      "Related places": [
        { text: "Mount Kiji", link: "/places/mount-kiji" },
        { text: "Xana", link: "/places/xana" },
        { text: "Kriphi", link: "/places/kriphi" }
      ]
    },
    geography: [
      { type: "text" as const, content: "Rui is the largest and most important of the Xana islands, featuring the sacred Mount Kiji which contains Lake Dako, the source of the mystical lift gas that gives the Xana Empire its air superiority." }
    ],
    culture: [
      { type: "text" as const, content: "As the homeland of the Xana people, Rui embodies the empire's culture of conquest and technological innovation. The island is home to the Mount Kiji Air Base and serves as the administrative center of the empire." }
    ],
    history: [
      {
        event: "Xana Homeland",
        summary: [
          { type: "text" as const, content: "Rui has long been the homeland of the Xana people, who discovered the mystical properties of lift gas from Mount Kiji and used this technological advantage to conquer and unite the Islands of Dara." }
        ]
      },
      {
        event: "The Rebellion",
        summary: [
          { type: "text" as const, content: "During the rebellion against the Xana Empire, Kindo Marana travels to Rui to rebuild the Imperial air force, discovering the Mount Kiji Air Base in disrepair and working to restore it to its former glory." }
        ]
      },
      {
        event: "The Chrysanthemum-Dandelion War",
        summary: [
          { type: "text" as const, content: "Rui becomes a strategic target during the war between Kuni Garu and Mata Zyndu, with Kuni's forces launching a surprise attack through the Grand Tunnels to capture the symbolic heart of the old Xana homeland." }
        ]
      }
    ]
};

export default function RuiPage() {
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