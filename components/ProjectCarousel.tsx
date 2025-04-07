"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProjectCarousel({ project }: any) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    // Auto-slide
    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedImageIndex((prevIndex) =>
                prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
            );
        }, 6000);

        return () => clearInterval(interval);
    }, [project.images.length]);

    return (
        <div className="project-carousel">
            <div className="card__image-container zoom-img position-relative mb-3">
                <img
                    className="card__image fade-in"
                    src={project.images[selectedImageIndex]}
                    alt={project.title}
                    style={{
                        width: "100%",
                        height: "500px",
                        borderRadius: "12px",
                        transition: "opacity 0.6s ease-in-out",
                    }}
                />
                <Link
                    href={project.link || "#"}
                    className="card-image-overlay position-absolute start-0 end-0 w-100 h-100"
                />
            </div>
            <div className="thumbnail-row d-flex justify-content-center gap-2 flex-wrap">
                {project.images.map((img: string, idx: number) => (
                    <div
                        key={idx}
                        className={`thumbnail border ${selectedImageIndex === idx ? "border-primary" : "border-light"}`}
                        onClick={() => setSelectedImageIndex(idx)}
                        style={{
                            cursor: "pointer",
                            opacity: selectedImageIndex === idx ? 1 : 0.6,
                            transition: "opacity 0.3s ease",
                        }}
                    >
                        <img
                            src={img}
                            alt={`Thumbnail ${idx + 1}`}
                            style={{
                                width: "60px",
                                height: "60px",
                                objectFit: "cover",
                                borderRadius: "6px",
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
