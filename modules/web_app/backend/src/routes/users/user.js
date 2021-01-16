import express from "express";
import userCtrl from "../../controllers/users/user";
const router = express.Router();

router.get("/users",
    // middlewares
    userCtrl.getUsers
);
router.get("/users/:id",
    // middlewares
    userCtrl.getUserById
);
router.post("/users",
    // middlewares
    userCtrl.createUser
);
router.put("/users/:id",
    // middlewares
    userCtrl.updateUser
);
router.delete("/users/:id",
    // middlewares
    userCtrl.deleteUser
);

export default router