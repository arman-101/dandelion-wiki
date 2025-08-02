'use client';

import ConceptPageTemplate from '../../components/ConceptPageTemplate';
import { Concept, ALL_CONCEPTS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR THE CHRYSANTHEMUM CONCEPT ---
const conceptData: Concept = {
    name: "The Chrysanthemum",
    image: "/concepts/chrysanthemum.png",
    introduction: "The chrysanthemum is the philosophical symbol of Mata Zyndu and represents nobility, tradition, and unbending honor in the face of adversity. It embodies the aristocratic values of the old world and stands in direct opposition to the dandelion philosophy of the common people.",
    infoBox: {
        "Philosophical Symbol": "Mata Zyndu's personal emblem and the foundation of his aristocratic worldview",
        "Opposing Philosophy": { text: "The Dandelion", link: "/concepts/dandelion" },
        "Key Proponent": { text: "Mata Zyndu", link: "/characters/mata-zyndu" },
        "First Mentioned": { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        "Cultural Significance": "Represents noble blood, martial virtue, and traditional values",
        "Political Impact": "Influenced Mata's authoritarian rule and resistance to social change"
    },
    details: [
        { type: 'text', content: "The chrysanthemum philosophy is first articulated by Mata Zyndu during a drinking game with Kuni Garu and their followers at the Splendid Urn tavern in Zudi. When asked to compare themselves to flowers, Mata chooses the chrysanthemum, explaining that it is the last flower to bloom against the winter, representing defiance and nobility in the face of adversity." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 21, link: "/books/the-grace-of-kings#chapter-21" } },
        { type: 'text', content: " Unlike the common dandelion, the chrysanthemum is a cultivated flower that requires careful tending and represents the aristocratic values of the old world. It is beautiful, proud, and unbending - qualities that Mata sees as essential to true nobility. The chrysanthemum's golden hue, which it shares with the dandelion, becomes a point of connection between the two philosophies, suggesting that despite their differences, both flowers bloom in the same color." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 21, link: "/books/the-grace-of-kings#chapter-21" } },
        { type: 'text', content: " The chrysanthemum philosophy emphasizes several key principles: the superiority of noble birth and martial virtue, the importance of honor and tradition over pragmatism, the belief that true strength comes from rigid adherence to a code of conduct, and the conviction that the world should be ruled by those of proper breeding and education." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 50, link: "/books/the-grace-of-kings#chapter-50" } },
        { type: 'text', content: " This philosophy directly influences Mata's actions as Hegemon, leading to his authoritarian rule, his preference for traditional military solutions over innovation, and his resistance to social changes that would elevate common people to positions of power. His reign is marked by a return to aristocratic values and the suppression of the meritocratic reforms that Kuni would later implement." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 35, link: "/books/the-grace-of-kings#chapter-35" } },
        { type: 'text', content: " The chrysanthemum becomes the symbol of Mata's faction during the civil war, representing his vision of a restored world where noble blood and martial prowess determine one's place in society. However, this rigid adherence to tradition ultimately proves to be his downfall, as he is unable to adapt to the changing world and the innovative strategies employed by Kuni's forces." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 50, link: "/books/the-grace-of-kings#chapter-50" } },
        { type: 'text', content: " The contrast between the chrysanthemum and dandelion philosophies creates the central ideological conflict of the series, representing the struggle between the old aristocratic order and the new meritocratic society that Kuni seeks to build. This conflict is ultimately resolved in favor of the dandelion philosophy, though elements of both continue to influence the world of Dara." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 51, link: "/books/the-grace-of-kings#chapter-51" } },
    ]
};

export default function ChrysanthemumPage() {
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