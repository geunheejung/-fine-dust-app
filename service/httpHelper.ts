/**
 * 1. HTTP url과 HTTP method를 받아서 axios로 http request 헬퍼 생성자를 만들어낸다.
 *  - GET
 *    - object형태로 올 경우 key value로 분리한 다음 key=value 형태로 파라미터를 만든다.
 *  - POST
 *    - request body에 파라미터를 설정해주고, content-type이 따로 없을 경우 application/json 으로 설정해준다.
 * 2. 성공, 실패 처리
 *  - 성공
 *    - 성공할 경우 response값을 그대로 하며,
 *  - 실패
 *    - 실패할 경우 errorMsg와 errorCode를 설정해서 내려준다. -> 서버에서 api마다 error 반환이 다를 수 있음으로, 하나로 맞춰서 내려줘야함.
 */ 
import axios, { AxiosPromise } from 'axios';

export enum HTTP_METHOD {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

interface IRequestHeader {
  contentType: string,
}

interface IAxiosConfig {  
  url: string;
  method: HTTP_METHOD;
  headers: IRequestHeader,
  getParameter(): object | string;
}

class AxiosConfig implements IAxiosConfig {
  constructor(
    public url: string, 
    public method: HTTP_METHOD,
    public headers: IRequestHeader,
    private _data: object | string
  ) {}

  getParameter(): object | string {
    const { method, _data } = this;

    switch (method) {
      case HTTP_METHOD.GET:
        return typeof _data === 'string' 
          ? _data 
          : Object.entries(_data).reduce((pre, [key, value]) => `${key}=${value}` , '');
      case HTTP_METHOD.POST:
        return _data;
      default:
        return {};
    }
  }
}

const httpRequest = (
  url: string = '/json/ForecastWarningMinuteParticleOfDustService/', 
  method: HTTP_METHOD = HTTP_METHOD.GET,   
  parameter: string | object,
  contentType: string = 'json', 
): AxiosPromise => {  

  const base = `${process.env.API_HOST}/${process.env.API_KEY}${url}`;
  switch (method) {
    case HTTP_METHOD.GET:
      const params = typeof parameter === 'string' 
      ? parameter 
      : Object.entries(parameter).reduce((pre, [key, value]) => `${key}=${value}` , '');
      return axios.get(`${base}?${params}`);
    case HTTP_METHOD.POST:
      return axios.post(base, parameter, {
        headers: {
          'content-type': contentType,
        },
      });
    default:
      throw Error('NO HTTP METHOD!');
  }
}

export default httpRequest;