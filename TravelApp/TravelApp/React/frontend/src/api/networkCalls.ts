import axios from 'axios';


// Функция для запроса всех доступных городов мира
export const fetchAllCities = async () => {

    try {
      const response = await axios.get('https://localhost:7215/api/CityNames')
      console.log(response.data);
        return response.data;
        
    
    } catch (error) {
      console.error('Error fetching cities:', error);
      return [];
    }

};
