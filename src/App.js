import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_VIDEO_LIST } from './redux/constants/index';
import SideBar from './components/SideBar';
import StyledContainer from './components/styled-components/StyledContainer';
import Posts from './components/Posts';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  let [filteredData, setFilteredData] = useState([]);
  const [sortDir, setSortDir] = useState('ASC');
  const [sortedData, setSortedData] = useState([]);
  const [select, setSelect] = useState('orderBy');

  const isFilterOn = name || score;
  // const isFilterOn = useRef(false);

  const handleOnNameChange = ({ target: { value } }) => {
    setName(value);
    setFilteredData(
      data.filter((d) => d.name.toLowerCase().includes(value.toLowerCase()))
    );
  };

  const handleOnScoreChange = ({ target: { value } }) => {
    setScore(value);
    setFilteredData(
      data.filter((d) => Number(String(d.rating)[0]) >= Number(value))
    );
  };

  const handleOnSelectChange = ({ target: { value } }) => {
    setSelect(value);
    getSortedData(value, isFilterOn);
  };

  const handleSortDirection = () => {
    if (sortDir === 'ASC') {
      setSortDir('DSC');
      getSortedData(select, isFilterOn);
      return;
    }
    setSortDir(sortDir === 'ASC');
    getSortedData(select, isFilterOn);
  };

  const getSortedData = (val, isFilterOn) => {
    if (isFilterOn) {
      if (val === 'releaseDate') {
        if (sortDir === 'ASC') {
          const sortedArray = [...filteredData].sort(
            (a, b) => a.first_release_date - b.first_release_date
          );
          setSortedData(sortedArray);
          return;
        }
        const sortedArray = [...filteredData].sort(
          (a, b) => b.first_release_date - a.first_release_date
        );
        setSortedData(sortedArray);
      } else if (val === 'score') {
        if (sortDir === 'ASC') {
          const sortedArray = [...filteredData].sort(
            (a, b) => a.first_release_date - b.first_release_date
          );
          setSortedData(sortedArray);
          return;
        }
        const sortedArray = [...filteredData].sort(
          (a, b) => b.first_release_date - a.first_release_date
        );
        setSortedData(sortedArray);
      } else {
        if (sortDir === 'ASC') {
          const sortedArray = [...filteredData].sort((a, b) => a.name - b.name);
          setSortedData(sortedArray);
          return;
        }
        const sortedArray = [...filteredData].sort((a, b) => b.name - a.name);
        setSortedData(sortedArray);
      }
    } else {
      if (val === 'releaseDate') {
        if (sortDir === 'ASC') {
          const sortedArray = [...data].sort(
            (a, b) => a.first_release_date - b.first_release_date
          );
          setSortedData(sortedArray);
          return;
        }
        const sortedArray = [...data].sort(
          (a, b) => b.first_release_date - a.first_release_date
        );
        setSortedData(sortedArray);
      } else if (val === 'score') {
        if (sortDir === 'ASC') {
          const sortedArray = [...data].sort(
            (a, b) => a.first_release_date - b.first_release_date
          );
          setSortedData(sortedArray);
          return;
        }
        const sortedArray = [...data].sort(
          (a, b) => b.first_release_date - a.first_release_date
        );
        setSortedData(sortedArray);
      } else {
        if (sortDir === 'ASC') {
          const sortedArray = [...data].sort((a, b) => a.name - b.name);
          setSortedData(sortedArray);
          return;
        }
        const sortedArray = [...data].sort((a, b) => b.name - a.name);
        setSortedData(sortedArray);
      }
    }
  };

  useEffect(() => {
    dispatch({ type: GET_VIDEO_LIST });
  }, [dispatch]);

  if (sortedData.length) filteredData = sortedData;
  return (
    <div>
      <StyledContainer>
        <SideBar
          Asc={sortDir === 'ASC'}
          name={name}
          score={score}
          handleOnNameChange={handleOnNameChange}
          handleOnScoreChange={handleOnScoreChange}
          handleSortDirection={handleSortDirection}
          handleOnSelectChange={handleOnSelectChange}
        />
        <Posts data={isFilterOn ? filteredData : data} />
      </StyledContainer>
    </div>
  );
}

export default App;
