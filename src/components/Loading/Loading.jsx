import Logo from '../../assets/logo/fincontrol-logo.svg';
import './Loading.css';

const Loading = ({ title = "Welcome to the FinControl!", message = "loading your informations..." }) => {
  return (
    <div className="loading-container flex flex-col gap-5">
      <img src={Logo} alt="Logo" className="loading-logo" />
      <div className="flex flex-col justify-center text-center items-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default Loading;
