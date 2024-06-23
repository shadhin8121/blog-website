import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <div className="flex justify-between border-b-4 border-gray-400 items-center">
            <div className="mx-1 md:mx-2 lg:mx-3">
                <Link href="/">
                    <Image
                        src="/lol.jpg"
                        width={50}
                        height={50}
                        alt="picture of zhongli"
                    />
                </Link>
            </div>
            <Link href="/login">
                <div className=" mx-1 md:mx-2 lg:mx-3">
                    <h1>Login</h1>
                </div>
            </Link>
        </div>
    );
};

export default Header;
