import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-6 text-center">
      <Image src={logo} alt="logo" width={96} height={96} className="mb-8" />

      <h1 className="text-6xl font-bold tracking-tight mb-4">404</h1>
      <p className="text-lg text-zinc-500 mb-8 max-w-md">
        Sorry, the page you’re looking for doesn’t exist.
      </p>

      <Link href="/">
        <Button
          variant="outline"
          className="border-black text-black hover:bg-black hover:text-white transition cursor-pointer"
        >
          Back to home
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
