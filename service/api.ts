import axios from 'axios';

export const getFineDust = () => axios.get(
  `${process.env.API_HOST}/${process.env.API_KEY}/json/ForecastWarningMinuteParticleOfDustService/1/1/`
);