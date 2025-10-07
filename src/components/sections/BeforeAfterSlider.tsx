import { useState, useRef, useEffect } from "react";
import workspaceBefore from "@/assets/workspace-before.png";
import workspaceAfter from "@/assets/workspace-after.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleStart = () => {
    setIsDragging(true);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleEnd);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging]);

  return (
    <div className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none ring-2 ring-border/40"
            onMouseDown={handleStart}
            onTouchStart={handleStart}
          >
            {/* Before Image (Windows 98) */}
            <div className="absolute inset-0">
              <img
                src={workspaceBefore}
                alt="Before"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>

            {/* After Image (Modern Workspace) - with clip */}
            <div
              className="absolute inset-0 transition-all duration-150 ease-out"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
            >
              <img
                src={workspaceAfter}
                alt="After"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>

            {/* Slider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-accent-pink transition-all duration-150 ease-out"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent-pink shadow-lg ring-4 ring-background/80 hover:scale-110 transition-transform duration-200">
                  <ChevronLeft className="w-4 h-4 text-white -ml-1" />
                  <ChevronRight className="w-4 h-4 text-white -mr-1" />
                </div>
              </div>

              {/* Top indicator */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-accent-pink rounded-b-full shadow-md" />
              
              {/* Bottom indicator */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-accent-pink rounded-t-full shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
