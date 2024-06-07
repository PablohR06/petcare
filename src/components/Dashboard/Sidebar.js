import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPaw, FaTachometerAlt, FaDog, FaFileAlt, FaCogs, FaChartBar, FaEnvelope, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import { useSuperAdmin } from '../../SuperAdminContext';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { logout } = useSuperAdmin();

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className={`bg-gray-800 text-white ${isExpanded ? 'w-64' : 'w-16'} transition-all duration-300 h-screen`}>
      <div className="flex items-center justify-between p-4">
        <FaPaw size={30} onClick={handleExpand} className="cursor-pointer" />
        {isExpanded && <h3>Animal Care</h3>}
      </div>
      <nav className="flex flex-col p-4">
        <NavLink to="/dashboard" className="nav-link" activeClassName="active">
          <FaTachometerAlt /> {isExpanded && 'Panel'}
        </NavLink>
        <NavLink to="/dashboard/animals" className="nav-link" activeClassName="active">
          <FaDog /> {isExpanded && 'Animales'}
        </NavLink>
        <NavLink to="/dashboard/articles" className="nav-link" activeClassName="active">
          <FaFileAlt /> {isExpanded && 'Artículos'}
        </NavLink>
        <NavLink to="/dashboard/settings" className="nav-link" activeClassName="active">
          <FaCogs /> {isExpanded && 'Configuración'}
        </NavLink>
        <NavLink to="/dashboard/reports" className="nav-link" activeClassName="active">
          <FaChartBar /> {isExpanded && 'Informes'}
        </NavLink>
        <NavLink to="/dashboard/messages" className="nav-link" activeClassName="active">
          <FaEnvelope /> {isExpanded && 'Buzón'}
        </NavLink>
        <NavLink to="/dashboard/support" className="nav-link" activeClassName="active">
          <FaQuestionCircle /> {isExpanded && 'Soporte'}
        </NavLink>
        <button onClick={handleLogout} className="nav-link flex items-center mt-auto">
          <FaSignOutAlt /> {isExpanded && 'Cerrar Sesión'}
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
