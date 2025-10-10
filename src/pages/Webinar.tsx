import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Webinar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Temporary redirect to WebinarMeskiKompas
    navigate('/webinar/meski-kompas', { replace: true });
  }, [navigate]);

  return null;
};

export default Webinar;
