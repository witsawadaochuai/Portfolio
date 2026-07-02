export function assetUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}

export const resumeUrl = () => assetUrl("assets/WITSAWA_DAOCHUAI_Resume.pdf");
