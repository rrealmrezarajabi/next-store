import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 px-6">
      <div className="bg-white text-black rounded-2xl shadow-xl px-10 py-14 text-center max-w-md w-full">
        <Image
          src={logo}
          alt="logo"
          width={80}
          height={80}
          className="mx-auto mb-6"
        />

        <h1 className="text-6xl font-bold tracking-tight mb-4">404</h1>
        <p className="text-base text-zinc-500 mb-8">
          Sorry, the page you’re looking for doesn’t exist.
        </p>

        <Link href="/">
          <Button
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white transition"
          >
            Back to home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
