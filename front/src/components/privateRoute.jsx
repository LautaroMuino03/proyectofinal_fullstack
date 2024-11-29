import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ element }) => {
  const location = useLocation();

  // Verifica si se llegó a la ruta directamente desde el navegador
  const accessedDirectly = location.key === 'default'; 

  return accessedDirectly ? <Navigate to="/" /> : element;
};
PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default PrivateRoute;



