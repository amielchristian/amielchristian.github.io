import SocialsBar from "./SocialsBar"

export default function Footer() {
  return (
    <footer
      className='w-full h-60 pt-8 p-2
        dark:text-[var(--dark)] dark:bg-[var(--light)]
        text-[var(--light)] bg-[var(--dark)]
        grid justify-center gap-4
  '
    >
      <div className='font-[BricolageGrotesque] font-bold items-center align-center grid grid-rows-2 md:grid-rows-1 grid-cols-2 md:grid-cols-4 gap-2'>
        <a className='text-center' href='/'>
          Home
        </a>
        <a className='text-center' href='/about'>
          About
        </a>
        <a className='text-center' href='/works'>
          Works
        </a>
        <a className='text-center' href='/contact'>
          Contact
        </a>
      </div>

      <div className='text-center text-sm'>
        <SocialsBar />
        <div className='text-center'>
          <span className='font-[Junicode] font-bold text-lg'>
            Amiel Christian
          </span>
          <span className='mx-2'>•</span>
          <span className='font-[BricolageGrotesque]'>© 2025</span>
        </div>
        <div className='text-center font-[BricolageGrotesque]'>
          Amiel Christian Mala-ay - software engineer, machine learning
          specialist
        </div>
      </div>
    </footer>
  );
}
