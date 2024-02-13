import minimist from 'minimist';
import { scrapProduct } from './scraper.js';

const argv = minimist(process.argv.slice(2));

(async () => {
  const { q = 'iPhone', p = 'tokopedia', o = 'output.json' } = argv;
  await scrapProduct(q, p, o);
})();
