import { clsx } from 'clsx';
import { useState, useEffect, useRef } from 'react';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import HeartBreakIcon from '../assets/icons/HeartBreakIcon';

type CardAvatarProps = {
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
const CardAvatar = ({
  src,
  alt,
  className,
  ...props
}: CardAvatarProps & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = new Image();

    const eventListeners = {
      load: () => (setLoading(false), setImageLoaded(true)),
      error: () => (setLoading(false), setError(true)),
    };

    img.addEventListener('load', eventListeners['load']);
    img.addEventListener('error', eventListeners['error']);

    img.src = src;

    return () => {
      img.removeEventListener('load', eventListeners['load']);
      img.removeEventListener('error', eventListeners['error']);
    };
  }, [src]);

  return (
    <div
      {...props}
      className={clsx(
        'aspect-square h-auto w-16 overflow-hidden rounded',
        (isLoading || isError) && 'flex items-center justify-center',
        isError ? 'bg-error/50 text-error-content' : 'bg-primary/50 text-primary-content',
        className,
      )}
    >
      {isLoading && <span className='aspect-ratio loading loading-ring absolute' />}
      {isError && <HeartBreakIcon className='absolute' />}
      <img
        ref={imageRef}
        className={clsx(
          'h-full w-full transition-[opacity,_filter] duration-500',
          isLoading || !imageLoaded ? 'opacity-0 grayscale' : 'opacity-100 grayscale-0',
        )}
        src={src}
        alt={alt}
        loading='lazy'
      />
    </div>
  );
};

export default CardAvatar;
