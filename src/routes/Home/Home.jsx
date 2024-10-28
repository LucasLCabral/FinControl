import DashboardImg from '../../assets/home-tes.png';
import { TypeAnimation } from 'react-type-animation';

// Função que retorna o TypeAnimation
const AnimatedText = ({ words }) => {
  return (
    <TypeAnimation
      sequence={words}
      wrapper="span"
      speed={30}
      repeat={Infinity}
    />
  );
};

export default function Home() {
  // Define a sequência de palavras e o tempo de espera
  const animationWords = [
    "Expenses",
    3000,
    "Profits",
    3000,
    "Finances",
    3000,
    "Life",
    3000,
  ];

  return (
    <div className='flex items-center justify-center min-h-[80vh] max-w-7xl mx-auto mt-0'>
      <div className="text-side flex flex-col items-center gap-5">
        <h1 className='text-7xl font-bold text-green-950'>
          Manage all your <span className='text-green-500'><AnimatedText words={animationWords} /> </span>
        </h1>
        <p className='text-center w-[800px] text-sm font'>
          With our expense tracking app, you can manage your spending easily and stay organized. Track all your transactions, view monthly expenses, and take control of your budget to reach your financial goals.
        </p>

        <div className='flex gap-5'>
          <button className='my-4 bg-gradient-to-r from-green-400 to-green-500 px-3 py-2 rounded-full text-xl text-white w-32'>Get Started</button>
          <button className='my-4 bg-zinc-100 px-3 py-2 rounded-full text-xl text-green-500 w-32'>About Us</button>
        </div>
      </div>
    </div>
  );
}
