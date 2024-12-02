"use client"
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function() {
    return (
        <div>
            <FloatingWhatsApp 
                accountName="Hackademic"
                phoneNumber="6396111576"
                darkMode
                avatar="./assets/logo.png"
                className=""
            />
        </div>
    )
}