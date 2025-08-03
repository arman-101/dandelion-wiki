'use client';

import React from 'react';
import ConceptPageTemplate from '../../components/ConceptPageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function LyucuCulturePage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CONCEPTS);
    const returnLink = { title: 'Return to All Concepts', path: '/concepts' };

    const conceptData: Concept = {
        name: "Lyucu Culture",
        image: "/concepts/lyucu-culture.png",
        introduction: "The traditions, beliefs, and way of life of the fierce northern people who invade Dara, representing a stark contrast to the more sophisticated and settled culture of the southern continent.",
        infoBox: {
            "Origin": "Ukyu",
            "Type": "Cultural System",
            "First Mentioned": { text: "The Wall of Storms", link: "/books/the-wall-of-storms" },
            "Key Elements": [
                { text: "Martial Traditions", link: "/concepts/lyucu-culture" },
                { text: "Nomadic Lifestyle", link: "/concepts/lyucu-culture" },
                { text: "Garinafin Bonding", link: "/concepts/garinafin" }
            ]
        },
        details: [
            { type: 'text' as const, content: "Lyucu culture is fundamentally shaped by the harsh environment of Ukyu, the northern continent where they originated. The unforgiving climate and difficult living conditions have fostered a society that values strength, resilience, and adaptability above all else. These values are reflected in every aspect of Lyucu life, from their social structures to their religious beliefs and military traditions." },
            { type: 'text' as const, content: "The Lyucu people are primarily nomadic, moving across the vast expanses of Ukyu in search of resources and better living conditions. This nomadic lifestyle has influenced their social organization, which is based on extended family groups and tribal affiliations rather than the more complex hierarchical structures found in Dara. Leadership is earned through demonstrated ability and strength, rather than inherited through bloodlines." },
            { type: 'text' as const, content: "One of the most distinctive aspects of Lyucu culture is their relationship with the garinafin, the massive war beasts that they have domesticated and trained for both transportation and warfare. The bond between a Lyucu warrior and their garinafin is considered sacred, representing not just a practical partnership but a spiritual connection that reflects the Lyucu worldview." },
            { type: 'text' as const, content: "Lyucu religious beliefs are closely tied to their environment and way of life. They worship spirits associated with natural forces and phenomena, particularly those related to the harsh conditions of Ukyu. Their religious practices emphasize the importance of maintaining harmony with the natural world and respecting the power of the elements." },
            { type: 'text' as const, content: "When the Lyucu invaded Dara, they brought their culture with them, creating a complex dynamic of cultural exchange and conflict. The contrast between Lyucu and Dara cultures became a central theme in the later books of the series, as both peoples were forced to confront their differences and find ways to coexist or compete for dominance." },
            { type: 'text' as const, content: "The Lyucu approach to governance and social organization reflects their nomadic heritage and martial values. They prefer direct, personal forms of leadership and decision-making, rather than the complex bureaucratic systems that had developed in Dara. This difference in approach created significant challenges when the Lyucu attempted to govern the conquered territories of Dara." }
        ]
    };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <ConceptPageTemplate conceptData={conceptData} />
        </>
    );
} 