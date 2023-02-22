import axios from 'axios';
import { Plugin } from '@kokkoro/core';

export class Service {
  /** API */
  api: string;

  constructor(
    /** 插件 */
    private plugin: Plugin,
  ) {
    this.api = 'https://kfc.yuki.sh/api/index';
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

  async autoSend() {
    const message = await this.getMessage();

    this.plugin.bl.forEach((bot) => {
      const sendQueue = [];
      const uins = [...bot.gl.keys()];
      const uins_length = uins.length;

      for (let i = 0; i < uins_length; i++) {
        const uin = uins[i];
        const info = bot.gl.get(uin)!;
        const { group_id } = info;
        const { apply, auto_send } = bot.profile.getOption(group_id, 'message');

        if (apply && auto_send) {
          sendQueue.push(bot.sendGroupMsg(group_id, message));
        }
      }
      Promise.allSettled(sendQueue);
    });
  }
}
