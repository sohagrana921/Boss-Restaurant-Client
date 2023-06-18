import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import bgIMG from "../../assets/menu/banner3.jpg";
import dessertIMG from "../../assets/menu/dessert-bg.jpeg";
import pizzaIMG from "../../assets/menu/pizza-bg.jpg";
import saladIMG from "../../assets/menu/salad-bg.jpg";
import soupIMG from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitile/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();

  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover
        title={"OUR MENU"}
        subTitle={"WOULD YOU WANT TO TRY A DISH "}
        img={bgIMG}
      ></Cover>
      {/* offered */}
      <SectionTitle
        subHeading={"---Don't miss---"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert */}
      <MenuCategory
        items={desserts}
        title={"dessert"}
        coverImg={dessertIMG}
      ></MenuCategory>
      {/* Pizzas */}
      <MenuCategory
        items={pizzas}
        title={"pizza"}
        coverImg={pizzaIMG}
      ></MenuCategory>
      {/* Salad */}
      <MenuCategory
        items={salads}
        title={"salad"}
        coverImg={saladIMG}
      ></MenuCategory>
      {/* Soups */}
      <MenuCategory
        items={soups}
        title={"soup"}
        coverImg={soupIMG}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
