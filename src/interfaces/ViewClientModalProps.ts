export interface ViewClientModalProps {
    client: ClientDetails;
    closeModal: () => void;
    deleteClient: (clientId: number) => void;
    updateClient: (clientId: number, updatedClient: ClientDetails) => void;
  }