const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
    const iterateWithAsyncAwait = async (values) => {
        try {
            for (const value of values) {
                console.log(value);
                await delay(1000); // Ensures a 4-second delay between logs
            }
        } catch (error) {
            console.error(error.message);
        }
    };
    const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values)





// AWAIT CALL

const testAwaitCall = async () => {
    console.log("Testing awaitCall...");
    
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log("Data received:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    
    console.log("Test completed!");
};

testAwaitCall();







// Define the chained async functions
const chainedAsyncFunctions = async () => {
    console.log("First async function started...");
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async operation (1 second delay)
    console.log("First async function completed!");

    console.log("Second async function started...");
    await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate another async operation (1 second delay)
    console.log("Second async function completed!");

    console.log("Third async function started...");
    await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate another async operation (1 second delay)
    console.log("Third async function completed!");
};

// Test the chained async functions
const testChainedAsyncFunctions = async () => {
    console.log("Testing chainedAsyncFunctions...");
    await chainedAsyncFunctions();
    console.log("Test completed!");
};

testChainedAsyncFunctions();

