import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([
    { type: "Mastercard", lastFour: "3193" },
    { type: "Visa", lastFour: "****" },
  ]);
  const [newCard, setNewCard] = useState({
    cardholderName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [error, setError] = useState("");
  const handleRemoveCard = (index) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Validation for card number to allow only numbers
    if (name === "cardNumber" && /\D/.test(value)) {
      setError("Card number must be numeric!");
      return;
    }
    setNewCard((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleAddCard = () => {
    if (
      newCard.cardholderName &&
      newCard.cardNumber &&
      newCard.expiry &&
      newCard.cvv
    ) {
      setCards([
        ...cards,
        { type: "Visa", lastFour: newCard.cardNumber.slice(-4) },
      ]);
      setNewCard({ cardholderName: "", cardNumber: "", expiry: "", cvv: "" });
      navigate("/finalpage");
    } else {
      toast.error("Please fill in all fields!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200">
      <div className="bg-gray-800 text-white w-[400px] h-[400px] p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Settings</h2>
        <h3 className="text-lg mb-2">Saved cards:</h3>
        {cards.map((card, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <img
                src={"src/images/mastercard.png"}
                alt={card.type}
                className="w-8 h-8 mr-2"
              />
              <span>**** **** **** {card.lastFour}</span>
            </div>
          </div>
        ))}
        <h3 className="text-lg mb-2">Add new card:</h3>
        <div className="mb-2">
          <input
            type="text"
            name="cardholderName"
            value={newCard.cardholderName}
            onChange={handleInputChange}
            placeholder="Cardholder's Name"
            className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
          />
          <input
            type="text"
            name="cardNumber"
            value={newCard.cardNumber}
            onChange={handleInputChange}
            placeholder="Card Number"
            maxLength={12}
            className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
          />
          {error && <div className="text-lg text-[red]">{error}</div>}
          <div className="flex justify-between mb-2">
            <input
              type="month"
              name="expiry"
              value={newCard.expiry}
              onChange={handleInputChange}
              placeholder="Expire (MM/YY)"
              className="w-2/5 p-2 rounded bg-gray-700 text-white mr-2"
            />
            <input
              type="text"
              name="cvv"
              value={newCard.cvv}
              onChange={handleInputChange}
              placeholder="Cvv"
              className="w-2/5 p-2 rounded bg-gray-700 text-white"
            />
          </div>
          <button
            onClick={handleAddCard}
            className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded"
          >
            ADD CARD
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Payment;
