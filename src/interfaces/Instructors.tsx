export interface Instructor {
    image: string;
    description: string;
}

export interface InstructorsProps {
    instructorData: Instructor[];
}