import React from 'react';

interface MissionVisionProps {
  mission: string;
  vision: string;
  values: string[];
}

const MissionVision: React.FC<MissionVisionProps> = ({ mission, vision, values }) => {
  return (
    <section className="py-16 bg-hpelight text-hpedark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-hpegreen mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">{mission}</p>
        </div>

        {/* Vision Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-hpegreen mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700">{vision}</p>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="text-3xl font-bold text-hpegreen mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            {values.map((value, index) => (
              <li key={index} className="mb-2">{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MissionVision; 