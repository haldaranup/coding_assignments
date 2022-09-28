import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

const CartList = ({ items }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="restaurant">
      <p>Name: {items.name}</p>
      <img src={items.image} alt="" width="280px" />
      <p>Type: {items.type}</p>
      <p>Rating: {items.rating}</p>
      <p>Votes: {items.number_of_votes}</p>
      <p>Strats from: {items.price_starts_from}</p>
      <Button onClick={onOpen}>Place Order</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Add more</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CartList;
