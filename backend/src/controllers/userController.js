import * as userServices from "../services/userServices.js";

export const register = async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = await userServices.registerUser(username, email, password);
      res.json(user);
    } catch (error) {
      res.status(500).send('Server Error');
    }
  };
  
  export const getNewUser = async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await userServices.getUser(userId);
      res.json(user);
    } catch (error) {
      res.status(500).send('Server Error');
    }
  };