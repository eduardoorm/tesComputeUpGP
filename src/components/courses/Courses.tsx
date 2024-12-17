import React from 'react';
import { Link } from 'react-router-dom';
import { CoursesProps } from '../../interfaces/Course';
import posterMovil from '../../assets/images/movilDevelopment.jpg';
import posterPrograming from '../../assets/images/programmingCourse.jpg';
import posterJobInterview from '../../assets/images/entrevistaLaboral.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faSignal } from '@fortawesome/free-solid-svg-icons';

const images: { [key: string]: string } = {
  posterPrograming,
  posterJobInterview,
  posterMovil,
};

const Courses: React.FC<CoursesProps> = ({ coursesData }) => {

  return (
    <div className="containerCourses">
      {coursesData.map((course, index) => (
        <div className="containerCourseItem" key={index}>
          <div className="containerContentItem">
            <div className='containerContentItemContent'>
            <div className="containerCourseItemImage">
              <img src={images[course.image]} alt={course.tag} />
            </div>
            <span className="containerTag">{course.tag}</span>
            <p className="titleContainerCurseItem">{course.title}</p>
            <p>{course.description}</p>
            <div className="containerInfoCourse">
              <div className="containerInfoCourseItem">
              <FontAwesomeIcon icon={faSignal} style={{ color: '#0b9838', fontSize: '17px' }} />
              <p>{course.level}</p>
              </div>
              <div className="containerInfoCourseItem">
              <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#0b9838', fontSize: '20px' }} />
              <p>{course.startDateShort}</p>
              </div>
              <div className="containerInfoCourseItem">
              <FontAwesomeIcon icon={faClock} style={{ color: '#0b9838', fontSize: '20px' }} />
              <p>{course.duration}</p>
              </div>
            </div>
            <Link to={`/programa/${course.id}`}>
              <button className="btnGreen btnViewCourse" disabled={course.status === "Próximamente"}>
                {course.status}
              </button>
            </Link>
                          
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
