
import { useState } from "react";
import {
  Plane,
  TrainFront,
  Bus,
  Hotel,
  MapPin,
  CalendarDays,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const BookingTabs = () => {
  const { requireAuth } = useAuth();

  const [activeTab, setActiveTab] = useState("flights");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const [flightForm, setFlightForm] = useState({
    from: "",
    to: "",
    date: "",
  });

  const [trainForm, setTrainForm] = useState({
    from: "",
    to: "",
    date: "",
  });

  const [busForm, setBusForm] = useState({
    from: "",
    to: "",
    date: "",
  });

  const [hotelForm, setHotelForm] = useState({
    city: "",
    checkIn: "",
    checkOut: "",
  });

  const tabs = [
    { key: "flights", label: "Flights", icon: Plane },
    { key: "trains", label: "Trains", icon: TrainFront },
    { key: "buses", label: "Buses", icon: Bus },
    { key: "hotels", label: "Hotels", icon: Hotel },
  ];

  const resetStates = () => {
    setResults([]);
    setError("");
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setResults([]);

    if (activeTab === "flights") {
      if (
        !flightForm.from.trim() ||
        !flightForm.to.trim() ||
        !flightForm.date
      ) {
        setError("Please fill From, To, and Date for flights.");
        return;
      }
    }

    if (activeTab === "trains") {
      if (!trainForm.from.trim() || !trainForm.to.trim() || !trainForm.date) {
        setError("Please fill From, To, and Date for trains.");
        return;
      }
    }

    if (activeTab === "buses") {
      if (!busForm.from.trim() || !busForm.to.trim() || !busForm.date) {
        setError("Please fill From, To, and Date for buses.");
        return;
      }
    }

    if (activeTab === "hotels") {
      if (
        !hotelForm.city.trim() ||
        !hotelForm.checkIn ||
        !hotelForm.checkOut
      ) {
        setError("Please fill City, Check-In, and Check-Out for hotels.");
        return;
      }
    }

    setLoading(true);

    try {
      let url = "";

      if (activeTab === "flights") {
        url = `http://localhost:5000/api/flights/search?from=${encodeURIComponent(
          flightForm.from
        )}&to=${encodeURIComponent(
          flightForm.to
        )}&date=${encodeURIComponent(flightForm.date)}`;
      }

      if (activeTab === "trains") {
        url = `http://localhost:5000/api/trains/search?from=${encodeURIComponent(
          trainForm.from
        )}&to=${encodeURIComponent(
          trainForm.to
        )}&date=${encodeURIComponent(trainForm.date)}`;
      }

      if (activeTab === "buses") {
        url = `http://localhost:5000/api/buses/search?from=${encodeURIComponent(
          busForm.from
        )}&to=${encodeURIComponent(
          busForm.to
        )}&date=${encodeURIComponent(busForm.date)}`;
      }

      if (activeTab === "hotels") {
        url = `http://localhost:5000/api/hotels?city=${encodeURIComponent(
          hotelForm.city
        )}&checkIn=${encodeURIComponent(
          hotelForm.checkIn
        )}&checkOut=${encodeURIComponent(hotelForm.checkOut)}`;
      }

      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Search failed");
      }

      const finalResults = Array.isArray(data) ? data : data.results || [];

      if (finalResults.length === 0) {
        setError("No results found.");
      }

      setResults(finalResults);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none backdrop-blur-md placeholder:text-slate-400 focus:border-cyan-400/40";

  return (
    <div className="rounded-4xl border border-white/15 bg-white/10 p-4 shadow-[0_20px_80px_rgba(8,145,178,0.12)] backdrop-blur-2xl sm:p-6">
      <div className="flex flex-wrap gap-3">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                resetStates();
              }}
              className={
                active
                  ? "flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950"
                  : "flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/10"
              }
            >
              <Icon size={16} />
              {tab.label}
            </button>
          );
        })}
      </div>

      <form onSubmit={handleSearch} className="mt-6 grid gap-4">
        {activeTab !== "hotels" ? (
          <>
            <div className="relative">
              <MapPin
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="From"
                value={
                  activeTab === "flights"
                    ? flightForm.from
                    : activeTab === "trains"
                    ? trainForm.from
                    : busForm.from
                }
                onChange={(e) => {
                  const value = e.target.value;
                  if (activeTab === "flights")
                    setFlightForm({ ...flightForm, from: value });
                  if (activeTab === "trains")
                    setTrainForm({ ...trainForm, from: value });
                  if (activeTab === "buses")
                    setBusForm({ ...busForm, from: value });
                }}
                className={`${inputClass} pl-11`}
              />
            </div>

            <div className="relative">
              <MapPin
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="To"
                value={
                  activeTab === "flights"
                    ? flightForm.to
                    : activeTab === "trains"
                    ? trainForm.to
                    : busForm.to
                }
                onChange={(e) => {
                  const value = e.target.value;
                  if (activeTab === "flights")
                    setFlightForm({ ...flightForm, to: value });
                  if (activeTab === "trains")
                    setTrainForm({ ...trainForm, to: value });
                  if (activeTab === "buses")
                    setBusForm({ ...busForm, to: value });
                }}
                className={`${inputClass} pl-11`}
              />
            </div>

            <div className="relative">
              <CalendarDays
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="date"
                value={
                  activeTab === "flights"
                    ? flightForm.date
                    : activeTab === "trains"
                    ? trainForm.date
                    : busForm.date
                }
                onChange={(e) => {
                  const value = e.target.value;
                  if (activeTab === "flights")
                    setFlightForm({ ...flightForm, date: value });
                  if (activeTab === "trains")
                    setTrainForm({ ...trainForm, date: value });
                  if (activeTab === "buses")
                    setBusForm({ ...busForm, date: value });
                }}
                className={`${inputClass} pl-11`}
              />
            </div>
          </>
        ) : (
          <>
            <div className="relative">
              <MapPin
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="City"
                value={hotelForm.city}
                onChange={(e) =>
                  setHotelForm({ ...hotelForm, city: e.target.value })
                }
                className={`${inputClass} pl-11`}
              />
            </div>

            <div className="relative">
              <CalendarDays
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="date"
                value={hotelForm.checkIn}
                onChange={(e) =>
                  setHotelForm({ ...hotelForm, checkIn: e.target.value })
                }
                className={`${inputClass} pl-11`}
              />
            </div>

            <div className="relative">
              <CalendarDays
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="date"
                value={hotelForm.checkOut}
                onChange={(e) =>
                  setHotelForm({ ...hotelForm, checkOut: e.target.value })
                }
                className={`${inputClass} pl-11`}
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          {loading ? "Searching..." : "Search Now"}
        </button>
      </form>

      {error && (
        <p className="mt-4 text-sm font-medium text-rose-400">{error}</p>
      )}

      {results.length > 0 && (
        <div className="mt-6 space-y-4">
          {results.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-slate-950/70 p-4"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                {item.type || activeTab}
              </p>

              <h3 className="mt-2 text-lg font-semibold text-white">
                {item.airline ||
                  item.trainName ||
                  item.operator ||
                  item.hotelName ||
                  "Result"}
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                {item.from && item.to ? `${item.from} → ${item.to}` : item.city || ""}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                {item.date ||
                  `${item.checkIn || ""} ${
                    item.checkOut ? `to ${item.checkOut}` : ""
                  }`}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-xl font-bold text-white">{item.price}</p>

                <button
                  onClick={() => requireAuth()}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
                >
                 Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingTabs;