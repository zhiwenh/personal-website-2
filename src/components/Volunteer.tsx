import { Volunteer } from '@/types';
import SectionHeading from './SectionHeading';

interface VolunteerProps {
  volunteer: Volunteer[];
}

export default function Volunteer({ volunteer }: VolunteerProps) {
  return (
    <section className="mb-8">
      <SectionHeading>Volunteer Experience</SectionHeading>
      <div className="space-y-4">
        {volunteer.map((position, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{position.organization}</h3>
              <span className="text-sm text-gray-600">{position.period}</span>
            </div>
            <p className="text-sm text-gray-600 italic">{position.role}</p>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
              {position.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
} 