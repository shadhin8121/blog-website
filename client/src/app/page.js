import Card from "@/components/Card";
import Link from "next/link";

export default function Home() {
    return (
        <div className="container mx-auto">
            <Link
                href="/blog"
                className=" block md:inline-block lg:inline-block"
            >
                <Card />
            </Link>
        </div>
    );
}
