import { useEffect } from "react";

export default function FloatingWhatsapp() {
    return (
        <a
            href="https://wa.me/201125525425" // 👈 Put your number here (with country code)
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png" // 👈 Place a WhatsApp icon in your public folder
                alt="Chat on WhatsApp"
                style={{
                    width: "50px",
                    height: "50px",
                }}
            />
        </a>
    );
}
