import React from "react";

export default function SelectedContact({ selectedContactId, contacts, setSelectedContactId, setViewingContact }) {
  const selectedContact = contacts.find((contact) => contact.id === selectedContactId);

  const handleBackToList = () => {
    setSelectedContactId(null);
    setViewingContact(false);
  };

  if (!selectedContact) {
    return <div>No contact selected</div>;
  }

  return (
    <div>
      <h2>Selected Contact</h2>
      <p>Name: {selectedContact.name}</p>
      <p>Email: {selectedContact.email}</p>
      <p>Phone: {selectedContact.phone}</p>
      <p>Website: {selectedContact.website}</p>
      <p>Username: {selectedContact.username}</p>
      <button onClick={handleBackToList}>Back to List</button>
    </div>
  );
}
