import { dataRef } from "./config/firebase.config";

const sendDataToFirebase = () => {
  const conversationHistory = JSON.parse(
    localStorage.getItem("Conversation History")
  );
  const userDataForm = JSON.parse(localStorage.getItem("User Data Form"));

  if (conversationHistory && userDataForm) {
    const conversationId = `${userDataForm.Name}_${userDataForm.PhoneNumber}_${userDataForm.UUID}`;

    const dataPackage = {
      Conversation_History: conversationHistory,
      User_Data_Form: userDataForm,
    };
    const updates = {};
    updates[`Data_Package/${conversationId}`] = dataPackage;
    dataRef.ref().update(updates);
  }
};

export default sendDataToFirebase;
