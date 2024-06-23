import Image from "next/image";

interface Props {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textStyles?: string;
  isAuthor?: boolean;
}

const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  href,
  textStyles,
  isAuthor,
}: Props) => {
  return (
    <div className="flex-center flex-wrap gap-1">
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={`object-contain ${href ? "rounded-full" : ""}`}
      />

      <p className={`${textStyles} flex items-center gap-1`}>
        {value}

        {title}
      </p>
    </div>
  );
};

export default Metric;
