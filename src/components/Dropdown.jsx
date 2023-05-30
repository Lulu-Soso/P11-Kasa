import React, {useState} from 'react';
import iconOpen from '../assets/img/icon-open.png';
import iconClose from '../assets/img/icon-close.png';
import Description from "./Description";
import Equipments from "./Equipments";
import Reliability from "./Reliability";

const Dropdown = ({title, contentDescription, contentEquipments, contentReliability, currentPage}) => {
  const [isOpenDescription, setIsOpenDescription] = useState(false);
  const [isOpenEquipments, setIsOpenEquipments] = useState(false);
  const [isOpenReliability, setIsOpenReliability] = useState(false);

  const toggleDropdownDescription = () => {
    setIsOpenDescription(!isOpenDescription);
  };

  const toggleDropdownEquipments = () => {
    setIsOpenEquipments(!isOpenEquipments);
  };

  const toggleDropdownReliability = () => {
    setIsOpenReliability(!isOpenReliability);
  };

  const shouldShowDescription = currentPage === 'accommodation';
  const shouldShowEquipments = currentPage === 'accommodation';
  const shouldShowReliability = currentPage === 'about';

  return (
      <div className="dropdown-container">
        {shouldShowDescription && (
        <div className="dropdown">
          <div className="dropdown-title">
            <Description title={title} content={contentDescription}/>
            <button onClick={toggleDropdownDescription}>
              {isOpenDescription ? (
                  <img src={iconOpen} alt="icone d'ouverture du dropdown"/>
              ) : (
                  <img src={iconClose} alt="icone de fermeture du dropdown"/>
              )}
            </button>
          </div>
          {isOpenDescription && shouldShowDescription && <div className="dropdown-content">{contentDescription}</div>}
        </div>
        )}

        {shouldShowEquipments && (
        <div className="dropdown">
          <div className="dropdown-title">
            <Equipments title={title} content={contentEquipments}/>
            <button onClick={toggleDropdownEquipments}>
              {isOpenEquipments ? (
                  <img src={iconOpen} alt="icone d'ouverture du dropdown"/>
              ) : (
                  <img src={iconClose} alt="icone de fermeture du dropdown"/>
              )}
            </button>
          </div>
          {isOpenEquipments && shouldShowEquipments && <div className="dropdown-content">{contentEquipments}</div>}
        </div>
        )}

        {shouldShowReliability && (
        <div className="dropdown-about">
          <div className="dropdown-title">
            <Reliability title={title} content={contentReliability}/>
            <button onClick={toggleDropdownReliability}>
              {isOpenReliability ? (
                  <img src={iconOpen} alt="icone d'ouverture du dropdown"/>
              ) : (
                  <img src={iconClose} alt="icone de fermeture du dropdown"/>
              )}
            </button>
          </div>
          {isOpenReliability && shouldShowReliability && <div className="dropdown-content">{contentReliability}</div>}
        </div>
        )}
      </div>
  );
};

export default Dropdown;





