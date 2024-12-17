import controlCalidad from '../../assets/icons/control-de-calidad.png'
import support from '../../assets/icons/apoyo.png'
import expert from '../../assets/icons/experto.png'
import laptop from '../../assets/icons/ordenador-portatil.png'

const AboutCompany = () => {
  return (
    <div className='sectionAboutContainer'>
    <h2 className='titleSections'>Sobre <span className='titleBoxGreen'>Nosotros</span></h2>
    <div>
    <iframe
      className='videoAbout'
      width='560'
      height='315'
      src='https://www.youtube.com/embed/Ycs7gq_fRcA'
      title='YouTube video player'
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
    ></iframe>

    </div>

    <section className='sectionBenefits'>
    <h2 className='titleSections'>¿Qué puedes <span className='titleBoxPurple'>esperar</span> de nosotros?</h2>
    <div className='containerBenefits'>
      <div className='containerBenefitsItems'>
        <img className='imgBenefitsItems' src={controlCalidad}/>
        <h3 className='titleBenefitsItems'>Contenido de Alta Calidad</h3>
        <p className='textBenefitsItems'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className='containerBenefitsItems'>
        <img src={support} />
        <h3 className='titleBenefitsItems'>Soporte Dedicado</h3>
        <p className='textBenefitsItems'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className='containerBenefitsItems'>
      <img src={laptop} />
        <h3 className='titleBenefitsItems'>Proyectos reales y colaborativos</h3>
        <p className='textBenefitsItems'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className='containerBenefitsItems'>
        <img src={expert} />
        <h3 className='titleBenefitsItems'>Docentes expertos</h3>
        <p className='textBenefitsItems'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
   </section> 
    </div>
  )
}

export default AboutCompany