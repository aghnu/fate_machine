import RotatingCloud from '@/components/RotatingCloud';
import { getClassName } from '@/utilities/className';
import style from './style.module.scss';

const CanvasView = ({ className = '' }: { className?: string }) => {
  return (
    <div className={getClassName(className, style.view)}>
      <div className={style['perspective-anchor']}>
        <RotatingCloud className={style['rotating-target']}></RotatingCloud>
      </div>
    </div>
  );
};

export default CanvasView;
