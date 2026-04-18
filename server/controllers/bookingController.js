
export const searchFlights = (req, res) => {
  const { from, to, date } = req.query;

  res.json({
    results: [
      {
        type: "Flight",
        from,
        to,
        date,
        airline: "IndiGo",
        price: "₹5,499",
      },
      {
        type: "Flight",
        from,
        to,
        date,
        airline: "Air India",
        price: "₹6,299",
      },
    ],
  });
};

export const searchTrains = (req, res) => {
  const { from, to, date } = req.query;

  res.json({
    results: [
      {
        type: "Train",
        from,
        to,
        date,
        trainName: "Rajdhani Express",
        price: "₹1,850",
      },
       {
        type: "Train",
        from,
        to,
        date,
        trainName: "vande Bharat",
        price: "₹2000",
      },
    ],
  });
};

export const searchBuses = (req, res) => {
  const { from, to, date } = req.query;

  res.json({
    results: [
      {
        type: "Bus",
        from,
        to,
        date,
        operator: "Volvo Travels",
        price: "₹999",
      },
      {
        type: "Bus",
        from,
        to,
        date,
        operator: "Taj Express",
        price: "₹1500",
      },
    ],
  });
};

export const getHotels = (req, res) => {
  const { city, checkIn, checkOut } = req.query;

  res.json({
    results: [
      {
        type: "Hotel",
        city,
        checkIn,
        checkOut,
        hotelName: "Grand Horizon Hotel",
        price: "₹4,999/night",
      },
      {
        type: "Hotel",
        city,
        checkIn,
        checkOut,
        hotelName: "Raddison Hotel",
        price: "₹5,999/night",
      },
    ],
  });
};