import HeaderContent from "../HeaderContent/HeaderContent";
import FooterContent from "../FooterContent/FooterContent";
import Loading from "../Loading/Loading";
import { weatherContext } from "../../Context/weatherContext";
import { useContext } from "react";
const MainContent = () => {
  const { isLoading } = useContext(weatherContext);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div>
        <HeaderContent />
        <FooterContent />
      </div>
    );
  }
};

export default MainContent;
