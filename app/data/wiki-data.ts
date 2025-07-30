// This interface defines the structure for all our wiki pages
interface WikiPage {
    title: string;
    path: string;
    type: 'Book' | 'Character' | 'Place' | 'Concept';
}

// A curated list of main characters for the dropdown menu
export const MAIN_CHARACTERS: WikiPage[] = [
    { title: 'Kuni Garu', path: '/characters/kuni-garu', type: 'Character' },
    { title: 'Mata Zyndu', path: '/characters/mata-zyndu', type: 'Character' },
    { title: 'Jia Matiza', path: '/characters/jia-matiza', type: 'Character' },
    { title: 'Luan Zya', path: '/characters/luan-zya', type: 'Character' },
    { title: 'Gin Mazoti', path: '/characters/gin-mazoti', type: 'Character' },
    { title: 'Princess Théra', path: '/characters/princess-thera', type: 'Character' },
    { title: 'Zomi Kidosu', path: '/characters/zomi-kidosu', type: 'Character' },
];

// A curated list of main places for the dropdown menu (UPDATED)
export const MAIN_PLACES: WikiPage[] = [
    { title: 'Amu', path: '/places/amu', type: 'Place' },
    { title: 'Cocru', path: '/places/cocru', type: 'Place' },
    { title: 'Faça', path: '/places/faca', type: 'Place' },
    { title: 'Gan', path: '/places/gan', type: 'Place' },
    { title: 'Haan', path: '/places/haan', type: 'Place' },
    { title: 'Rima', path: '/places/rima', type: 'Place' },
    { title: 'Xana', path: '/places/xana', type: 'Place' },
];

// A comprehensive list of ALL pages for the search bar (UPDATED)
export const ALL_WIKI_PAGES: WikiPage[] = [
    // Books
    { title: 'The Grace of Kings', path: '/books/grace-of-kings', type: 'Book' },
    { title: 'The Wall of Storms', path: '/books/wall-of-storms', type: 'Book' },
    { title: 'The Veiled Throne', path: '/books/the-veiled-throne', type: 'Book' },
    { title: 'Speaking Bones', path: '/books/speaking-bones', type: 'Book' },
    
    // All Characters (includes main characters)
    ...MAIN_CHARACTERS,
    { title: 'Emperor Mapidéré', path: '/characters/emperor-mapidere', type: 'Character' },
    { title: 'Phin Zyndu', path: '/characters/phin-zyndu', type: 'Character' },
    { title: 'Goran Pira', path: '/characters/goran-pira', type: 'Character' },
    { title: 'Lügo Crupo', path: '/characters/lugo-crupo', type: 'Character' },
    { title: 'Prince Timu', path: '/characters/prince-timu', type: 'Character' },
    { title: 'Prince Phyro', path: '/characters/prince-phyro', type: 'Character' },
    { title: 'Zato Ruthi', path: '/characters/zato-ruthi', type: 'Character' },
    { title: 'Doru Solofi', path: '/characters/doru-solofi', type: 'Character' },
    { title: 'Noda Mi', path: '/characters/noda-mi', type: 'Character' },
    { title: 'Consort Risana', path: '/characters/consort-risana', type: 'Character' },
    { title: 'Gozogi Çadé', path: '/characters/gozogi-cade', type: 'Character' },
    { title: 'Than Carucono', path: '/characters/than-carucono', type: 'Character' },

    // All Places (includes main places)
    ...MAIN_PLACES,
    { title: 'Zudi', path: '/places/zudi', type: 'Place' },
    { title: 'Tunoa Islands', path: '/places/tunoa-islands', type: 'Place' },
    { title: 'Dasu', path: '/places/dasu', type: 'Place' },
    { title: 'Crescent Island', path: '/places/crescent-island', type: 'Place' },
    { title: 'Géjira', path: '/places/gejira', type: 'Place' },
    { title: 'Nokida', path: '/places/nokida', type: 'Place' },
    { title: 'Tunoa', path: '/places/tunoa', type: 'Place' },

    // Concepts
    { title: 'Dandelion', path: '/concepts/dandelion', type: 'Concept' },
    { title: 'The Gods of Dara', path: '/concepts/gods-of-dara', type: 'Concept' },
    { title: 'Grand Examination', path: '/concepts/grand-examination', type: 'Concept' },
];