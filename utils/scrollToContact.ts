import { useRouter } from "next/navigation";

export function useScrollToContact() {
  const router = useRouter();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
  };

  return scrollToContact;
}
