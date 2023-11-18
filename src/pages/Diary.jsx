import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import TitlePage from '../components/TitlePage';
import DaySwitch from '../components/DaySwitch';
import DayProducts from '../components/DayProducts';
import DayExercises from '../components/DayExercises';
import DayDashboard from '../components/DayDashboard';
import SectionTemplate from '../components/SectionTemplate/SectionTemplate';
import { getDiaryWorkoutThunk } from '../redux/workouts/workoutsOperations';
import { getDiaryMealsThunk } from '../redux/meals/mealsOperations';
import {
  DiaryWrapActivity,
  DiaryWrapContent,
  DiaryWrapTitle,
} from './Diary/Diary.styled';
import { getIndicatorsThunk } from '../redux/userIndicators/userIndicOperations';
import { ToastContainer } from 'react-toastify';

const Diary = () => {
  const dispatch = useDispatch();
  const [points, setPoints] = useState(window.innerWidth);

  const handleResize = () => setPoints(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );

  const handleDateChange = (date) => {
    const newDate = date.toISOString();
    // const cutNewDate = newDate.split("", 10).join('');
    setSelectedDate(newDate);
  };

  useEffect(() => {
    dispatch(getDiaryMealsThunk(selectedDate));
  }, [selectedDate]);

  useEffect(() => {
    dispatch(getDiaryWorkoutThunk(selectedDate));
  }, [selectedDate]);

  useEffect(() => {
    dispatch(getIndicatorsThunk());
  }, []);

  return (
    <SectionTemplate>
      <DiaryWrapTitle>
        <TitlePage>Diary</TitlePage>
        <DaySwitch onDateChange={handleDateChange} />
      </DiaryWrapTitle>
      {points >= 768 || <DayDashboard />}
      <DiaryWrapContent>
        <DiaryWrapActivity>
          <DayProducts />
          <DayExercises />
        </DiaryWrapActivity>
        {points < 768 || <DayDashboard />}
      </DiaryWrapContent>
      <ToastContainer />
    </SectionTemplate>
  );
};

export default Diary;
