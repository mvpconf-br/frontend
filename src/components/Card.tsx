import '../components/Card.css'

export default function Card({icon_image, title, text}: CardProps) {
  return (
    <div className='card'>
      <div className='image-content'>
        <img src={icon_image} alt='Ícone do card'/>
      </div>
      <h2>
        {title}
      </h2>
      <p>
        {text}
      </p>
    </div>
  )
}

interface CardProps {
  icon_image: string;
  title: string;
  text: string;
}


