import { IconContext } from 'react-icons';

const Icon = ({ icon, className, style }) => {
  return (
    <IconContext.Provider value={{ className, style }}>
      {icon}
    </IconContext.Provider>
  );
};

export default Icon;