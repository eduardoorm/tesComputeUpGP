import { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faGraduationCap } from '@fortawesome/free-solid-svg-icons'; // Importar iconos de Font Awesome
import './Main.css';

const Main = () => {
  const [fadeInAchievements, setFadeInAchievements] = useState(false);
  const [fadeInButton, setFadeInButton] = useState(false); // Estado para animar el botón

  // Maneja el desplazamiento hacia la sección "programs"
  const handleScrollToPrograms = () => {
    scroller.scrollTo('programs', {
      smooth: true,
      duration: 100,
      offset: -70, // Ajusta según la altura del navbar
    });
  };

  // Usamos useEffect para activar las animaciones de los logros y el botón después de que se haya renderizado
  useEffect(() => {
    const timeoutAchievements = setTimeout(() => {
      setFadeInAchievements(true);
    }, 100); // Ajusta el tiempo si es necesario

    const timeoutButton = setTimeout(() => {
      setFadeInButton(true); // Esto activará la animación del botón
    }, 100); // El botón se anima después de 1.5 segundos

    return () => {
      clearTimeout(timeoutAchievements);
      clearTimeout(timeoutButton);
    };
  }, []);

  return (
    <div className='SectionMainCenter'>
      <h2 className='title titleMain'>ComputeUp</h2>
      <p className='subtitle subtitleMain'>
        Nuestra misión es prepararte para tu futura entrevista laboral.
      </p>
      <div className='containerButtonsMain'>
        {/* Botón con animación fadeIn */}
        <button
          className={`btnMain btnGreenMain btnGreen btnTransitionGreen ${
            fadeInButton ? 'fadeInVisible' : ''
          }`}
          onClick={handleScrollToPrograms}
        >
          Ver Programas
        </button>
      </div>

      <div className='companyAchievementsContainer'>
        <div
          className={`companyAchievementsContainerItems ${
            fadeInAchievements ? 'fadeInVisible' : ''
          }`}
        >
          <FontAwesomeIcon icon={faTrophy} className='companyAchievementsItemImg'  />
          <p>+3000 Estudiantes alcanzados</p>
        </div>
        <div
          className={`companyAchievementsContainerItems ${
            fadeInAchievements ? 'fadeInVisible' : ''
          }`}
        >
          <FontAwesomeIcon icon={faGraduationCap} className='companyAchievementsItemImg' />
          <p>+200 Estudiantes inscritos</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
