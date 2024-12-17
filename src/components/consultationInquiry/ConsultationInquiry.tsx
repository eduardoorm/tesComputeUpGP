import React from 'react';
import styles from './ConsultationInquiry.module.css';

const ConsultationInquiry: React.FC = () => {
  const whatsappNumber = '+51936302456'; // Reemplaza con tu número de WhatsApp
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          ¿Tiene alguna pregunta o duda? Puede consultar a uno de nuestros asesores
        </p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.buttonAsesor}>
          Hable con un asesor
        </a>
      </div>
    </div>
  );
};

export default ConsultationInquiry;