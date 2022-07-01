import classNames from "classnames";
import { FaChevronDown } from "react-icons/fa";
import routes from "@/routes/index";
import Link from "@/components/Link";
import SubMenu from "@/components/SubMenu";

export default function Navbar({ className }) {
  return (
    <nav className={classNames(`headerMenu flex w-full relative`, className)}>
      {routes?.map((item, i) => (
        <div
          className={`menuItem group cursor-pointer py-7 ${
            item.subMenu ? "relative" : ""
          }`}
          key={i}
        >
          <Link
            href={item.path}
            className="inline-flex items-center text-sm xl:text-base text-heading px-3 xl:px-4 py-2 font-normal relative group-hover:text-slate-300"
          >
            {item.label}
            {item.subMenu && (
              <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
                <FaChevronDown className="transition duration-300 ease-in-out transform group-hover:-rotate-180" />
              </span>
            )}
          </Link>
          {/*  */}
          {item?.subMenu && <SubMenu subMenu={item.subMenu} />}
        </div>
      ))}
    </nav>
  );
}
