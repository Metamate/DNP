import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({ url, children }) {
  const router = useRouter();

  return (
    <Link href={url}>
      <a
        className={`block px-3 py-2 rounded-md text-base font-medium ${
          router.route == url
            ? "text-white bg-gray-900"
            : "text-gray-300 hover:text-white hover:bg-gray-700"
        }  focus:outline-none focus:text-white focus:bg-gray-700`}
      >
        {children}
      </a>
    </Link>
  );
}
