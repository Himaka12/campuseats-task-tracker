// CampusEats Task Tracker

// List of CampusEats development tasks
const tasks = [
    "Design the menu screen",
    "Build the orders API",
    "Add user login"
];

// Display the number of open tasks
console.log(`CampusEats has ${tasks.length} open tasks`);


// -----------------------------------------
// Calculate Total
// -----------------------------------------

// VIP customers receive a 10% discount
const VIP_DISCOUNT = 0.1;

/**
 * Calculates the total price for an order.
 *
 * @param {number} price - Price of one item
 * @param {number} quantity - Number of items
 * @param {string} customerType - Type of customer
 * @returns {number} Final total after applying any discount
 */
function calculateTotal(price, quantity, customerType) {

    // Validate the input values
    if (price < 0 || quantity < 0) {
        throw new Error("price and quantity must be >= 0");
    }

    // Calculate the subtotal
    const subtotal = price * quantity;

    // Apply a 10% discount if the customer is a VIP
    return customerType === "vip"
        ? subtotal * (1 - VIP_DISCOUNT)
        : subtotal;
}


// -----------------------------------------
// Security Note
// -----------------------------------------

// Never hard-code API keys, passwords, or tokens
// directly inside the source code.
//
// Sensitive values should come from environment
// variables or another secure secrets store.
//
// Example:
// const apiKey = process.env.API_KEY;