import { styles } from "@/styles";

const navLinks = [
  {
    id: 1,
    name: "Home",
    url: "#home",
  },
  {
    id: 2,
    name: "About",
    url: "#about",
  },
  {
    id: 3,
    name: "Services",
    url: "#services",
  },

  {
    id: 4,
    name: "Contact",
    url: "#contact",
  },
];

export const NavLInks = () => {
  return (
    <div className="flex flex-row gap-6">
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={link.url}
          className={`${styles.secondaryText} font-semibold`}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export const NavLInksMobile = () => {
  return (
    <div className="flex flex-col gap-4">
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={link.url}
          className={`${styles.secondaryText} font-semibold`}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};
