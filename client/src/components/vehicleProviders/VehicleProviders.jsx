import "./vehicleProviders.css";
import GlobalTranz from "../../img/GlobalTranz.png";
import Lineage from "../../img/Lineage.png";
import Maersk from "../../img/Maersk.png";
import Hutt from "../../img/Hutt.png";
import IPMS from "../../img/IPMS.png";
import BOLLORE from "../../img/BOLLORE.png";

const VehicleProviders = () => {
  return (
    <div className="featured">
      <div className="pDesc">
        <h1>Our trusted rental car companies</h1>
        We've got you covered with amazing deals and competitive prices from the
        top car rental companies. No matter the type of trip you're planning, we
        can help you find the perfect vehicle to suit your needs.
      </div>
      <div className="pList">
        <div className="pListItem">
          <img src={GlobalTranz} alt="" className="pListImg" />
          <div className="pListTitles">
            <h1>GlobalTranz</h1>
            <h2>Auckland, New Zealand</h2>
          </div>
        </div>
        <div className="pListItem">
          <img src={Lineage} alt="" className="pListImg" />
          <div className="pListTitles">
            <h1>Lineage</h1>
            <h2>Istanbul, Turkey</h2>
          </div>
        </div>
        <div className="pListItem">
          <img src={Maersk} alt="" className="pListImg" />
          <div className="pListTitles">
            <h1>Maersk</h1>
            <h2>Vancouver, Canada</h2>
          </div>
        </div>
        <div className="pListItem">
          <img src={Hutt} alt="" className="pListImg" />
          <div className="pListTitles">
            <h1>Hutt</h1>
            <h2>Cape Town, South Africa</h2>
          </div>
        </div>
        <div className="pListItem">
          <img src={IPMS} alt="" className="pListImg" />
          <div className="pListTitles">
            <h1>IPMS</h1>
            <h2>Buenos Aires, Argentina</h2>
          </div>
        </div>
        <div className="pListItem">
          <img src={BOLLORE} alt="" className="pListImg" />
          <div className="pListTitles">
            <h1>BOLLORE</h1>
            <h2>Osaka, Japan</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleProviders;
