import { useState, useEffect } from 'react';
import useDeviceWidth from '../hooks/useDeviceWidth';
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
  const ww = useDeviceWidth();

  const [isLoading, setLoading] = useState(true);
  const [direction, setDirection] = useState([0, 0]);

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

  const rotate = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const rotateX = ww < 690 ? 0 : (clientX - centerX) / (width / 2);
    const rotateY = -(clientY - centerY) / (height / 2);

    setDirection([rotateX, rotateY]);
  };

  return (
    <div
      className='aspect-square h-16 w-16'
      onMouseMove={rotate}
      onMouseOut={() => setDirection([0, 0])}
      {...props}
    >
      {
        <img
          className='h-full w-full rounded'
          src={src}
          alt={props.alt}
          style={{
            transform: `perspective(${ww > 690 ? 8 : 20}px) rotateX(${
              direction[1]
            }deg) rotateY(${direction[0]}deg)`,
            filter: `opacity(${isLoading ? 0.8 : 1}) grayscale(${isLoading ? 1 : 0})`,
            transition: 'all 0.5s',
          }}
        />
      }
    </div>
  );
};

export default CardAvatar;
