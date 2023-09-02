import React from "react";

type props = {};

function Contact({}:props) {
    return (
        <div className="mt-4">
            <div className="flex gap-3 items-center object-contain">
                <img src="/images/users/alfred.jpg" alt="Alfred" className="w-[40px] h-[40px] rounded-full " />
                <h1 className="font-medium">Douo Alfred</h1>
            </div>
        </div>
    );
}

export default Contact;