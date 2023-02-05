import { Plugin, Option } from 'kokkoro';
import { KFCService } from './service';

interface KFCOption extends Option {
  // auto_send: boolean;
}

const option: KFCOption = {
  apply: true,
  lock: false,
};
const { version } = require('../package.json');
const plugin = new Plugin('kfc', option);
const service = new KFCService();

plugin
  .version(version)

plugin
  .command('say')
  .description('v50 看看实力')
  .sugar(/(v|V|vivo|Vivo|v我|V我)50/)
  .action(async (ctx) => {
    const message = await service.getMessage();
    await ctx.reply(message);
  })
