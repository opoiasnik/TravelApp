import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { increment, decrement } from './counterSlice';
import { RootState, AppDispatch } from './store'; 
import MainHeader from './Components/MainHeader/MainHeader';
import MainSearch from './Components/MainSearch/MainSearch';
import './App.css'
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className='root'>
      <MainHeader></MainHeader>
      <MainSearch></MainSearch>
      
    </div>
  );
}

export default App;
