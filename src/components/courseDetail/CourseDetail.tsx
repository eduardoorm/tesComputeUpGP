import React from 'react';
import styles from './CourseDetail.module.css';
import posterJobInterview from '../../assets/images/entrevistaLaboral.jpg';
import posterMovil from '../../assets/images/movilDevelopment.jpg';
import posterPrograming from '../../assets/images/programmingCourse.jpg';

const images: { [key: string]: string } = {
  posterPrograming,
  posterJobInterview,
  posterMovil,
};

interface CourseDetailProps {
  title: string;
  startDate: string;
  category: string;
  duration: string;
  mode: string;
  price: string;
  oldPrice: string;
  slotsAvailable: number;
  image: string;
  available: boolean;
}

const CourseDetail: React.FC<CourseDetailProps> = ({
  title,
  startDate,
  category,
  duration,
  mode,
  price,
  oldPrice,
  available,
  slotsAvailable,
  image,
}) => {
  return (
    <section className={styles.courseDetail}>
      <div className={styles.container}>
        {/* Información del curso */}
        <div className={styles.courseInfo}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.date}><span>📅</span> Inicio: {startDate}</p>
          <p className={styles.category}><span>✔️</span> Categoría: {category}</p>
          <p className={styles.duration}><span>⏳</span> Duración: {duration}</p>
          <p className={styles.mode} style={{ color: mode === 'En vivo' ? 'red' : 'white' }}><span>🔴</span> Modo: {mode}</p>

          {/* Precios */}
          <div className={styles.priceContainer}>
            <span className={styles.price}>PEN {price}</span>
            <span className={styles.oldPrice}>PEN {oldPrice}</span>
          </div>

          {/* Disponibilidad */}
          <p className={styles.slots}>{slotsAvailable} CUPOS LIBRES</p>
          <p className={styles.capacity}>¡CAPACIDAD LIMITADA!</p>

          {/* Botón de compra */}
          <a
            href="https://forms.gle/gpLHypsyHEF3a839A"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btnGreen} ${!available && styles.disabled}`}
            onClick={(e) => !available && e.preventDefault()}
          >
            {available ? 'COMPRAR' : 'PRÓXIMAMENTE'}
          </a>
        </div>

        {/* Imagen del curso */}
        <div className={styles.courseImage}>
          <img src={images[image]} alt="Imagen del curso" />
        </div>
      </div>
    </section>
  );
};

export default CourseDetail;