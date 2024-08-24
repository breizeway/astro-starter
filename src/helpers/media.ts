const MANAGED_IMAGES = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/images/managed/*",
);

export const getManagedImage = async (src: string) =>
  await MANAGED_IMAGES[src.replace("src/", "../")]();
