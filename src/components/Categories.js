import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categorySlice';
import '../App.css';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.status);
  dispatch(checkStatus());

  return (
    <div className="homeContent">
      <div className="statusB">
        <h2>
          {status}
        </h2>
      </div>
    </div>
  );
};

export default Categories;
