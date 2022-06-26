/**
 *CostCalculator calculates the toatal cost based on the number of pizzas
 *entered by the customer.
 * @param {number} num_pizzas - The number of pizzas enter by the customer
 * @param {string} message - The message to be displayed
 */
function CostCalculator()
{
    // The input box's value is stored in num_pizzas
    let num_pizzas = document.getElementById("quantity").value; 
    if(num_pizzas == "")// Checking if the user has not enterd any value
        document.getElementById("message").innerHTML = "Number of pizza can't be empty.";  
    else
    if(isNaN(num_pizzas))// Checking if the entered value is not a number
        document.getElementById("message").innerHTML = "Number of pizza must be a number"; // Error message
    else
    if(num_pizzas <= 0)// Checking if the user has entered 0 or negetive value 
        document.getElementById("message").innerHTML = "Number of pizza can't be less than 0"; // Error message
    else
    if(num_pizzas > 15)// Checking if the entered value is greater than 15
        document.getElementById("message").innerHTML = "Number of pizza can't be greater than 15"; // Error message
    else
    {
        /**
         * Date type variables to check if it is the promotional period
         * @typedef {Date} start_promption_date - Promotional period start date
         * @typedef {Date} end_promption_date - Promotional period end date
         * @typedef {Date} current_date - Today's date
         */
        const start_promption_date = new Date("2022, 04, 01");
        const end_promption_date = new Date("2022, 07, 30");
        const current_date = new Date();
        // Checking if it is the promotional period
        if(current_date < start_promption_date || current_date > end_promption_date)
        {
            document.getElementById("message").innerHTML = "Sorry It is not promotion period."; 
        }
        else
        {
            /**
             * Variables for calculating the best cost
             * @typedef {number} div - The divident of number of pizza divided by 3
             * @typedef {number} rem - The remainder of number of pizza divided by 3
             * @typedef {number} cost - The cost of number of pizza divided by 3
             */
            // Actual calculation of cost
            let div = Math.floor(num_pizzas / 3);
            let rem = num_pizzas % 3;
            let cost = 0;
            if(rem == 0)
                cost = div * 14.00;
            else if (rem == 1)
                cost = (div * 14.00) + 6.45;
            else if(rem == 2)
                cost = (div * 14.00) + 12.00; 
            // Display the message
            document.getElementById("message").innerHTML = num_pizzas +" Pizzas Cost $"+ cost; 
        }
    }
}