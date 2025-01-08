const fetch = require("node-fetch");

const addressCoord = async (address) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}&key=${process.env.GOOGLE_API_KEY}`
    );
    const data = await response.json();
    if (data.status === "OK") {
      const { lat, lng } = data.results[0].geometry.location;
      return { lat, lng };
    } else {
      throw new Error("Address not found");
    }
  } catch (err) {
    console.error("Geocoding Error: ", err);
    throw err;
  }
};

module.exports = { addressCoord };
