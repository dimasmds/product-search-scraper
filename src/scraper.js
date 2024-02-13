import puppeteer from 'puppeteer';
import fs from 'fs';
import platforms from './platforms.js';

async function writeProductToJson(products, filename = 'output.json') {
  await fs.promises.writeFile(filename, JSON.stringify(products, null, 2));
}

async function getHTMLValue(context, selector, prop, defaultValue = null) {
  try {
    return (await context.$eval(selector, (node, p) => node[p], prop)).trim();
  } catch {
    return defaultValue;
  }
}

async function buildProduct(productHandler, productProperties) {
  const promises = productProperties.map(async (prop) => ({
    [prop.name]: await getHTMLValue(
      productHandler,
      prop.selector,
      prop.elementProperty,
      prop.defaultValue,
    ),
  }));

  const propertyObjects = await Promise.all(promises);

  return propertyObjects.reduce((
    product,
    propertyObject,
  ) => Object.assign(product, propertyObject), {});
}

export async function scrapProduct(
  q = 'iPhone',
  p = 'tokopedia',
  o = 'output.json',
) {
  const platform = platforms[p.toLowerCase()];

  if (!platform) {
    throw new Error('platform is not compatible');
  }

  const browser = await puppeteer.launch({ headless: true });
  const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36';
  const page = await browser.newPage();
  await page.setUserAgent(userAgent);

  await page.goto(platform.getUrl(q));

  const productsHandler = await page.$$(platform.productContainerSelector);

  const products = await Promise.all(
    productsHandler.map((handler) => buildProduct(handler, platform.productProperties)),
  );

  await writeProductToJson(products, o);

  await browser.close();
}
