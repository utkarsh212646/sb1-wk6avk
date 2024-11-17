import { useEffect, useRef, useState } from 'react';
import { achievements } from '../config/siteConfig';
import { GraduationCap, Users, Trophy, History } from 'lucide-react';

const iconMap: Record<string, any> = {
  graduationCap: GraduationCap,
  users: Users,
  trophy: Trophy,
  history: History,
};

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="achievements" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Achievements
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Numbers that speak for themselves
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement) => {
            const Icon = iconMap[achievement.icon];
            return (
              <div
                key={achievement.id}
                className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-200"
              >
                <div className="flex justify-center">
                  <Icon className="h-12 w-12 text-indigo-600" />
                </div>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-gray-900">
                    {isVisible ? (
                      <span className="counter">
                        {achievement.count}
                        {achievement.id === 'success' ? '%' : '+'}
                      </span>
                    ) : (
                      '0'
                    )}
                  </div>
                  <div className="mt-2 text-lg text-gray-600">{achievement.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}