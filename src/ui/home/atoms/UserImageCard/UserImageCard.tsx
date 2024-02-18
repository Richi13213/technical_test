import { useState, useEffect } from "react";
import type { UserImageCardProps } from "@typing/props";
import { base64Data, isBase64Image } from "@functions/validations";
import User from "@images/user.webp";
import * as styles from "./UserImageCard.styles";

export default function UserImageCard({
  src,
  id,
  name,
}: UserImageCardProps): JSX.Element {
  const [img, setImg] = useState<string>(User);

  useEffect(() => {
    const validateImage = async () => {
      try {
        const base64Src: string = base64Data(src);
        const data = await isBase64Image(base64Src);
        if (data) {
          setImg(base64Src);
        }
      } catch (error) {
        console.log(error);
      }
    };

    validateImage();
  }, [src]);
  return (
    <img
      className={styles.image}
      alt={`${id}-${name}`}
      src={img}
      width={100}
      height={100}
    />
  );
}
