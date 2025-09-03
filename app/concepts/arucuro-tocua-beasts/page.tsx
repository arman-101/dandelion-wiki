'use client';

import PageTemplate, { convertConceptData } from '../../components/layout/PageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import { ConceptNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

const conceptData: Concept = {
    name: "Arucuro Tocua Beasts",
    image: "/concepts/arucuro-tocua-beasts.png",
    introduction: "Arucuro Tocua, or 'living bones,' are massive walking fortresses created by Théra's rebels in Ukyu-Gondé. Built from the skeletons of ancient garinafins, they represent the fusion of Agon tradition and Dara ingenuity and became the rebellion's most powerful weapon.",
    infoBox: {
      "Type": "Walking Fortress / War Machine",
      "Origin": "Agon-Dara Collaboration",
      "Primary Material": "Ancient Garinafin Bones",
      "Key Armament": "'Divine Voice' Sonic Weapon"
    },
    details: [
        { type: 'text', content: "After Théra's rebels discovered a massive, ancient garinafin boneyard, they began to construct giant, mobile fortresses from the skeletons. These 'arucuro tocua beasts' were equipped with defenses against fire and a powerful sonic weapon called the 'Divine Voice,' which could project low-frequency vibrations to paralyze enemy forces." },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 29, link: "/books/speaking-bones#chapter-29" } },
        { type: 'text', content: "These war machines were used to devastating effect in the final Battle of the Boneyard, where they withstood a massive Lyucu charge and turned the tide of the war in Ukyu-Gondé." },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 31, link: "/books/speaking-bones#chapter-31" } },
        { type: 'text', content: "A later, more peaceful version of this technology, called 'speaking bones,' were autonomous, singing beasts that wandered the continent broadcasting the true, recovered history of the Agon and Lyucu peoples, spreading a message of unity and peace." },
        { type: 'ref', data: { book: "Speaking Bones", chapter: 56, link: "/books/speaking-bones#chapter-56" } },
    ]
};

export default function ArucuroTocuaBeastsPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CONCEPTS);
    const returnLink = { title: 'Return to All Concepts', path: '/concepts' };

    const pageData = convertConceptData(conceptData);

    return (
        <>
            <ConceptNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <PageTemplate pageData={pageData} infoBoxTitle="Concept Information" />
        </>
    );
}