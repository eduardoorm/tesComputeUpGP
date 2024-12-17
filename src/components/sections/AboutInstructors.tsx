import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import joelIbaceta from '../../assets/images/joel-ibaceta.jpg';
import isabelCordova from '../../assets/images/IsabelCordova.jpg';
import nicoleVassallo from '../../assets/images/nicoleVassallo.jpeg';
import dataInstructors from '../../data/instructors.json';

import './AboutInstructors.css'

const images: { [key: string]: string } = {
  joelIbaceta,
  isabelCordova,
  nicoleVassallo,
}

const AboutInstructors = () => {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
    <Grid item xs={12} >
    {dataInstructors.map((item, index) => (         // Ahora se itera sobre 3 elementos
      <Grid container  spacing={2} >
          <Grid key={index} 
           item display={'flex'} flexWrap={'wrap'} justifyContent={'center'}>
            <Paper
            className='containerInstructorItem'
              sx={{
                height: "100%",
                width:  "80%",
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 5, // Si el valor es 0 (primer elemento), el ancho será 300, de lo contrario será 400
                backgroundColor: "transparent",
              }}
            >
          <img className='imgInstructor' src={images[item.image]}/>
          <p className='descriptionInstructor'>{item.description}</p>
            </Paper>
          </Grid>
      </Grid>
     ))}
    </Grid>
  </Grid>
  )
}

export default AboutInstructors