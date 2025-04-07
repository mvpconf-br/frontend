import './SpeakersCard.css'

export default function Speakerscard({Image, Name, Role}:SpeakersCardProps) {
  return (
    <div className="speakers-card">
      <img src={Image} alt="" />
      <h2>{Name}</h2>
      <h3>{Role}</h3>
    </div>
  )
}

interface SpeakersCardProps {
  Image: string;
  Name: string;
  Role: string;
}