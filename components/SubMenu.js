import Link from "@/components/Link";

export default function SubMenu({ subMenu }) {
  return (
    <div className="subMenu shadow-header bg-zinc-900 absolute start-0 opacity-0 group-hover:opacity-100">
      <ul className="text-body text-sm py-5">
        {subMenu.map((menu, i) => {
          return (
            <Link
              href={menu.path}
              key={i}
              className="pl-5 flex text-white bg-zinc-900 hover:text-black hover:bg-slate-200 items-center justify-between py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5"
            >
              {menu.label}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
