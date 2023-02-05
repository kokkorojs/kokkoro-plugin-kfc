import axios from 'axios';

export class KFCService {
  /** API */
  api: string;

  constructor() {
    this.api = 'https://kfc-crazy-thursday.vercel.app/api/index';
  }

  async getMessage(): Promise<string> {
    let message: string;

    try {
      const { data } = await axios.get(this.api);
      message = data;
    } catch (error) {
      message = (<Error>error).message;
    }
    return message;
  }
}
