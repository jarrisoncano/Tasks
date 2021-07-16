export default function Button ({ text, handler, className }) {
  return (
    <button
      type='button'
      className={`btn ${className}`}
      onClick={() => handler(true)}
    >
      {text}
    </button>
  )
}
