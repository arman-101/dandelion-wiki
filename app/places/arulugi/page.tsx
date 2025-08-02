import React from 'react';
import PlacePageTemplate from '../../components/PlacePageTemplate';
import { Place } from '../../data/wiki-data';

const placeData: Place = {
    name: "Arulugi",
    image: "/places/arulugi.png",
    introduction: "A strategically important island in the Dandelion Dynasty, known for its role in the conflict between Dara and the Lyucu invaders.",
    infoBox: {
        "Type": "Island",
        "Region": "Dara",
        "Significance": "Strategic Military Location",
        "First Mentioned": { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
        "Key Events": [
            { text: "Lyucu Invasion", link: "/books/the-wall-of-storms" },
            { text: "Battle of Arulugi", link: "/books/the-wall-of-storms" }
        ]
    },
    geography: [
        { type: 'text', content: "Arulugi is an island located within the Dandelion Dynasty's territory, positioned strategically in relation to other important locations in Dara. The island's geography is characterized by a mix of coastal areas and inland terrain, making it both accessible by sea and defensible from land-based attacks." },
        { type: 'text', content: "The island's strategic location made it an important military and commercial hub, serving as a key point for naval operations and trade routes. Its position allowed it to control access to surrounding waters and to serve as a staging area for military campaigns in the region." }
    ],
    culture: [
        { type: 'text', content: "The culture of Arulugi reflects the broader Dara society, with its own local traditions and customs that have developed over generations. The island's inhabitants are known for their resilience and adaptability, qualities that would be tested during the Lyucu invasion." },
        { type: 'text', content: "The people of Arulugi have a strong connection to the sea, with many of their traditions and livelihoods centered around maritime activities. This maritime culture influenced their response to the Lyucu invasion and their role in the broader conflict." }
    ],
    history: [
        {
            event: "Pre-Invasion Period",
            summary: [
                { type: 'text', content: "Before the Lyucu invasion, Arulugi was a prosperous and peaceful part of the Dandelion Dynasty. The island enjoyed the benefits of the dynasty's enlightened rule, including access to education, economic opportunities, and the protection of the imperial military." },
                { type: 'text', content: "During this period, Arulugi served as an important center for trade and commerce, connecting various parts of the Dandelion Dynasty and facilitating the exchange of goods and ideas. The island's strategic location made it a valuable asset for the empire." }
            ]
        },
        {
            event: "The Lyucu Invasion",
            summary: [
                { type: 'text', content: "When the Lyucu invaded Dara, Arulugi became one of the first targets of their military campaign. The island's strategic importance made it a key objective for the invaders, who recognized its value for controlling the surrounding waters and establishing a base of operations." },
                { type: 'text', content: "The invasion of Arulugi was marked by fierce resistance from the local population and imperial forces. The battle for control of the island demonstrated both the determination of the Dara people to defend their homeland and the military capabilities of the Lyucu invaders." }
            ]
        },
        {
            event: "Under Lyucu Occupation",
            summary: [
                { type: 'text', content: "Following the Lyucu conquest, Arulugi came under foreign rule, experiencing significant changes in its governance and culture. The island's strategic importance meant that it remained a focus of Lyucu attention and control, with the new rulers implementing their own systems of administration and control." },
                { type: 'text', content: "The occupation period was marked by both cooperation and resistance from the local population. Some inhabitants chose to work with the new rulers, while others participated in resistance activities. This complex dynamic reflected the broader challenges faced by the Dara people under Lyucu rule." }
            ]
        }
    ]
};

export default function ArulugiPage() {
    return <PlacePageTemplate placeData={placeData} />;
} 