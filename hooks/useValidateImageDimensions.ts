export default function useValidateImageDimensions() {
  const validateImageDimension = (file: File, width: number, height: number): Promise<string | null> => {
    return new Promise((resolve) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        URL.revokeObjectURL(url);

        if (img.width !== width || img.height !== height) {
          resolve(`Please check dimensions`);
        } else {
          resolve(null);
        }
      };

      img.onerror = () => {
        URL.revokeObjectURL(url);
        resolve("Invalid image file");
      };

      img.src = url;
    });
  };

  return { validateImageDimension };
}
