import React from 'react';
import styles from './CourseOverview.module.css';

interface OverviewData {
  prerequisites: string;
  instructor: string;
  instructorBio: string;
  startDate: string;
  endDate: string;
  mode: string;
  hours: string;
  sessions: string;
  certification: string;
  schedule: {
    time: string;
    countries: string[];
  }[];
}

interface CourseOverviewProps {
  overviewData: OverviewData;
}

const CourseOverview: React.FC<CourseOverviewProps> = ({ overviewData }) => {
  console.log("intructor ", overviewData)
  return (
    <div className={styles.container}>
      <div className={styles.containerItem}>
        <div className={styles.details}>
          <h3 className={styles.sectionTitle}>Pre-requisitos:</h3>
          <p className={styles.text}>{overviewData.prerequisites}</p>
          <h3 className={styles.sectionTitle}>Profesor: {overviewData.instructor}</h3>
          <p className={styles.text}>
           {overviewData.instructorBio}
          </p>
        </div>
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <span className={styles.icon}>📅</span> Inicio: {overviewData.startDate}
          </div>
          <div className={styles.infoItem}>
            <span className={styles.icon}>📅</span> Fin: {overviewData.endDate}
          </div>
          <div className={styles.infoItem}>
            <span className={styles.icon}>💻</span> {overviewData.mode}
          </div>
          <div className={styles.infoItem}>
            <span className={styles.icon}>⏰</span> {overviewData.hours}
          </div>
          <div className={styles.infoItem}>
            <span className={styles.icon}>📚</span> {overviewData.sessions} - Sesiones
          </div>
          <div className={styles.infoItem}>
            <span className={styles.icon}>⭐</span> {overviewData.certification}
          </div>
          {overviewData.schedule.map((item, index) => (
            <div className={styles.infoItem} key={index}>
              <span className={styles.icon}>🕒</span> {item.time} {item.countries.join(', ')}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;