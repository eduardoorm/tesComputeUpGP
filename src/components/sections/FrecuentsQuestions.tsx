import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FrecuentsQuestionsData from '../../data/FrecuentsQuestions.json';
import './FrecuentsQuestions.css';

const FrecuentsQuestions= () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleExpansion = (panel: string) => (_: unknown, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='containerFrecuentsQuestions'>
      {FrecuentsQuestionsData.map((faq, index) => (
        <Accordion
          className='accordionFrecuentsQuestions'
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleExpansion(`panel${index}`)}
        >
          <AccordionSummary
            className='accordionSummaryFrecuentsQuestions'
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography id="titleQuestion" variant='h6'>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default FrecuentsQuestions;