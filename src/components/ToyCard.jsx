import React from "react";

function ToyCard({ toy }) {
  const handleDelete = () => {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (response.ok) {
          console.log(`Toy with id ${toy.id} deleted successfully.`);
        } else {
          console.error(`Failed to delete toy with id ${toy.id}.`);
        }
      })
      .catch((error) => {
        console.error("Error deleting toy:", error);
      });
  };
  const handlelike = () => {
    const updatedToy = { ...toy, likes: toy.likes + 1 };

    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedToy)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Toy with id ${toy.id} updated successfully:`, data);
      })
      .catch((error) => {
        console.error("Error updating toy:", error);
      });
  };

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handlelike}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDelete}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
