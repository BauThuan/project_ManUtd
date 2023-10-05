import "./Footer.scss";
import { FiYoutube, FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { IoLogoTiktok } from "react-icons/io5";
function Footer() {
  const logo = [
    "https://assets.manutd.com/AssetPicker/images/0/0/11/53/734544/Adidas_Comp_LightBG_180xAuto1547460175451.png",
    "https://assets.manutd.com/AssetPicker/images/0/0/17/223/1171310/TeamViewer-logo-blue-footer-new1669974832812.png",
    "https://assets.manutd.com/AssetPicker/images/0/0/16/73/1067273/TezosLogo_Horizontal_Black_21644483053582.png",
    "https://assets.manutd.com/AssetPicker/images/0/0/16/224/1106098/DXC_Logo_Colour1656502503892.png",
  ];
  const logos = [
    "https://assets.manutd.com/AssetPicker/images/0/0/11/53/734550/Apollo_Comp_LightBG_180xAuto1547460405742.png",
    "https://assets.manutd.com/AssetPicker/images/0/0/17/28/1121517/Betfred-footer-logo-21659787151136.png",
    "https://assets.manutd.com/AssetPicker/images/0/0/14/137/952608/Cadbury-new-2021-footer-log1609838831293.png",
    "https://assets.manutd.com/AssetPicker/images/0/0/13/209/905560/Canon-Medical-2000x11251588088643865.jpg",
    "https://assets.manutd.com/AssetPicker/images/0/0/11/53/734552/CDD_Comp_LightBG_180xAuto1547461184438.png",
    "https://assets.manutd.com/AssetPicker/images/0/0/11/53/734554/Chevrolet_Comp_LightBG_180xAuto1547460485843.png",
    "https://assets.manutd.com/AssetPicker/images/0/0/11/53/734556/Chivas_Comp_LightBG_180xAuto1547460586288.png",
    "https://assets.manutd.com/AssetPicker/images/0/0/11/53/734562/DHL_Comp_LightBG_180xAuto1547461021282.png",
    "https://assets.manutd.com/AssetPicker/images/0/0/17/244/1176753/Doo-Group-footer-logo-vertical1671557212022.png",
    "https://assets.manutd.com/AssetPicker/images/0/0/15/101/1009129/Ecolab_Footer_Logo1628602152956.png",
  ];
  const logost = [
    "https://assets.manutd.com/AssetPicker/images/0/0/11/53/734574/Kohler_Comp_LightBG_180xAuto1547470544622.png ",
    " https://assets.manutd.com/AssetPicker/images/0/0/12/52/799813/Konami_PartnerFooter1562073557221.png",
    "https://assets.manutd.com/AssetPicker/images/0/0/12/194/836310/Marriott-onLightBG1571253423487.png ",
    " https://assets.manutd.com/AssetPicker/images/0/0/11/198/771735/MauiJim-on-White-BG1550230930070.png",
    "https://assets.manutd.com/AssetPicker/images/0/0/11/53/734576/Melitta_Comp_LightBG_180xAuto1547470651869.png ",
    " https://assets.manutd.com/AssetPicker/images/0/0/11/204/773370/LOGO180x56B1550675933086.png",
    "https://assets.manutd.com/AssetPicker/images/0/0/18/113/1208609/Paul_Smith_footer_logo1680793628991.png ",
    "https://assets.manutd.com/AssetPicker/images/0/0/11/180/767217/Remington-Logo-OnWhiteBG1549538227044.png ",
    "https://assets.manutd.com/AssetPicker/images/0/0/15/73/1001760/RenewableEnergyGroup_Logo_PNG1626936371200.png ",
    "https://assets.manutd.com/AssetPicker/images/0/0/17/11/1117062/Snapdragon-footer-logo1659446828407.png ",
    "https://assets.manutd.com/AssetPicker/images/0/0/16/109/1076687/Therabody_footer_logo1647434300176.png ",
  ];
  const end = [
    "https://assets.manutd.com/AssetPicker/images/0/0/12/95/810975/VisitMalta_WhiteBG1568380587328.png",
  ];
  const text = [
    "Dowload the App",
    "Accessibility",
    "Contact Us",
    "Jobs & Careers",
    "Privacy",
    "Cookies",
    "Terms Of Use",
    "Terms & Conditions of Sale",
    "Anti-slavery",
    "Help",
  ];
  return (
    <>
      <div className="footer">
        <div>
          {logo.map((logos) => {
            return <img src={logos} />;
          })}
        </div>
        <div>
          {logos.map((logos) => {
            return <img src={logos} />;
          })}
        </div>
        <div>
          {logost.map((logos) => {
            return <img src={logos} />;
          })}
        </div>
        <div>
          {end.map((logos) => {
            return <img src={logos} />;
          })}
        </div>
        <div className="logo-info">
          <div>
            <FiYoutube className="logo-icons" />
            <FiFacebook className="logo-icons" />
            <FiTwitter className="logo-icons" />
            <FiInstagram className="logo-icons" />
            <IoLogoTiktok className="logo-icons" />
          </div>
        </div>
      </div>
      <div className="text-logo">
        <div>
          {text.map((text) => {
            return <p>{text}</p>;
          })}
        </div>
      </div>
    </>
  );
}
export default Footer;
