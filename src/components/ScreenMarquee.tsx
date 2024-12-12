import imageOne from "@/assets/conference-image-1.jpg";
import imageTwo from "@/assets/conference-image-2.jpg";
import imageThree from "@/assets/conference-image-3.jpg";
import imageFour from "@/assets/conference-image-4.jpg";
import imageFive from "@/assets/conference-image-5.jpg";
import Marquee from "react-fast-marquee";

const images = [imageOne, imageTwo, imageThree, imageFour, imageFive];

function generateRandomRectangle(
  baseWidth = 240,
  baseHeight = 180,
  minScale = 0.9,
  maxScale = 1.4
) {
  const isVertical = Math.random() > 0.5;
  const aspectRatio = baseWidth / baseHeight;
  const scale = minScale + Math.random() * (maxScale - minScale);

  let width, height;
  if (isVertical) {
    height = Math.floor(baseWidth * scale);
    width = Math.floor(height / aspectRatio);
  } else {
    width = Math.floor(baseWidth * scale);
    height = Math.floor(width / aspectRatio);
  }

  return {
    style: {
      width: `${width}px`,
      height: `${height}px`,
      borderRadius: 10,
      objectFit: "cover" as const,
    },
    image: images[Math.floor(Math.random() * images.length)],
  };
}

const ScreenMarquee = () => {
  const rectangles = Array.from({ length: 6 }, () => generateRandomRectangle());

  return (
    <Marquee autoFill={false} className="p-20">
      <div className="flex w-screen items-center gap-10">
        {rectangles.map((rect, index) => (
          <img key={index} src={rect.image} style={rect.style} className="object-cover" />
        ))}
      </div>
    </Marquee>
  );
};

export default ScreenMarquee;
