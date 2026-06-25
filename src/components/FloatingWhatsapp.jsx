import { MessageCircle } from "lucide-react";

export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/6285142910505"
      target="_blank"
      rel="noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        w-16
        h-16
        rounded-full
        bg-green-500
        text-white
        flex
        items-center
        justify-center
        shadow-xl
        hover:scale-105
        transition
      "
    >
      <MessageCircle size={30} />
    </a>
  );
}