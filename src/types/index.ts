export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  fee: string;
  syllabus: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  text: string;
  achievement: string;
}

export interface Achievement {
  id: string;
  count: number;
  label: string;
  icon: string;
}