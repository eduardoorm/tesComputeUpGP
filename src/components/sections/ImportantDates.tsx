import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import '../../components/sections/ImportantDates.css';
import data from '../../data/importantDates.json';

const Ribbon = ({ available, discount }: { available: boolean, discount: string | undefined }) => {
  const ribbonStyle = available ? 'ribbon available' : 'ribbon soldOut';

  return (
    <div className={ribbonStyle}>
      <span className='ribbonText'>{available ? 'Disponible' : 'No Disponible'}</span>
      {discount && <small>{discount}</small>}
    </div>
  );
};

export default function ImportantDates() {
  return (
    <Grid className='containerImportantDates' sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid className='containerImportantDatesGridItems' item xs={12}>
        <Grid container justifyContent="space-around" spacing={4}>
          {data.map((item, index) => (
            <Grid key={index} item className='containerImportantDateGridItem'>
              <Paper
                className='containerImportantDateItem'
                sx={{
                  height: 400,
                  padding: 5,
                  borderRadius: 4,
                  overflow: 'hidden',
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              >
                <Ribbon available={item.available} discount={item.discount} />
                <div className='txtCenter containerTextImportanDates'>
                  <p className=''>DESDE EL</p>
                  <p className='txtDate'>{item.date}</p>
                  <p className='txtSaleModality'>{item.title}</p>
                  <p className='textDescription'>{item.description}</p>
                  <p className='txtPrice txtWeight'>{item.price}</p>
                  <p className=''>{item.until}</p>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}