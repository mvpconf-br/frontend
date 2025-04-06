import './Home.css'
import persona from '../assets/images/Persona.png'
import icon_about from '../assets/images/icon.png'

const Home = () => {
  return (
    <main>
      <section className="top-section">
        <div className="title-and-subtitle">
          <h1>O Maior Evento De <span>MVPs Da América Latina Está Por Vir!</span></h1>

          <h2>Palestras inspiradoras, networking de alto nível e as principais tendências do mercado
            <b> — tudo isso em um só lugar. </b></h2>

          <h3>12 E 13 DE NOVEMBRO</h3>
        </div>   
      </section>

      <section className='persona-section'>
        <img src={persona} alt="" />
        <button>GARANTA SEU INGRESSO</button>
      </section>

      <section className='about-section'>
        <div className='about-content'>
          <div className='about-title-content'>
            <img src={icon_about} alt="" />
            <h2>SOBRE O EVENTO</h2>
          </div>
          <div className='paragraph-content'>
            <p>A <b>MVPCONF</b> é um evento que reúne anualmente profissionais da área da tecnologia com o objetivo de
               promover a troca de aprendizado e experiências profissionais.</p>
            <p>A MVPCONF destina <b> 100% do valor arrecadado </b> com as inscrições para instituições
               de caridade em todo o país.</p>
          </div>
        </div>
      </section>
    </main>
    
  )
}

export default Home
