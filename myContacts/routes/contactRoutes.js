const express = require("express");
const router = express.Router();
const {
    getAllContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
    addContactForm
} = require("../controllers/contactController");

router
    .route("/")
    .get(getAllContacts);

router
    .route("/add")
    .get(addContactForm)
    .post(createContact);

router
    .route("/:id")
    .get(getContact) // 연락처 가져오기
    .put(updateContact) // 연락처 수정하기
    .delete(deleteContact); // 연락처 삭제하기


module.exports = router;
