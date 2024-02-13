# Ecommerce Product Search Scraper
Web scraper for Indonesia Ecommerce product

## Dependencies
- Node.js
- Evergreen Browser

## How to use?
- Clone or download this repositories
- Inside the project folder, run `npm install`
- Run project by using `npm start`

## Command flag
- `-q`: Product keyword that will be scrap
- `-p`: Ecommerce platform option
  - Supported value: `"tokopedia"`, `"bukalapak"`
- `-o`: JSON output file name

Example:
```shell
npm start -- -p "tokopedia" -q "iPhone" -o "output.json"
```

That will scrap all product that found with "iPhone" keyword in "Tokopedia" platform saved to "output.json" file.
