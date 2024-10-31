import { useState, useEffect } from 'react';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type CardAvatarProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  src: string;
  alt: string;
};

/**
 * Дочерний компонент для карточки участника, проекта и тому подобных
 * @param {string} src Путь к изображению, как в теге `<img />`
 * @param {string} alt Alt-текст изображения
 *
 * @example
 * <CardAvatar src="/avatars/default.png" alt="Default avatar" />
 */
const CardAvatar = (props: CardAvatarProps) => {
  const [isLoading, setLoading] = useState(true);

  const [src, setImageSrc] = useState('/avatars/default.png');
  useEffect(() => {
    setLoading(true);

    const img = new Image();
    img.onload = () => {
      setImageSrc(props.src);
      setTimeout(() => setLoading(false), 250);
    };

    setTimeout(() => (img.src = props.src), 250);

    img.onerror = () => {
      setImageSrc('/avatars/default.png');
    };
  }, [props.src]);

  return (
    <div className='aspect-square h-16 w-16' {...props}>
      {
        <img
          className='h-full w-full rounded'
          src={src}
          alt={props.alt}
          style={{
            filter: `opacity(${isLoading ? 0.8 : 1}) grayscale(${isLoading ? 1 : 0})`,
            transition: 'all 0.5s',
          }}
        />
      }
    </div>
  );
};

export default CardAvatar;
