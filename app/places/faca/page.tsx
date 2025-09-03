'use client';

import PageTemplate, { convertPlaceData } from '../../components/layout/PageTemplate';
import { Place, ALL_PLACES } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import { PlaceNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

// --- DATA FOR FAÇA ---
const placeData: Place = {
    name: "Faça",
    image: "/places/faca.png",
    introduction: "Faça is one of the six Tiro states, a northern kingdom known for its treacherous politics and its unique mastery of the 'silkmotic force,' the practical science of static electricity.",
    infoBox: {
        type: "Kingdom (Tiro State)",
        continent: "Dara",
        capital: "Boama",
        Ruler: "King Shilué (Rebellion), Gin Mazoti (later)",
        PatronGod: { text: "Rufizo", link: "/gods/rufizo" },
        KeyTechnology: { text: "Silkmotic Force", link: "/concepts/silkmotic-force" },
    },
    geography: [
        { type: 'text', content: "Faça is a northern state on the Big Island, bordering Rima. Its people are known for their ingenuity and somewhat shifty political allegiances." },
    ],
    culture: [
        { type: 'text', content: "The most defining cultural aspect of Faça is the development of the silkmotic force. Initially used for entertainment, this understanding of static electricity was later weaponized. Its patron god is Rufizo, the Divine Healer." },
        { type: 'ref', data: { book: "The Wall of Storms", chapter: 55, link: "/books/the-wall-of-storms#chapter-55" } },
    ],
    history: [
        {
            event: "The Dandelion Rebellion",
            summary: [
                { type: 'text', content: "Faça, under the rule of the treacherous King Shilué, joined the rebellion against Xana. However, at the Battle of Wolf's Paw, Shilué's forces betrayed Mata Zyndu's army in the middle of the fight." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 29, link: "/books/the-grace-of-kings#chapter-29" } },
            ]
        },
        {
            event: "The Chrysanthemum-Dandelion War",
            summary: [
                { type: 'text', content: "During the civil war, Marshal Gin Mazoti marched her army north. Believing he could play both sides, King Shilué welcomed her into his capital, Boama. Gin had him executed and conquered Faça, eventually becoming its queen." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 48, link: "/books/the-grace-of-kings#chapter-48" } },
            ]
        },
        {
            event: "The Lyucu War",
            summary: [
                { type: 'text', content: "Prince Phyro and Consort Risana traveled to Faça to investigate the silkmotic force. They uncovered the secrets of the Ogé Jar (a Leyden jar), which became the basis for new silkmotic lances used to fight the garinafins." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 55, link: "/books/the-wall-of-storms#chapter-55" } },
            ]
        },
    ]
};

export default function FacaPage() {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_PLACES]);
    const returnLink = { title: 'Return to All Places', path: '/places' };

    return (
        <>
            <PlaceNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
            <PageTemplate pageData={convertPlaceData(placeData)} infoBoxTitle="Location Information" />
        </>
    );
}