const fs = require('fs');

// Load the data
let data = JSON.parse(fs.readFileSync('data2.json', 'utf8'));

// Remove email field from entries where email includes "privaterelay.appleid.com"
data = data.map(entry => {
    if (entry.email && entry.email.includes('privaterelay.appleid.com')) {
        delete entry.email;
    }
    if (entry.caption == null) {
        delete entry.caption;
    }
    if (entry.state_name == null) {
        delete entry.state_name;
    }
    if (entry.country_name == "United States") {
        delete entry.country_name;
    }
    return entry;
});

// Write the data back to the file
fs.writeFileSync('data3.json', JSON.stringify(data, null, 4));