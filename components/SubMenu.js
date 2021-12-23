import LinkItem from "./LinkItem";

export default function SubMenu({ data }) {
  return (
    <ul className="subMenuChild text-white absolute z-0 opacity-0 invisible top-4 w-56 py-3 bg-zinc-900">
      {data?.map((menu, i) => {
        return <LinkItem data={menu} hasSubMenu={menu.subMenu} key={i} />;
      })}
    </ul>
  );
}
