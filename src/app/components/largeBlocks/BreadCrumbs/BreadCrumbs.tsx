import Link from "next/link";

const BreadCrumbs = () => {
  const links = [{ title: "link", link: "/" }];
  const linksClassName =
    "hover:underline underline-offset-2 opacity-50 cursor-pointer";

  return (
    <section className="w-fit mb-8">
      <ul className="flex list-none leading-[1.15]">
        <li>
          <Link className={linksClassName} href={"/"}>
            Главная
          </Link>
        </li>
        {links.map((link, i) => (
          <li
            key={i}
            className='before:inline-block before:w-[2ch] before:text-center before:content-["/"] opacity-100'
          >
            {link.link && i !== links.length - 1 ? (
              <div className={linksClassName}>{link.title}</div>
            ) : (
              link.title
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default BreadCrumbs;
