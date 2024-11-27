export interface ModalProps {
  setIsOpen: (value: boolean) => void;
}

export interface UserForm {
  createdAt: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  password: string;
  role: string;
  roleId: string;
}

export interface CreditCardForm {
  cardHolder: string;
  cardHolderID: string;
  cardNumber: string;
  createdAt: string;
  expiration: string;
  id: string;
}
