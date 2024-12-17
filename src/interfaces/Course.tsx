export interface Schedule {
  time: string;
  countries: string[];
}

export interface OverviewData {
  prerequisites: string;
  instructor: string;
  startDate: string;
  endDate: string;
  mode: string;
  hours: string;
  sessions: string;
  certification: string;
  instructorBio: string;
  schedule: Schedule[];
}

export interface Section {
  title: string;
  items: string[];
}

export interface Course {
  id: string;
  title: string;
  teacher: string; // Nuevo campo agregado
  description: string;
  startDateShort:  string;
  startDate: string;
  category: string;
  duration: string;
  mode: string;
  price: string;
  oldPrice: string;
  tag: string;
  level: string;
  slotsAvailable: number;
  image: string;
  overview: OverviewData;
  sections: Section[];
  status: string;
}

export interface CoursesProps {
  coursesData: Course[];
}