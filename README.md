# FULL STACK SOFTWARE ENGINEER - CASE FOR FINAL ROUND

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## IMPORTANT INFORMATION

We propose you one test. You have all the time you need to do it, the idea is that once you are done, you come back to Qover and you will present your code to some of our senior developers.
You have the right to use the STACK you want. Of course, we have a preference for NodeJS, MongoDB, React
/ Redux. But don’t hesitate to use another stack.
We are more interested in quality of coding that making it working.

Zeplin Front Assets: https://app.zeplin.io/project/5b6c64580422817783ce6186

## SOLUTION TO BE IMPLEMENTED:

It is about getting the price for an insurance product based on specific parameters. There are four steps to in the process:
* Step 1: Log-in
* Step 2: Fill-in the parameters
* Step 3: Compute the pricing & verify the request complies with the underwriting rules
* Step 4: Display the offer

You will find the assets & required designs of the different steps on the Zeplin (we have sent you an invitation).

## STEP 1 – LOG- IN AND AUTHENTICATION

The customer must first log-in on the web platform and can at any time log-out. We don’t need yet the possibility to reset the password. For the time being, one log-in shall exist:
* Log-in: Qover 
* Password: Ninja

## STEP 2 – QUICK QUOTE – FILL- IN the parameters

Three fields should be created and one button.

The customer should manually fill-in the three fields:
* Field 1: Age of the driver
* Field 2: A dropdown with the make of cars. The possible values are: Audi, BMW, Porsche
* Field 3: The purchase price of the car (in EUR)

Button: The label of the button should be “Get a price”

## STEP 3 – QUICK QUOTE – COMPUTE PRICE & CHECK RULES

Once the customer clicks on the button “GET PRICE”, the following actions should take place:

1. Business Rules Acceptation:
    * If the value of the car is below 5.000 €, should REJECT and display “Sorry! The price of the car is too low”
    * If the driver is less than 18 years old, should REJECT and display “Sorry! The driver is too young”
    * If the driver is younger than 25 years old and the car is a Porsche, REJECT and display “Sorry! We can not accept this particular risk”

2. Compute the price
There are two variants of the offer: Global and Universal

## STEP 4 – DISPLAY THE OFFER

If the quote is accepted by the business rules, the offer should be displayed ( Example of format: 1.500,34 EUR - so Belgian style).

The client could switch between “Monthly Price” and “Yearly Price”. The monthly price is simply the yearly price divided by 12.

You should also display the features of the different variants which are shown on the design (maximum travel duration, etc…).