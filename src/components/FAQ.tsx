import './FAQ.css'

export default function FAQ({title, content}: FAQProps) {
  return(
    <details>
      <summary>{title}</summary>
      <p>{content}</p>
    </details>
  )
}

interface FAQProps {
  title: string;
  content: string;
}