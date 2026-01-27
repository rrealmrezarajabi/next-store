import { APP_NAME } from "@/lib/constants";
import { ShoppingCart , UserIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.png"
              alt="logo"
              height={48}
              width={48}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-2">
          <ThemeToggle/>
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart />
              cart
            </Link>
          </Button>
          <Button asChild >
            <Link href="/sign-in">
              <UserIcon />
              sign-in
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
