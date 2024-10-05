
interface ImageCardProps {
  src: string;
  alt?: string;
  children?:React.ReactNode
}

const ImageCard: React.FC<ImageCardProps> = ({src, alt, children}) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md overflow-hidden">
      <img src={src} alt={alt} className="object-cover"/>
      {children}
    </div>
  );
};

export default ImageCard;
