import { FC } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

import logo from "@/logo.svg";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={260} height={30} quality={100} />
        </Link>

        <Link href={"/market"} className={styles.cartLink}>
          <ShoppingCart size={36} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
