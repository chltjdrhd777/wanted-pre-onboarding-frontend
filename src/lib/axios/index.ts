import axios, { CreateAxiosDefaults } from 'axios';

export class AxiosBase {
  static genEndpoint = (end: string, method: string) => ({ end, method });

  static baseURL = 'https://www.pre-onboarding-selection-task.shop/';
  static authEndpoint = {
    signUp: this.genEndpoint('/auth/signup', 'post'),
    signIn: this.genEndpoint('/auth/signin', 'post'),
  };
  static todoEndpoint = {
    createTodo: this.genEndpoint('/todos', 'post'),
    getTodos: this.genEndpoint('/todos', 'get'),
    updateTodo: this.genEndpoint('/todos', 'put'),
    deltetodo: this.genEndpoint('/todos', 'delete'),
  };
}

export class AxiosClient extends AxiosBase {
  static client = axios.create({
    baseURL: this.baseURL,
  });
  static genNewClient = (config: CreateAxiosDefaults<any>) => axios.create(config);
}
