# Shopping Ecommerce Project

Live Project Link : [https://shopkart.akshaydhayal.xyz/](https://shopkart.akshaydhayal.xyz/)

Welcome to our Shopping Ecommerce Project! This application is designed to provide users with a seamless shopping experience, allowing them to browse a wide range of products, add items to their cart, and proceed with checkout. Key features of this project include:

1. **Product Catalog:**
   - Users can explore a diverse selection of products across various categories.
   - Each product is accompanied by detailed information such as name, price, and description.
   - Advanced filtering options enable users to refine their product search based on criteria such as price range, category, and ratings.

2. **Shopping Cart:**
   - Customers can add products to their shopping cart for later purchase.
   - The cart dynamically updates to display the total number of items and the total price.

3. **Checkout:**
   - Once users have added desired items to their shopping cart, they can proceed to the checkout process.
   - The checkout process involves reviewing the selected items, providing any promo code if available and then confirming the purchase.
  
4. **Progressive Web App (PWA) and Responsive Design:**
   - The application is built as a Progressive Web App, providing an app-like experience with offline capabilities.
   - The site is fully responsive, ensuring a smooth and intuitive experience on all devices, including desktops, tablets, and mobile phones.

## Video Demo:



https://github.com/akshaydhayal/Ecommerce-App/assets/44504509/36af149b-c94f-45b4-b961-288d541a7a3c

## Project Structure:

- **src/components/Navbar.js:** Component responsible for rendering the navigation bar at the top of the application, providing links for easy navigation between different sections. It includes the following features:
   - **Search Bar:** Allows users to search for specific products within the catalog.
   - **Cart Icon:** Displays the number of items currently in the shopping cart.

- **src/components/Filters.js:** Component handling the filtering functionality, allowing users to refine their product search based on criteria such as price range, category, and ratings.

- **src/components/Products.js:** Component responsible for fetching and displaying the product catalog, including filtered results based on user input.

- **src/components/Product.js:** Component representing individual product items within the product catalog, displaying details such as name, price, description, and an option to add the item to the shopping cart.


## Technologies Used:

- **React:** Frontend library for building interactive user interfaces.
- **Recoil:** State management library for managing global application state.
- **React Router:** Routing library for navigating between different pages within the application.
- **Tailwind CSS:** Utility-first CSS framework for styling user interfaces.

## Getting Started:

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Start the development server with `npm run dev`.
4. Access the application in your web browser and begin exploring the features.

## Future Enhancements:

- **User Authentication:** Implement user authentication to enable account creation and secure login.
- **Product Reviews:** Allow users to leave reviews and ratings for products they have purchased.
- **Enhanced Filtering:** Further refine filtering options and provide more granular control over product search criteria.
