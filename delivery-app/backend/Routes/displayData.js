const express = require('express');
const router = express.Router();


router.post('/foodItems', async (req, res) => {
    try {
        console.log(global.food_items, global.food_categories);

        // Send data in array format
        res.status(200).send([global.food_items, global.food_categories]); 
        
    } catch (err) {
        console.error('Error displaying data:', err);
        res.status(500).send("Server Error");
    }
});


module.exports = router;
