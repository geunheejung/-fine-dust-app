import axios from 'axios';

export const getFineDust = () => axios.get(
  `http://openapi.seoul.go.kr:8088/494867516f67657534335747434778/json/ForecastWarningMinuteParticleOfDustService/1/1/`
);