import { StaticImageData } from 'next/image';

// This interface defines the structure for all our wiki pages
export interface WikiPage {
    title: string;
    path: string;
    type: 'Book' | 'Character' | 'Place' | 'Concept' | 'God';
}

// --- TYPE DEFINITIONS ---

export interface ReferenceLink {
    book: string;
    chapter: number;
    link: string;
}

export type ContentBlock = 
    | { type: 'text'; content: string }
    | { type: 'ref'; data: ReferenceLink };

export interface InfoBoxLink {
    text: string;
    link: string;
}

// UPDATED Character Interface
export interface Character {
    name: string;
    image: string | StaticImageData;
    introduction: string;
    infoBox: {
        [key: string]: string | InfoBoxLink | InfoBoxLink[]; // <-- FIX IS HERE
    };
    appearanceAndPersonality: ContentBlock[];
    history: {
        era: string;
        summary: ContentBlock[];
    }[];
}

export interface God {
    name: string;
    image: string | StaticImageData;
    introduction: string;
    infoBox: {
        [key: string]: string | InfoBoxLink;
    };
    mythology: ContentBlock[];
    appearances: {
        event: string;
        summary: ContentBlock[];
    }[];
}

export interface Place {
    name: string;
    image: string | StaticImageData;
    introduction: string;
    infoBox: {
        [key: string]: string | InfoBoxLink | InfoBoxLink[];
    };
    geography: ContentBlock[];
    culture: ContentBlock[];
    history: {
        event: string;
        summary: ContentBlock[];
    }[];
}


// --- PAGE LISTS FOR NAVIGATION & SEARCH ---

export const MAIN_CHARACTERS: WikiPage[] = [
    { title: 'Kuni Garu', path: '/characters/kuni-garu', type: 'Character' },
    { title: 'Mata Zyndu', path: '/characters/mata-zyndu', type: 'Character' },
    { title: 'Jia Matiza', path: '/characters/jia-matiza', type: 'Character' },
    { title: 'Luan Zya', path: '/characters/luan-zya', type: 'Character' },
    { title: 'Gin Mazoti', path: '/characters/gin-mazoti', type: 'Character' },
    { title: 'Princess Théra', path: '/characters/princess-thera', type: 'Character' },
    { title: 'Zomi Kidosu', path: '/characters/zomi-kidosu', type: 'Character' },
];

export const PLACES_TIRO_STATES: WikiPage[] = [
    { title: 'Amu', path: '/places/amu', type: 'Place' },
    { title: 'Cocru', path: '/places/cocru', type: 'Place' },
    { title: 'Faça', path: '/places/faca', type: 'Place' },
    { title: 'Gan', path: '/places/gan', type: 'Place' },
    { title: 'Haan', path: '/places/haan', type: 'Place' },
    { title: 'Rima', path: '/places/rima', type: 'Place' },
    { title: 'Xana', path: '/places/xana', type: 'Place' },
];

export const PLACES_BEYOND_DARA: WikiPage[] = [
    { title: 'Ukyu & Gondé', path: '/places/ukyu-gonde', type: 'Place' },
    { title: 'Eseeran Nomnny', path: '/places/eseeran-nomnny', type: 'Place' },
];

export const MAIN_GODS: WikiPage[] = [
    { title: 'Kiji', path: '/gods/kiji', type: 'God' },
    { title: 'Tututika', path: '/gods/tututika', type: 'God' },
    { title: 'Kana', path: '/gods/kana', type: 'God' },
    { title: 'Rapa', path: '/gods/rapa', type: 'God' },
    { title: 'Rufizo', path: '/gods/rufizo', type: 'God' },
    { title: 'Tazu', path: '/gods/tazu', type: 'God' },
    { title: 'Fithowéo', path: '/gods/fithoweo', type: 'God' },
];

