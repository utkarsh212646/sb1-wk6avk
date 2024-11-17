import { courses } from '../config/siteConfig';
import { Check } from 'lucide-react';

export default function Courses() {
  return (
    <section id="courses" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Courses
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the right path for your future
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-gray-900">{course.title}</h3>
                <p className="mt-4 text-gray-600">{course.description}</p>
                <div className="mt-6">
                  <div className="flex items-center">
                    <span className="text-indigo-600 font-semibold">Duration:</span>
                    <span className="ml-2 text-gray-700">{course.duration}</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="text-indigo-600 font-semibold">Fee:</span>
                    <span className="ml-2 text-gray-700">{course.fee}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900">Syllabus Highlights:</h4>
                  <ul className="mt-4 space-y-3">
                    {course.syllabus.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}