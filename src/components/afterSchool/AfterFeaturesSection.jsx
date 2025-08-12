'use client';

import { useState } from "react";

export default function AfterFeaturesSection() {
    const program = [
        {
            icon: 'ri-time-line',
            title: "After School Classes",
            subTitle: "School & Community Centers",
        },
        {
            icon: 'ri-shield-check-line',
            title: "Apartment Classes",
            subTitle: "Residential Communities",
        }
    ];

    // 0 means first card is active initially
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Choose Your Program
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We offer flexible programs designed to fit your community's needs and schedule
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {program.map((item, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <div
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`flex gap-10 p-8 rounded-xl cursor-pointer transition-shadow 
                                    ${isActive
                                        ? "border-2 border-green-400 shadow-lg bg-green-50"
                                        : "bg-gradient-to-br from-white to-green-50 hover:border-2 hover:border-green-400 hover:shadow-lg"
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 
                                    ${isActive ? "bg-green-100 text-green-400" : "bg-white text-gray-700 group-hover:text-green-400"}`}>
                                    <i className={`${item.icon} text-xl`}></i>
                                </div>

                                <div>
                                    <h3 className={`text-xl font-semibold mb-4 
                                        ${isActive ? "text-green-400" : "text-gray-900 hover:text-green-400"}`}>
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600">{item.subTitle}</p>

                                    {["Professional instructors", "Age-appropriate activities", "Safe equipment provided"].map((point, i) => (
                                        <div key={i} className={`flex mt-2 ${isActive ? "text-green-400" : "text-gray-700 hover:text-green-400"}`}>
                                            <i className="ri-check-line w-5 h-5 flex items-center justify-center text-green-400 mr-3"></i>
                                            <p>{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
