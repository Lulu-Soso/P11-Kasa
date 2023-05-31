import React, {useState} from 'react';
import iconOpen from '../assets/img/icon-open.png';
import iconClose from '../assets/img/icon-close.png';

const Dropdown = ({title, contentDescription, contentEquipments, contentReliability, currentPage}) => {
  const [isOpenDescription, setIsOpenDescription] = useState(false);
  const [isOpenEquipments, setIsOpenEquipments] = useState(false);
  const [isOpenReliability, setIsOpenReliability] = useState(false);
  const [isOpenSecurity, setIsOpenSecurity] = useState(false);
  const [isOpenRespect, setIsOpenRespect] = useState(false);
  const [isOpenService, setIsOpenService] = useState(false);

  const toggleDropdownDescription = () => {
    setIsOpenDescription(!isOpenDescription);
  };

  const toggleDropdownEquipments = () => {
    setIsOpenEquipments(!isOpenEquipments);
  };

  const toggleDropdownReliability = () => {
    setIsOpenReliability(!isOpenReliability);
  };

  const toggleDropdownSecurity = () => {
    setIsOpenSecurity(!isOpenSecurity);
  };

  const toggleDropdownRespect = () => {
    setIsOpenRespect(!isOpenRespect);
  };

  const toggleDropdownService = () => {
    setIsOpenService(!isOpenService);
  };

  const shouldShowDescription = currentPage === 'accommodation';
  const shouldShowEquipments = currentPage === 'accommodation';
  const shouldShowReliability = currentPage === 'about';
  const shouldShowSecurity = currentPage === 'about';
  const shouldShowRespect = currentPage === 'about';
  const shouldShowService = currentPage === 'about';

  return (
      <div>
        <div className="dropdown-container">
          {shouldShowDescription && (
              <div className="dropdown">
                <div className="dropdown-title">
                  <h3>Description</h3>
                  <button onClick={toggleDropdownDescription}>
                    {isOpenDescription ? (
                        <img src={iconOpen} alt="icone d'ouverture du dropdown"/>
                    ) : (
                        <img src={iconClose} alt="icone de fermeture du dropdown"/>
                    )}
                  </button>
                </div>
                {isOpenDescription && shouldShowDescription &&
                    <div className="dropdown-content">{contentDescription}</div>}
              </div>
          )}

          {shouldShowEquipments && (
              <div className="dropdown">
                <div className="dropdown-title">
                  <h3>Equipements</h3>
                  <button onClick={toggleDropdownEquipments}>
                    {isOpenEquipments ? (
                        <img src={iconOpen} alt="icone d'ouverture du dropdown"/>
                    ) : (
                        <img src={iconClose} alt="icone de fermeture du dropdown"/>
                    )}
                  </button>
                </div>
                {isOpenEquipments && shouldShowEquipments &&
                    <div className="dropdown-content">{contentEquipments}</div>}
              </div>
          )}
        </div>

        <div className="about-container">
          {shouldShowReliability && (
              <div className="dropdown-about">
                <div className="dropdown-title">
                  <h3>Fiabilité</h3>
                  <button onClick={toggleDropdownReliability}>
                    {isOpenReliability ? (
                        <img src={iconOpen} alt="icone d'ouverture du dropdown"/>
                    ) : (
                        <img src={iconClose} alt="icone de fermeture du dropdown"/>
                    )}
                  </button>
                </div>
                {isOpenReliability && shouldShowReliability &&
                    <div className="dropdown-content">
                      <p>La annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                    </div>}
              </div>
          )}

          {shouldShowRespect && (
              <div className="dropdown-about">
                <div className="dropdown-title">
                  <h3>Respect</h3>
                  <button onClick={toggleDropdownRespect}>
                    {isOpenRespect ? (
                        <img src={iconOpen} alt="icone d'ouverture du dropdown"/>
                    ) : (
                        <img src={iconClose} alt="icone de fermeture du dropdown"/>
                    )}
                  </button>
                </div>
                {isOpenRespect && shouldShowRespect &&
                    <div className="dropdown-content">
                      <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.</p>
                    </div>}
              </div>
          )}

          {shouldShowSecurity && (
              <div className="dropdown-about">
                <div className="dropdown-title">
                  <h3>Sécurité</h3>
                  <button onClick={toggleDropdownSecurity}>
                    {isOpenSecurity ? (
                        <img src={iconOpen} alt="icone d'ouverture du dropdown"/>
                    ) : (
                        <img src={iconClose} alt="icone de fermeture du dropdown"/>
                    )}
                  </button>
                </div>
                {isOpenSecurity && shouldShowSecurity &&
                    <div className="dropdown-content">
                      <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question</p>
                    </div>}
              </div>
          )}

          {shouldShowService && (
              <div className="dropdown-about">
                <div className="dropdown-title">
                  <h3>Service</h3>
                  <button onClick={toggleDropdownService}>
                    {isOpenService ? (
                        <img src={iconOpen} alt="icone d'ouverture du dropdown"/>
                    ) : (
                        <img src={iconClose} alt="icone de fermeture du dropdown"/>
                    )}
                  </button>
                </div>
                {isOpenService && shouldShowService &&
                    <div className="dropdown-content">
                      <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </div>}
              </div>
          )}
        </div>
      </div>
  );
};

export default Dropdown;





