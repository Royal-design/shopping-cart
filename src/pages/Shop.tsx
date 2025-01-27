import { AdsPoster } from "../components/Banner/AdsPoster";
import { Footer } from "../components/Footer/Footer";
import { NewCollection } from "../components/NewCollection/NewCollection";
import { NewsLetter } from "../components/NewsLetter/NewsLetter";
import { Offer } from "../components/Offer/Offer";
import { Popular } from "../components/Popular/Popular";

export const Shop = () => {
  return (
    <>
      <AdsPoster />
      <Popular />
      <Offer />
      <NewCollection />
      <NewsLetter />
      <Footer />
    </>
  );
};
