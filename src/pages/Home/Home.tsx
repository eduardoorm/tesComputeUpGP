import './home.css';
import SpacingGrid from '../../components/grid/Grid';
import ImportantDates from '../../components/sections/ImportantDates';
import AboutInstructors from '../../components/sections/AboutInstructors';
import FrecuentsQuestions from '../../components/sections/FrecuentsQuestions';
import Courses from '../../components/courses/Courses';
import coursesData from '../../data/programs.json';
import Main from '../../components/sections/Main';
import { Course } from '../../interfaces/Course';
import { Element } from 'react-scroll';
import { useLayoutEffect } from 'react';

const Home = () => {
  useLayoutEffect(() => {
    // Desplazar la página al inicio cuando se monta el componente
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Element id="inicio" name="inicio" className="containerMain">
        <Main />
      </Element>

      <Element id="programs" name="programs" className="sectionCourses">
        <h2 className="titleSections titleSectionCourses">
          Programas <span className="titleBoxGreen">disponibles</span>
        </h2>
        <Courses coursesData={coursesData.programs as unknown as Course[]} />
      </Element>

      <Element id="modality" name="modality" className="sectionModality">
        <h2 className="titleSections">
          <span className="titleBoxGreen">Modalidad</span>
        </h2>
        <SpacingGrid />
      </Element>

      <section className="sectionImportantDates">
        <h2 className="titleSections titleImportantDate">
          Fechas <span className="titleBoxGreen">Importantes</span>
        </h2>
        <ImportantDates />
      </section>

      <Element id="instructors" name="instructors" className="sectionOpinions">
        <h2 className="titleSections">
          Sobre los <span className="titleBoxGreen">Instructores</span>
        </h2>
        <AboutInstructors />
      </Element>

      <section className="sectionFrecuentQuestions">
        <h2 className="titleSections">
          Preguntas <span className="titleBoxGreen">Frecuentes</span>
        </h2>
        <FrecuentsQuestions />
      </section>
    </>
  );
};

export default Home;