import { IoIosArrowForward } from "react-icons/io";
import SubMenu from "./SubMenu";
import Link from "./Link";

export default function LinkItem({ data, hasSubMenu }) {
  return (
    <li className="relative">
      <Link
        href={data.path}
        className="flex text-white bg-zinc-900 hover:text-black hover:bg-slate-200 items-center justify-between py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5"
      >
        {data.label}
        {data.subMenu && (
          <span className="text-sm mt-0.5 shrink-0">
            <IoIosArrowForward className="text-body transition duration-300 ease-in-out" />
          </span>
        )}
      </Link>
      {hasSubMenu && <SubMenu data={data.subMenu} />}
    </li>
  );
}
