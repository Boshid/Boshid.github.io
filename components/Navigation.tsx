type NavProps = {
  title: string;
  active: string;
};

export default function Navigation({ title, active }: NavProps) {
  const menus = [
    { name: "History", href: "/history" },
    { name: "Billing", href: "/billing" },
    { name: "Settings", href: "/settings" },
  ];

  return (
    <div class="bg-white w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <div class="text-2xl  ml-1 font-bold">
          {title}
        </div>
      </div>
      <nav class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </nav>
    </div>
  );
}
