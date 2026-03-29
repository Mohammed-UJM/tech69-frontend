export {};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }

  const dataLayer: unknown[];

  function gtag(...args: unknown[]): void;
}
