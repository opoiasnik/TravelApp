import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { fetchAllCities } from '../../api/networkCalls';  // Импортируем функцию для работы с API

// React компонент для поиска городов
function MainSearch() {
  const [options, setOptions] = useState<{ label: string, id: number }[]>([]);

  // Хук для выполнения запроса при загрузке страницы
  useEffect(() => {
    const getCities = async () => {
      const cities = await fetchAllCities(); // Запрашиваем города
      const formattedCities = cities.map((city: { id: number, city: string }) => ({
        label: city.city, // Используем поле city как label для автозаполнения
        id: city.id // Оставляем id для возможного использования
      }));
      setOptions(formattedCities); // Обновляем состояние
    };

    getCities(); // Выполняем запрос
  }, []); // Пустой массив зависимостей означает, что хук выполнится только один раз при загрузке страницы

  return (
    <div className="mainSearch">
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField {...params} label="Enter city..." variant="outlined" />
        )}
        fullWidth
      />
    </div>
  );
}

export default MainSearch;
