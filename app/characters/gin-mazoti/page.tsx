import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character } from '../../data/wiki-data';

const characterData: Character = {
    name: "Gin Mazoti",
    image: "/characters/gin-mazoti.png",
    introduction: "Gin Mazoti is a military prodigy who rises from obscurity to become the first female Marshal in the history of Dara. She is Kuni Garu's most brilliant and loyal commander, known for her mastery of logistics, deception, and unconventional warfare.",
    infoBox: {
        aliases: "Marshal Gin, Queen of Rima and Faça",
        occupation: "Dockworker, Quartermaster, Marshal of Dasu, Queen",
        placeOfBirth: { text: "Dimushi", link: "/places/dimushi" },
        status: "Deceased",
        gender: "Female",
        affiliation: "Dandelion Court, Empire of Dara",
        nationality: { text: "Amu", link: "/places/amu" },
        firstAppeared: { text: "The Grace of Kings", link: "/books/the-grace-of-kings" },
        lastAppeared: { text: "Speaking Bones", link: "/books/speaking-bones" }
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Gin is small and wiry, with a sharp, intelligent face. For much of her early life, she disguised herself as a boy to survive and find work." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 40, link: "/books/grace-of-kings#chapter-40" } },
        { type: 'text', content: " Gin is fiercely intelligent, proud, and ambitious. She has a deep understanding of the practical realities of war, from supply lines to troop morale, which other, more glory-focused commanders often overlook. She is pragmatic and ruthless when necessary but also possesses a strong sense of honor and loyalty, particularly towards Kuni Garu, the first leader to recognize her true talent." },
        { type: 'ref', data: { book: "The Grace of Kings", chapter: 49, link: "/books/grace-of-kings#chapter-49" } },
    ],
    history: [
        {
            era: "Early Life",
            summary: [
                { type: 'text', content: "An orphan from a brothel in Dimushi, Gin survived on the streets before disguising herself as a boy to work on the docks. She served in various rebel armies as a quartermaster, constantly frustrated as her strategic advice was ignored by arrogant nobles." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 40, link: "/books/grace-of-kings#chapter-40" } },
            ]
        },
        {
            era: "Chrysanthemum-Dandelion War",
            summary: [
                { type: 'text', content: "She eventually found her way to Kuni Garu in Dasu. After she bested his top advisor in a game of cüpa, Kuni recognized her genius. In a revolutionary act, he revealed her as a woman and promoted her to Marshal of his armies." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 41, link: "/books/grace-of-kings#chapter-41" } },
                { type: 'text', content: " Gin's brilliant strategies—including the surprise attack on Rui through the Grand Tunnels and her conquest of the northern states—were the key to Kuni's victory over Mata Zyndu." },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 43, link: "/books/grace-of-kings#chapter-43" } },
                { type: 'ref', data: { book: "The Grace of Kings", chapter: 48, link: "/books/grace-of-kings#chapter-48" } },
            ]
        },
        {
            era: "Reign of Four Placid Seas",
            summary: [
                { type: 'text', content: "As the empire's highest-ranking military officer, Marshal Gin became the leader of the 'Swords,' a court faction representing the military old guard. This often put her in political conflict with Empress Jia, who led the 'Abacus' faction of civil bureaucrats. Despite their rivalry, Gin remained a steadfastly loyal and essential pillar of the Dandelion Dynasty." },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 8, link: "/books/wall-of-storms#chapter-8" } },
                { type: 'ref', data: { book: "The Wall of Storms", chapter: 29, link: "/books/wall-of-storms#chapter-29" } },
            ]
        },
    ]
};

export default function GinMazotiPage() { return <CharacterPageTemplate characterData={characterData} />; }