import { clsx } from 'clsx';
import { useState, useEffect } from 'react';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type CardAvatarProps = DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
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

  const [src, setImageSrc] = useState(props.src);
  useEffect(() => {
    setLoading(true);

    const img = new Image();
    img.onload = () => setLoading(false);

    img.onerror = () => setImageSrc('/images/avatars/default.png');

    img.src = src;
  }, [src]);

  useEffect(() => {
    setImageSrc(props.src);
  }, [props.src]);

  return (
    <div
      {...props}
      className={clsx(
        'aspect-square h-auto w-16 overflow-hidden rounded bg-primary/50 text-primary-content'.split(
          ' ',
        ),
        isLoading && 'flex items-center justify-center',
        props.className,
      )}
    >
      {isLoading && <span className='aspect-ratio loading loading-ring absolute' />}
      <img
        className={clsx(
          'h-full w-full transition-[opacity,_filter] duration-500',
          isLoading ? 'opacity-0 grayscale' : 'opacity-100 grayscale-0',
        )}
        src={src}
        alt={props.alt}
      />
    </div>
  );
};

export default CardAvatar;
