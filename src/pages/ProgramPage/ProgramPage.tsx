import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Program from '../../components/program/Program';
import CourseDetail from '../../components/courseDetail/CourseDetail';
import CourseOverview from '../../components/courseOverview/CourseOverview';
import ConsultationInquiry from '../../components/consultationInquiry/ConsultationInquiry';
import programsData from '../../data/programs.json';

const ProgramPage: React.FC = () => {
  const { programID } = useParams<{ programID: string }>();
  const [programData, setProgramData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProgramData = async () => {
      try {
        const program = programsData.programs.find((program) => program.id === programID);
        if (program) {
          setProgramData(program);
        } else {
          setError('Programa no encontrado');
        }
      } catch (err) {
        setError('Error al cargar los datos');
      } finally {
        setLoading(false);
      }
    };

    if (programID) {
      fetchProgramData();
    }
  }, [programID]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {programData && (
        <>
          <CourseDetail
            title={programData.title}
            startDate={programData.startDate}
            category={programData.category}
            duration={programData.duration}
            mode={programData.mode}
            price={programData.price}
            oldPrice={programData.oldPrice}
            slotsAvailable={programData.slotsAvailable}
            image={programData.image}
            available= {programData.available}
          />
          <Program data={programData.sections} />
          <CourseOverview overviewData={programData.overview} />
          <ConsultationInquiry />
        </>
      )}
    </div>
  );
};

export default ProgramPage;