import SectionTitle from "../../components/SectionTitile/SectionTitle";
import MenuItems from "../Shared/MenuItems";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <div className="mb-12">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((menu) => (
          <MenuItems menu={menu} key={menu._id}></MenuItems>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outlin border-orange-500 border-0 border-b-4 mt-4">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
