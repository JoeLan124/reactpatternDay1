"use client"
import { eventBus } from "../../lib/eventBus";

const message = [
  { id: crypto.randomUUID(), text: "confidential" },
  { id: crypto.randomUUID(), text: "internal" },
  { id: crypto.randomUUID(), text: "public" },
  { id: crypto.randomUUID(), text: "very confidential" },
  { id: crypto.randomUUID(), text: "secret" },
];

export default function AddToCartButton() {
  const handleClick = () => {
    const randomIndex = Math.floor(
      Math.random() * message.length
    );
    const selectedMessage = message[randomIndex];
    eventBus.publish("message:add", {
      id: selectedMessage.id,
      text: selectedMessage.text,
    });
  };

  return (
    <div className="flex space-x-2 border rounded border-gray-600 p-2 m-3">
      <h2 className="text-2xl">Publisher</h2>
      <button
        className="bg-emerald-500 rounded p-1 cursor-pointer"
        onClick={handleClick}>
        Add to Cart
      </button>
    </div>
  );
}
