const express = require('express');
const router = express.Router();


router.post('/foodItems', async (req, res) => {
    try {
        console.log(global.food_items, global.food_categories);
        // Correctly format the response to send both items in a single object
        res.status(200).json({
            foodItems: global.food_items,
            foodCategories: global.food_categories
        });
    } catch (err) {
        console.error('Error displaying data:', err);
        // Use the correct method to set status and send an error message
        res.status(500).send("Server Error");
    }
});

module.exports = router;
