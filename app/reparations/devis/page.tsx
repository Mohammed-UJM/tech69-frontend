import { Suspense } from "react";
import DevisClient from "./DevisClient";

export default function DevisPage() {
  return (
    <Suspense fallback={<div>Chargement ...</div>}>
      <DevisClient />
    </Suspense>
  );
}
