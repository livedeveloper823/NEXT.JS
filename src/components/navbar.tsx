import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <main>
            <div className="flex gap-10 justify-center my-4">
                <div className="flex gap-3">
                    <Image
                        src="assets/icons/headersearchico.svg"
                        alt="search"
                        width={25}
                        height={25}
                    />
                    What are you looking for?
                </div>
                <div className="flex gap-3">
                    <Image
                        src="assets/icons/headerphoneico.svg"
                        alt="phone"
                        width={25}
                        height={25}
                    />
                    +1 250 585 7880
                </div>
                <div className="flex gap-3">
                    <Image
                        src="assets/icons/headeremailico.svg"
                        alt="email"
                        width={25}
                        height={25}
                    />
                    info@allenmarine.ca
                </div>
                <div className="flex gap-3">
                    <Image
                        src="assets/icons/headerregionico.svg"
                        alt="region"
                        width={25}
                        height={25}
                    />
                    2229 McCullough Rd, Nanaimo, BC, V9S 4M7
                </div>
            </div>
            <hr />
            <div className="flex justify-center items-center gap-20 my-5">
                <Link href={"/"}>
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={200}
                        height={100}
                    />
                </Link>
                <div>
                    <Link href={"/showroom"} className="px-4">SHOWROOM</Link>
                    <Link href={"/services"} className="px-4">SERVICES</Link>
                    <Link href={"/financing"} className="px-4">FINANCING</Link>
                    <Link href={"/aboutus"} className="px-4">ABOUT US</Link>
                    <Link href={"/contactus"} className="px-4">CONTACT US!</Link>
                </div>
                <button className="bg-[#BF9550] p-5 rounded-full">APPLY FOR FINANCING</button>
            </div>
        </main>
    )
}