import React, { useState } from 'react';
import styles from './Program.module.css';

interface ProgramProps {
  data: {
    title: string;
    items: string[];
  }[];
}

const Program: React.FC<ProgramProps> = ({ data }) => {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      <h3 className={styles.titleProgram}>Malla Curricular</h3>
      <div className={styles.container}>
        {data.map((section, index) => (
          <div className={styles.section} key={index}>
            <h3
              className={`${styles.sectionTitle} ${
                openSections.includes(index) ? styles.active : ''
              }`}
              onClick={() => toggleSection(index)}
            >
              <span>{section.title}</span>
              <span
                className={`${styles.arrow} ${
                  openSections.includes(index)
                    ? styles.arrowUp
                    : styles.arrowDown
                }`}
              >
                ▼
              </span>
            </h3>
            {openSections.includes(index) && (
              <ul className={styles.itemsList}>
                {section.items.map((item, idx) => (
                  <li className={styles.item} key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Program;
