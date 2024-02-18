import { BASE_64_IMAGE } from "@constants/regular_expressions";

export const base64Data = (src: string): string => {
  if (!BASE_64_IMAGE.test(src)) {
    return "data:image/png;base64," + src;
  }
  return src;
};

export const isBase64Image = (base64String: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve(true);
    };
    img.onerror = () => {
      reject(false);
    };
    img.src = base64String;
  });
};
