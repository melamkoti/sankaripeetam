const express = require("express");
const {
  upcomingEvents,
  oldEvents,
  Events,
  DeleteEvent,
  UpdateEvent,
} = require("./controllers/EventController");

const router = express.Router();

router.get("/upcoming-events", upcomingEvents);

router.get("/old-events", oldEvents);

router.get("/", Events);
///delete Event By id
router.delete("/:id", DeleteEvent);
// update the Event based on Id
router.put("/:id", UpdateEvent);

module.exports = router;
