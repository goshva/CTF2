import { FC } from "react";
import IconCart from "../IconCart/IconCart";
import styles from './cartWithBadge.module.scss'
import clsx from "clsx";

const IconCartWithBadge: FC<{
  iconClass: string,
  backgroundClass: string,
  productCount: number,
}> = (
  { iconClass, backgroundClass, productCount }) => (
    <div className={clsx(styles.cartIcon, backgroundClass)}>
      <IconCart className={iconClass} />
      {productCount > 0
        ? (
          <div className={styles.cartBadge}>
            <span>{productCount}</span>
          </div>
        )
        : null}
    </div>);

export default IconCartWithBadge;
