import { Suspense } from "react";
import DevisPage from "./DevisPage";

export default function Devis() {
  return (
    <Suspense>
      <DevisPage />
    </Suspense>
  );
}
