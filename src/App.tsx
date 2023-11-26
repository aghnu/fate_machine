import style from './App.module.scss';
import CanvasView from './views/CanvasView';
import InterfaceView from '@/views/InterfaceView';

function App() {
  return (
    <>
      <div className={style.app}>
        <CanvasView className={style['layer-back']}></CanvasView>
        <InterfaceView className={style['layer-front']}></InterfaceView>
      </div>
    </>
  );
}

export default App;
