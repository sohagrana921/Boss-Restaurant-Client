import { Link } from "react-router-dom";
import Cover from "../Shared/Cover";
import MenuItems from "../Shared/MenuItems";

const MenuCategory = ({ items, coverImg, title }) => {
  return (
    <div>
      {title && (
        <Cover
          title={title}
          subTitle={"WOULD YOU WANT TO TRY A DISH "}
          img={coverImg}
        ></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {items.map((menu) => (
          <MenuItems menu={menu} key={menu._id}></MenuItems>
        ))}
      </div>
      <div className="text-center my-4">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-orange-500 border-0 border-b-4 mb-4">
            ORDER NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
