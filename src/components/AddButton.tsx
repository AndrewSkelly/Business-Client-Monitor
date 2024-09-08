import React, { useState } from 'react';
import {AddClientDetails} from '../interfaces/Client.tsx'
import './AddButton.scss';

const AddButton: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  // Default state is empty until populated with form values
  const [clientData, setClientData] = useState<AddClientDetails>({
    name: '',
    email: '',
    phone: '',
    tags: '',
    notes: ''
  });

  // Toggle the modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setClientData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('https://localhost:7053/api/Clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(clientData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Reset the form after submission
      setClientData({
        name: '',
        email: '',
        phone: '',
        tags: '',
        notes: ''
      });

      // Close the modal after successful submission
      toggleModal();
    } catch (error) {
      console.error('Failed to submit client data:', error);
    }
  };

  return (
    <>
      <button className="add-button" onClick={toggleModal}>
        <span className="plus">+</span>
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Client</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                placeholder='Jane Doe'
                type="text"
                name="name"
                id="name"
                value={clientData.name || ''}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                placeholder='example@gmail.com'
                type="email"
                name="email"
                id="email"
                value={clientData.email || ''}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="phone">Phone</label>
              <input
                placeholder='0851447292'
                type="text"
                name="phone"
                id="phone"
                value={clientData.phone || ''}
                onChange={handleInputChange}
              />

              <label htmlFor="tags">Tags</label>
              <input
              placeholder='New'
                type="text"
                name="tags"
                id="tags"
                value={clientData.tags || ''}
                onChange={handleInputChange}
              />

              <label htmlFor="notes">Notes</label>
              <textarea
              placeholder='Customer has known allergies to Hair Dye'
                name="notes"
                id="notes"
                value={clientData.notes || ''}
                onChange={handleInputChange}
              />

              <div className="modal-actions">
                <button type="submit" className="submit-button">Submit</button>
                <button type="button" className="cancel-button" onClick={toggleModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddButton;
