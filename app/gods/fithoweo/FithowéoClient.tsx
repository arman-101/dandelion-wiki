'use client';

import PageTemplate, { convertGodData } from '../../components/layout/PageTemplate';
import { God, ALL_GODS } from '../../data/wiki-data';
import { usePathname } from 'next/navigation';
import { GodNavigation } from '@/app/components/layout/PageNavigation';
import { getSurroundingPages } from '@/app/utils/navigationUtils';

interface FithowéoClientProps {
    godData: God;
}

export default function FithowéoClient({ godData }: FithowéoClientProps) {
    const pathname = usePathname();
    const { prevPage, nextPage } = getSurroundingPages(pathname, [...ALL_GODS]);
    const returnLink = { title: 'Return to All Gods', path: '/gods' };

    return (
        <>
            <GodNavigation 
                prevPage={prevPage} 
                nextPage={nextPage} 
                returnLink={returnLink} 
            />
            <PageTemplate pageData={convertGodData(godData)} infoBoxTitle="Divine Information" />
        </>
    );
}