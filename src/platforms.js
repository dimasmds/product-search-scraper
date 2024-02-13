const platforms = {
  tokopedia: {
    getUrl: (q) => `https://www.tokopedia.com/search?q=${q}`,
    productContainerSelector: 'div[data-testid="divProductWrapper"]',
    productProperties: [
      {
        name: 'name',
        selector: '.prd_link-product-name',
        elementProperty: 'innerHTML',
        defaultValue: null,
      },
      {
        name: 'rating',
        selector: '.prd_rating-average-text',
        elementProperty: 'innerHTML',
        defaultValue: null,
      },
      {
        name: 'store',
        selector: '.prd_link-shop-name',
        elementProperty: 'innerHTML',
        defaultValue: null,
      },
      {
        name: 'location',
        selector: '.prd_link-shop-loc',
        elementProperty: 'innerHTML',
        defaultValue: null,
      },
      {
        name: 'price',
        selector: '.prd_link-product-price',
        elementProperty: 'innerHTML',
        defaultValue: null,
      },
      {
        name: 'sold',
        selector: '.prd_label-integrity',
        elementProperty: 'innerHTML',
        defaultValue: null,
      },
      {
        name: 'image',
        selector: '.pcv3_img_container > img',
        elementProperty: 'src',
        defaultValue: null,
      },
      {
        name: 'discount',
        selector: '.prd_badge-product-discount',
        elementProperty: 'innerHTML',
        defaultValue: '0%',
      },
    ],
  },
  bukalapak: {
    getUrl: (q) => `https://www.bukalapak.com/products?search%5Bkeywords%5D=${q}`,
    productContainerSelector: '.bl-product-card-new__wrapper',
    productProperties: [
      {
        name: 'name',
        selector: '.bl-product-card-new__name > p > a',
        elementProperty: 'innerHTML',
        defaultValue: null,
      },
      {
        name: 'price',
        selector: '.bl-product-card-new__price',
        elementProperty: 'innerHTML',
        defaultValue: null,
      },
      {
        name: 'location',
        selector: '.bl-product-card-new__store-location',
        elementProperty: 'innerHTML',
        defaultValue: null,
      },
      {
        name: 'rating',
        selector: '.bl-product-card-new__star > p > a',
        elementProperty: 'innerHTML',
        defaultValue: null,
      },
      {
        name: 'store',
        selector: '.bl-product-card-new__store-name > a',
        elementProperty: 'innerHTML',
        defaultValue: null,
      },
      {
        name: 'sold',
        selector: '.bl-product-card-new__sold-count',
        elementProperty: 'innerHTML',
        defaultValue: null,
      },
      {
        name: 'image',
        selector: '.bl-thumbnail--img',
        elementProperty: 'src',
        defaultValue: null,
      },
      {
        name: 'discount',
        selector: '.bl-product-card-new__discount-percent > span',
        elementProperty: 'innerHTML',
        defaultValue: null,
      },
    ],
  },
  blibli: {
    getUrl: (q) => `https://www.blibli.com/cari/${q}`,
    productContainerSelector: '.blu-product',
    productProperties: [
      {
        name: 'name',
        selector: '.blu-product__name',
        elementProperty: 'innerHTML',
        defaultValue: null,
      },
      {
        name: 'price',
        selector: '.blu-product__price > div',
        elementProperty: 'innerHTML',
        defaultValue: null,
      },
      {
        name: 'store',
        selector: '.blu-product__location-text > span',
        elementProperty: 'innerHTML',
        defaultValue: null,
      },
      {
        name: 'rating',
        selector: '.blu-product__rating-wrapper > span',
        elementProperty: 'innerHTML',
        defaultValue: null,
      },
      {
        name: 'sold',
        selector: '.blu-product__sold',
        elementProperty: 'innerHTML',
        defaultValue: null,
      },
      {
        name: 'image',
        selector: '.carousel-container__slide__content',
        elementProperty: 'src',
        defaultValue: null,
      },
      {
        name: 'discount',
        selector: '.blu-product__price-discount',
        elementProperty: 'innerHTML',
        defaultValue: null,
      },
    ],
  },
};

export default platforms;
