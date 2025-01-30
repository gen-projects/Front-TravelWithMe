import React, { useState, useRef, useEffect, useCallback } from 'react';
import { fetchRandomImages } from "../../../services/apiImagens"; 

interface ImageReview {
    image: string;
    author: string;
    text: string;
    source: string;
}

const Carrossel = () => {
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [carouselImages, setCarouselImages] = useState<string[]>([]);
    const [imageReviews, setImageReviews] = useState<ImageReview[]>([]);

    const containerRef = useRef<HTMLDivElement>(null);
    const slideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fetchRandomImages(setCarouselImages);
    }, [setCarouselImages]);

    useEffect(() => {
        const generateImageReviews = () => {
            const reviews = carouselImages.map((image, index) => ({
                image: image,
                text: "Esta imagem demonstra o quão inovador nosso serviço é.",
                author: "Cliente Feliz #" + index,
                source: "Imagem API"
            }));
            setImageReviews(reviews);
        };
        generateImageReviews();
    }, [carouselImages]);

    const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDragging(true);
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        setStartX(clientX - translateX);
        if (containerRef.current) {
            containerRef.current.style.cursor = "grabbing";
        }
    };

    const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging) return;
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const newTranslateX = clientX - startX;
        setTranslateX(newTranslateX);
    };

    const handleMouseUp = useCallback(() => {
        if (containerRef.current) {
            containerRef.current.style.cursor = "grab";
        }
        if (!isDragging) return;

        setIsDragging(false);

        if (!containerRef.current || !slideRef.current) return;

        const containerWidth = containerRef.current.offsetWidth;
        const slideWidth = slideRef.current.offsetWidth;
        const totalSlides = imageReviews.length;
        const slideOffset = -currentSlide * slideWidth;

        let newSlide = currentSlide;

        if (translateX > slideOffset + 50) {
            newSlide = Math.max(currentSlide - 1, 0);
        }
        if (translateX < slideOffset - 50) {
            newSlide = Math.min(currentSlide + 1, totalSlides - 1);
        }

        setCurrentSlide(newSlide);

        const maxTranslateX = -(totalSlides - 1) * slideWidth;
        setTranslateX(Math.min(Math.max(translateX, maxTranslateX), 0));
    }, [isDragging, translateX, currentSlide, imageReviews]);

    useEffect(() => {
        const handleMouseLeave = () => {
            if (containerRef.current) {
                containerRef.current.style.cursor = "grab";
            }
            if (isDragging) {
                handleMouseUp();
            }
        };

        if (containerRef.current) {
            containerRef.current.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, [isDragging, handleMouseUp]);

    const containerStyle = { cursor: "grab" };

    return (
        <div className="relative w-full overflow-hidden bg-gray-50 rounded-xl h-[50dvh] select-none">
            <div
                ref={containerRef}
                className="flex transition-transform duration-150 ease-in-out"
                style={{
                    ...containerStyle,
                    transform: `translateX(${translateX}px)`,
                    willChange: 'transform',
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchMove={handleMouseMove}
                onTouchEnd={handleMouseUp}
            >
                {imageReviews.map((review, index) => (
                    <div
                        ref={slideRef}
                        key={index}
                        className="flex-shrink-0 w-[80vw] md:w-[390px] p-4 md:p-8 text-gray-900 flex items-center justify-center"
                        style={{ pointerEvents: 'none' }}
                    >
                        <div className="w-full min-h-[40vh] rounded-xl p-5  overflow-hidden flex flex-col bg-slate-950/5 box-border">
                            <img
                                className="w-full h-48 object-cover rounded-lg mb-4"
                                src={review.image}
                                alt={"imagem-" + index}
                            />
                            <span className="text-2xl font-extrabold mb-4 text-gray-600">"</span>
                            <p className="mb-2 text-sm flex-grow">{review.text}</p>
                            <div className="flex flex-col">
                                <p className="font-bold text-sm">{review.author},</p>
                                <p className="font-normal text-sm">{review.source}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carrossel;
