import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faDownload, faVideo, faUser } from '@fortawesome/free-solid-svg-icons';
import './Modality.css';

export default function SpacingGrid() {
  const titles = ['100% Online', 'Material descargable', 'Clases grabadas', 'Asesoramiento'];

  const images: { [key: string]: string | React.ReactNode } = {
    '100% Online': <FontAwesomeIcon icon={faWifi} style={{ color: '#000000', fontSize: '50px' }} />,
    'Material descargable': <FontAwesomeIcon icon={faDownload} style={{ color: '#0000008', fontSize: '50px' }} />,
    'Clases grabadas': <FontAwesomeIcon icon={faVideo} style={{ color: '#000000', fontSize: '50px' }} />,
    'Asesoramiento': <FontAwesomeIcon icon={faUser} style={{ color: '#000000', fontSize: '50px' }} />
  };

  return (
    <Grid className='containerModality' sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="space-around" spacing={2}>
          {titles.map((title) => (
            <Grid key={title} item>
              <Paper
                className='containerModalityItem'
                sx={{
                  width: 250,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              >
                <div className="imgModalityItem">{images[title]}</div>
                <h3 className='titleModalityItem'>{title}</h3>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
