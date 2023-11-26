import ActionDrawer from '@/components/ActionDrawer';
import style from './style.module.scss';
import { getClassName } from '@/utilities/className';

const InterfaceView = ({ className = '' }: { className?: string }) => {
  return (
    <div className={getClassName(className, style.view)}>
      {/* <ActionDrawer></ActionDrawer> */}
    </div>
  );
};

export default InterfaceView;
