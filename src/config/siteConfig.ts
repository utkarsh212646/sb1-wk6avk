export const siteConfig = {
  name: "Excellence Academy",
  slogan: "India's No.1 Coaching Center",
  description: "Transforming dreams into reality with excellence in education since 2010",
  location: {
    address: "Main Road, Near SBI Bank, Garhwa, Jharkhand",
    coordinates: {
      lat: 24.1773,
      lng: 83.8143
    }
  },
  contact: {
    phone: "+91 98765 43210",
    email: "info@excellenceacademy.in"
  },
  socialLinks: {
    facebook: "https://facebook.com/excellenceacademy",
    instagram: "https://instagram.com/excellenceacademy",
    youtube: "https://youtube.com/excellenceacademy"
  }
};

export const achievements: Achievement[] = [
  {
    id: "students",
    count: 7000,
    label: "Satisfied Students",
    icon: "users"
  },
  {
    id: "teachers",
    count: 50,
    label: "Expert Faculty",
    icon: "graduationCap"
  },
  {
    id: "success",
    count: 95,
    label: "Success Rate",
    icon: "trophy"
  },
  {
    id: "years",
    count: 13,
    label: "Years of Excellence",
    icon: "history"
  }
];

export const courses: Course[] = [
  {
    id: "jee",
    title: "JEE Main & Advanced",
    description: "Comprehensive preparation for India's premier engineering entrance examinations",
    duration: "2 Years",
    fee: "₹85,000/year",
    syllabus: [
      "Complete Physics, Chemistry & Mathematics",
      "Weekly Mock Tests",
      "Doubt Clearing Sessions",
      "Personal Mentoring"
    ]
  },
  {
    id: "neet",
    title: "NEET-UG",
    description: "Expert guidance for medical aspirants with proven success record",
    duration: "2 Years",
    fee: "₹90,000/year",
    syllabus: [
      "Biology, Physics & Chemistry",
      "NCERT Focus",
      "Daily Practice Problems",
      "Medical Terms & Concepts"
    ]
  },
  {
    id: "foundation",
    title: "Foundation Course",
    description: "Early preparation for Class 9th & 10th students",
    duration: "1 Year",
    fee: "₹45,000/year",
    syllabus: [
      "Basic Sciences & Mathematics",
      "Mental Ability",
      "Competitive Exam Preparation",
      "Academic Excellence"
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    text: "Excellence Academy helped me achieve my dream of getting into IIT Bombay. The faculty's dedication and structured approach made all the difference.",
    achievement: "AIR 245 in JEE Advanced"
  },
  {
    id: "2",
    name: "Rahul Kumar",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    text: "The personalized attention and rigorous practice sessions at Excellence Academy were key to my success in NEET.",
    achievement: "NEET Rank 534"
  },
  {
    id: "3",
    name: "Anjali Gupta",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    text: "From average scores to top grades, Excellence Academy transformed my academic performance completely.",
    achievement: "State Board Topper"
  }
];