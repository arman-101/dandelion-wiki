import { ContentBlock } from '../../data/wiki-data';
import { formatLinksInText } from '../../utils/textFormatting';
import Reference from './Reference';

interface ContentRendererProps {
    content: ContentBlock[];
    className?: string;
}

/**
 * Renders content blocks with mixed text and references
 * Handles both text formatting and reference links consistently
 */
export default function ContentRenderer({ content, className = "text-gray-700 dark:text-gray-300 leading-relaxed" }: ContentRendererProps) {
    return (
        <p className={className}>
            {content.map((block, index) => {
                if (block.type === 'text') {
                    return <span key={index}>{formatLinksInText(block.content)}</span>;
                }
                if (block.type === 'ref') {
                    return <Reference key={index} {...block.data} />;
                }
                return null;
            })}
        </p>
    );
}
