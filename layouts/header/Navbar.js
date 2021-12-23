import Link from "@/components/Link";
import classNames from "classnames";
import LinkItem from "@/components/LinkItem";
import { FaChevronDown } from "react-icons/fa";
import routes from "@/routes/index";

export default function Navbar({ className }) {
  return (
    <nav className={classNames(`headerMenu flex w-full relative`, className)}>
      {routes?.map((item) => (
        <div
          className={`menuItem group cursor-pointer py-7 ${
            item.subMenu ? "relative" : ""
          }`}
          key={item.id}
        >
          <Link
            href={item.path}
            className="inline-flex items-center text-sm xl:text-base text-heading px-3 xl:px-4 py-2 font-normal relative group-hover:text-slate-300"
          >
            {item.label}
            {(item?.columns && Array.isArray(item.columns)) ||
              (item.subMenu && (
                <span className="opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end">
                  <FaChevronDown className="transition duration-300 ease-in-out transform group-hover:-rotate-180" />
                </span>
              ))}
          </Link>

          {item?.subMenu && Array.isArray(item.subMenu) && (
            <div className="subMenu shadow-header bg-zinc-900 absolute start-0 opacity-0 group-hover:opacity-100">
              <ul className="text-body text-sm py-5">
                {item.subMenu.map((menu, i) => {
                  return (
                    <LinkItem data={menu} hasSubMenu={menu.subMenu} key={i} />
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
