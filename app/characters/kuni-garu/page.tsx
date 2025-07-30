import CharacterPageTemplate from '../../components/CharacterPageTemplate';
import { charactersData } from '../../data/characters-data';

export default function KuniGaruPage() {
    const characterData = charactersData['kuni-garu'];

    if (!characterData) {
        return <div>Character not found.</div>;
    }

    return <CharacterPageTemplate characterData={characterData} />;
}