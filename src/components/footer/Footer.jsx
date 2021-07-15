export default function Footer() {
  return (
    <nav className='navbar fixed-bottom bg-light'>
      <div className='container-sm d-flex justify-content-center'>
        <a
          className=' nav-link d-flex align-items-center text-dark'
          href='https://github.com/jarrisoncano'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='mr-2 rounded-circle align-top'
            src='image.jpg'
            alt='Jarrison Cano'
            width='30'
          />
          <p className='d-inline mb-0 fs-2'>Jarrison Cano</p>
        </a>
      </div>
    </nav>
  )
}