// UPDATED: Comprehensive list of ALL pages
export const ALL_WIKI_PAGES: WikiPage[] = [
    // Books
    { title: 'The Grace of Kings', path: '/books/grace-of-kings', type: 'Book' },
    { title: 'The Wall of Storms', path: '/books/wall-of-storms', type: 'Book' },
    { title: 'The Veiled Throne', path: '/books/the-veiled-throne', type: 'Book' },
    { title: 'Speaking Bones', path: '/books/speaking-bones', type: 'Book' },
    
    // All Characters
    ...MAIN_CHARACTERS,
    { title: 'Emperor Mapidéré', path: '/characters/emperor-mapidere', type: 'Character' },
    { title: 'Consort Risana', path: '/characters/consort-risana', type: 'Character' },
    { title: 'Prince Timu', path: '/characters/prince-timu', type: 'Character' },
    { title: 'Prince Phyro', path: '/characters/prince-phyro', type: 'Character' },
    { title: 'Soto Zyndu', path: '/characters/soto-zyndu', type: 'Character' },
    { title: 'Emperor Erishi', path: '/characters/emperor-erishi', type: 'Character' },
    { title: 'Goran Pira', path: '/characters/goran-pira', type: 'Character' },
    { title: 'Lügo Crupo', path: '/characters/lugo-crupo', type: 'Character' },
    { title: 'Kindo Marana', path: '/characters/kindo-marana', type: 'Character' },
    { title: 'Tanno Namen', path: '/characters/tanno-namen', type: 'Character' },
    { title: 'Mün Çakri', path: '/characters/mun-cakri', type: 'Character' },
    { title: 'Rin Coda', path: '/characters/rin-coda', type: 'Character' },
    { title: 'King Thufi', path: '/characters/king-thufi', type: 'Character' },
    { title: 'Princess Kikomi', path: '/characters/princess-kikomi', type: 'Character' },

    { title: 'Phin Zyndu', path: '/characters/phin-zyndu', type: 'Character' },
    { title: 'Zato Ruthi', path: '/characters/zato-ruthi', type: 'Character' },
    { title: 'Doru Solofi', path: '/characters/doru-solofi', type: 'Character' },
    { title: 'Noda Mi', path: '/characters/noda-mi', type: 'Character' },
    { title: 'Gozogi Çadé', path: '/characters/gozogi-cade', type: 'Character' },
    { title: 'Than Carucono', path: '/characters/than-carucono', type: 'Character' },
    { title: 'Dafiro Miro', path: '/characters/dafiro-miro', type: 'Character' },
    { title: 'King Jizu', path: '/characters/king-jizu', type: 'Character' },
    { title: 'King Mocri', path: '/characters/king-mocri', type: 'Character' },
    { title: 'King Shilué', path: '/characters/king-shilue', type: 'Character' },

    // All Places
    ...PLACES_TIRO_STATES,
    ...PLACES_BEYOND_DARA,
    { title: 'Dasu & Rui', path: '/places/dasu-rui', type: 'Place' },
    { title: 'Crescent Island', path: '/places/crescent-island', type: 'Place' },
    { title: 'Tan Adü', path: '/places/tan-adu', type: 'Place' },
    { title: 'Tunoa Islands', path: '/places/tunoa-islands', type: 'Place' },
    { title: 'Wolf\'s Paw', path: '/places/wolfs-paw', type: 'Place' },
    { title: 'Pan', path: '/places/pan', type: 'Place' },
    { title: 'Zudi', path: '/places/zudi', type: 'Place' },
    { title: 'Mount Kiji', path: '/places/mount-kiji', type: 'Place' },
    { title: 'Kishi Channel', path: '/places/kishi-channel', type: 'Place' },
    { title: 'Géjira', path: '/places/gejira', type: 'Place' },
    { title: 'Nokida', path: '/places/nokida', type: 'Place' },
    { title: 'Tunoa', path: '/places/tunoa', type: 'Place' },

    // All Gods
    ...MAIN_GODS,
    { title: 'Gods of Dara', path: '/gods', type: 'God'},

    // Concepts
    { title: 'Dandelion', path: '/concepts/dandelion', type: 'Concept' },
    { title: 'Grand Examination', path: '/concepts/grand-examination', type: 'Concept' },
];