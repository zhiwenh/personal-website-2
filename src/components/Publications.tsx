import { Publication } from '@/types';
import SectionHeading from './SectionHeading';

interface PublicationsProps {
  publications: Publication[];
}

export default function Publications({ publications }: PublicationsProps) {
  return (
    <section className="mb-8">
      <SectionHeading>Publications</SectionHeading>
      <div className="space-y-4">
        {publications.map((publication, index) => (
          <div key={index} className="flex flex-col">
            <h3 className="font-medium">{publication.title}</h3>
            <p className="text-sm text-gray-600">
              {publication.authors.join(', ')} • {publication.date}
            </p>
            <p className="text-sm text-gray-600 italic">{publication.journal}</p>
            {publication.link && (
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                View Publication
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 