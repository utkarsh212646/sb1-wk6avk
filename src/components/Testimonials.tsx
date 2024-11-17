import { useState } from 'react';
import { testimonials } from '../config/siteConfig';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Student Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Hear from our successful students
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="relative h-96 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute w-full transform transition-all duration-500 ease-in-out ${
                  index === currentIndex
                    ? 'translate-x-0 opacity-100'
                    : index < currentIndex
                    ? '-translate-x-full opacity-0'
                    : 'translate-x-full opacity-0'
                }`}
              >
                <div className="bg-white rounded-lg shadow-xl p-8 mx-auto max-w-3xl">
                  <div className="flex items-center justify-center mb-8">
                    <Quote className="h-12 w-12 text-indigo-600 opacity-25" />
                  </div>
                  <div className="text-center">
                    <p className="text-xl text-gray-600 italic mb-8">{testimonial.text}</p>
                    <img
                      className="h-20 w-20 rounded-full mx-auto mb-4"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-indigo-600 mt-1">{testimonial.achievement}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}