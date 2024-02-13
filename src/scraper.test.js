import {
  describe, it, expect,
} from 'vitest';
import fs from 'fs';
import { scrapProduct } from './scraper';

describe('scraper', () => {
  describe('scrapProduct function', () => {
    it('should scrap correctly when given by default value', async () => {
      await scrapProduct();

      const content = JSON.parse(
        fs.readFileSync('output.json').toString(),
      );

      expect(Array.isArray(content)).toEqual(true);
    });

    it('should throw error when given by invalid platform', async () => {
      await expect(
        scrapProduct('Pixel', 'wrong-platform'),
      ).rejects.toThrowError();
    });

    it('should scrap correctly when given by "tokopedia" platform', async () => {
      await scrapProduct('Pixel', 'tokopedia');

      const content = JSON.parse(
        fs.readFileSync('output.json').toString(),
      );

      expect(Array.isArray(content)).toEqual(true);
    });
  }, 10000);
});
