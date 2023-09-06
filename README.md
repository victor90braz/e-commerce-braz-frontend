# E-Commerce Braz - Mini Application for Purchasing Mobile Devices

This is a mini-application called "E-Commerce Braz" for purchasing mobile devices.

Website: [https://e-commerce-braz.netlify.app/](https://e-commerce-braz.netlify.app/)

## Views

The application has two main views:

1. Main View - Product Listing
2. Product Details

## Design Implementation

- Design implementation is open-ended but must follow the structure defined in the provided screenshots. A detailed proposal will be positively valued.

## Technical Details

- The application is a Single Page Application (SPA) with client-side routing.

- Application Development FrontEnd.

  - React
  - React Redux
  - Styled Components
  - Bootstrap React

- Application Development BackEnd.

  - MySql
  - Php (Laravel)

## Environment Variables

- `E_COMMERCE_BRAZ_APP_API_BASE_URL`: API base URL for data management.
  Example: `https://itx-frontend-test.onrender.com/api/`

## Scripts

The project includes the following scripts for managing the application FrontEnd:

1. `npm install`: Install Dependencies.
2. `npm start`: Start the development server.
3. `npm run build`: Build the application for production.
4. `npm test`: Run tests.
5. `npm test-coverage`: Run tests and generate test coverage reports.
6. `npm run eject`: Which allows you to customize your project configuration.

## Repository

The project is hosted on GitHub: [victor90braz/e-commerce-braz-frontend](https://github.com/victor90braz/e-commerce-braz-frontend)

## Product List Page (PLP)

- Displays a list of products.
- Allows filtering content based on user-entered search criteria.
- Selecting a product navigates to its details.
- Adapts to different resolutions with a maximum of four items per row.

## Product Details Page (PDP)

- Divided into two columns:
  1. Displays the product image component.
  2. Displays product details and actions.

## Components

### Header

- Acts as a link to the main view.
- Shows breadcrumbs and provides links for navigation.
- Displays the number of items in the cart.

### Search

- Allows users to filter products based on entered text.
- Real-time filtering updates results.

### Item

- Displays product information: Image, Brand, Model, Price.

### Image of Product

- Displays the product image.

### Description of Product

- Displays detailed product attributes.

### Actions

- Allows users to add products to the cart.
- Requires sending product ID, color code, and storage code via the API.

## Resources

### Integration API

- API domain: [https://front-test-api.herokuapp.com/](https://front-test-api.herokuapp.com/)
- Endpoints:
  - Get list of products: `GET /api/product`
  - Get product details: `GET /api/product/:id`
  - Add product to cart: `POST /api/cart`

## Scripts

The project includes the following scripts for managing the application FrontEnd:

1. **Install Dependencies:** `npm install`

   - Use this command to install the project dependencies.

2. **Start the Development Server:** `npm start`

   - Use this command to start the development server.

3. **Build for Production:** `npm run build`

   - Use this command to build the application for production.

4. **Run Tests:** `npm test`

   - Run tests for the application.

5. **Run Tests with Coverage Report:** `npm run test-coverage`

   - Execute tests and generate test coverage reports.

6. **Eject from Create React App:** `npm run eject`
   - Eject from Create React App to customize your project configuration (use with caution).
