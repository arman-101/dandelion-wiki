'use client';

import ConceptPageTemplate from '../../components/ConceptPageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR GITRÉ ÜTHU ---
const conceptData: Concept = {
    name: "Gitré Üthu",
    image: "/concepts/gitre-uthu.png",
    introduction: "Gitré Üthu is a magical, self-writing book of military strategy and philosophy. It was gifted to Luan Zya by the god Lutho and contains the distilled wisdom of countless scholars and generals from Dara's history.",
    infoBox: {
        Type: "Magical Artifact",
        GivenBy: { text: "Lutho", link: "/gods/lutho" },
        GivenTo: { text: "Luan Zya", link: "/characters/luan-zya" },
        Content: "Military Strategy, Philosophy, History",
    },
    details: [
        { type: 'text', content: "After his failed kite attack, a wandering Luan Zya encountered a mysterious teacher—the god Lutho in disguise—who gave him the book. The pages of Gitré Üthu are blank, but when a reader contemplates a problem, the book fills with relevant text, diagrams, and historical precedents, written in the blood of all the scholars who came before." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 18, link: "/books/the-grace-of-kings#chapter-18" } },
        { type: 'text', content: "The book is not a simple instruction manual; it offers possibilities and perspectives, requiring a wise reader to interpret and apply its lessons. It served as Luan Zya's most powerful tool, providing the strategic insights that allowed Kuni Garu's small band of rebels to challenge and ultimately defeat a mighty empire." },
    ]
};

export default function GitreUthuPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CONCEPTS);
    const returnLink = { title: 'Return to All Concepts', path: '/concepts' };

    return (
        <>
            <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <ConceptPageTemplate conceptData={conceptData} />
        </>
    );
}