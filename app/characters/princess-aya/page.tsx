'use client';

import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { Character, ALL_CHARACTERS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import TopPageNavigation from '@/app/components/TopPageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

export default function PrincessAyaPage() {
  const pathname = usePathname();
  const { prevPage, nextPage } = getSurroundingPages(pathname, ALL_CHARACTERS);
  const returnLink = { title: 'Return to All Characters', path: '/characters' };

  const characterData: Character = {
    name: "Princess Aya",
    image: "/characters/princess-aya.png",
    introduction: "A skilled warrior and daughter of Gin Mazoti who fights against the Lyucu occupation, embodying the spirit of resistance and the legacy of her mother's military genius.",
    infoBox: {
        "Origin": "Dara",
        "Culture": "Dara",
        "Role": "Princess, Warrior, Resistance Leader",
        "First Appearance": { text: "The Veiled Throne", link: "/books/the-veiled-throne" },
        "Key Relationships": [
            { text: "Gin Mazoti", link: "/characters/gin-mazoti" },
            { text: "Emperor Monad", link: "/characters/emperor-monad" },
            { text: "Takval", link: "/characters/takval" },
            { text: "Princess Théra", link: "/characters/princess-thera" }
        ]
    },
    appearanceAndPersonality: [
        { type: 'text', content: "Princess Aya bears a striking resemblance to her mother, Gin Mazoti, both in appearance and in the fierce determination that radiates from her. Her features are strong and confident, reflecting the martial training she has received and the challenges she has faced. She carries herself with the bearing of a natural leader, someone who has earned respect through both her royal blood and her own accomplishments." },
        { type: 'text', content: "Her personality is characterized by a blend of her mother's strategic brilliance and her own unique perspective on leadership and warfare. Aya is intelligent, resourceful, and deeply committed to the cause of Dara's liberation. She is not content to simply wait for others to act; she takes initiative and leads by example, inspiring others to join the resistance against the Lyucu occupation." }
    ],
    history: [
        {
            era: "Early Life and Training",
            summary: [
                { type: 'text', content: "Princess Aya was born into the Dandelion Dynasty, the daughter of the legendary Marshal Gin Mazoti. From an early age, she was exposed to the military arts and strategic thinking that had made her mother one of the most respected commanders in Dara's history. Her education was comprehensive, covering not only traditional royal subjects but also the practical skills needed for leadership and warfare." },
                { type: 'text', content: "Aya's training was particularly focused on the innovative military techniques and strategies that her mother had developed. She learned to think strategically, to understand the importance of logistics and supply lines, and to recognize the value of unconventional approaches to warfare. This education would prove invaluable when she was forced to lead resistance efforts against the Lyucu occupation." }
            ]
        },
        {
            era: "The Lyucu Occupation",
            summary: [
                { type: 'text', content: "When the Lyucu invaded and occupied Dara, Princess Aya found herself in a position where she had to put her training and abilities to the test. Unlike many of her royal relatives, she chose to actively resist the occupation rather than simply endure it. She began organizing resistance efforts, using her knowledge of military strategy and her ability to inspire others to fight against the Lyucu conquerors." },
                { type: 'text', content: "During this period, Aya demonstrated both her strategic brilliance and her personal courage. She was involved in numerous operations against the Lyucu, ranging from small-scale raids to larger coordinated attacks. Her leadership was instrumental in maintaining the morale of the resistance and in demonstrating that the Dara people were not willing to accept foreign rule without a fight." }
            ]
        },
        {
            era: "Leadership and Resistance",
            summary: [
                { type: 'text', content: "As the resistance movement grew, Princess Aya emerged as one of its most important leaders. She was able to coordinate efforts across different regions and to work with various factions within the resistance. Her royal status gave her legitimacy in the eyes of many Dara people, while her military skills and personal courage earned her the respect of resistance fighters." },
                { type: 'text', content: "Aya's leadership was marked by her ability to adapt to changing circumstances and to learn from both successes and failures. She was not afraid to take risks when necessary, but she also understood the importance of careful planning and preparation. Her efforts were crucial in maintaining the resistance movement and in preparing for the eventual liberation of Dara." }
            ]
        }
    ]
  };

  return (
    <>
      <TopPageNavigation prevPage={prevPage} nextPage={nextPage} returnLink={returnLink} />
      <CharacterPageTemplate characterData={characterData} />
    </>
  );
} 