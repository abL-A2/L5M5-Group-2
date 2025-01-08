const address = "2 Queen Street, Auckland";
const addressCoord = async (address)=>{
    try{
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_API_KEY}`);
        const data = await response.json();
        if (data.status === "OK") {
            const { lat, lng } = data.results[0].geometry.location;
            return { lat, lng }; // Return the coordinates
          } 

    } catch (err) {
        console.error("Geocoding Error: ", err);
    }
}

module.exports = { addressCoord };