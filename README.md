# React Native Basic Starter Kit - Beginner's Guide.

A very basic react native project for newbie developers to get hands on about basic fundamentals of react native and TypeScripts. The code is written such a way that new developer can easily understand and play with code. New developer will learn how to fetch data from network using axios. They will learn how to use skeleton placeholder while loading the JSON data from the APIs. RegEx validation is included for doing a form validation and showing related error to user.
Well maintained coding structure has been followed Ex.- each screen is divided into - Container and Component to reduce the number of line in a single file.


There is three screen including a splash screen. Login screen contains a email and a password field. After successfully login user will be navigated to a product listing page. Where we are using a dummy API's response data with a basic but responsive design.

###### Dummy API - https://fakestoreapi.com/products

<img src="Readme-source/0.jpg" width="220"/>



<img src="Readme-source/1.jpg" width="220" />          <img src="Readme-source/2.jpg" width="220" />    



<img src="Readme-source/3.gif" width="220" />      <img src="Readme-source/4.jpg" width="220" />



## Instalation Guide

1. Install **'Git'** on your system (recommended).
2. Clone the project using **'Git Clone'** command or simply download the project as a Zip.
3. Go to the desire project directory and install the node modules using ***npm i*** command (need to unzip first in case of zip file).
4. Run the project using ***npx react-native run-android** , if you are on Linux OS then you need to run **npx react-native run-android && npm start**.


## Challenges

One can take as much challenge as you can by modifying the code or he/she create the entire project by their by taking help with this project. Here is a list of some quick challenges - 

1. Add a Password validation using RegEx - Password must be 6 charecter long , must include one Capital Letter one small letter and one number.
2. After login fetch the entered email from local storage of the application and show it on the top the Product list page in such way - if email is abcde@gmail.com then it should be shown as "Welcome abcde" (remove the @gmail.com from the stored email)
3. Change the splash screen image with a animated image (gif).
4. Add a search filed in the product list page and search using the title of the products.
5. Add filter and filter with 'Price Low to High or Price High to Low' , 'Rating low to high or High to Low'.


