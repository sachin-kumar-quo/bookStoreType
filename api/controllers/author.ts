import * as authorService from "../services/authorService";

const createAuthor = async (req, res) => {
  const { name, email, phone, age } = req.body;
  try {
    const result = await authorService.createAuthor({
      name,
      email,
      phone,
      age,
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({
      error: err.message,
      message: "Unable to create Author",
    });
  }
};

const getAuthor = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await authorService.getAuthor(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Unable to get Author",
    });
  }
};

const getAuthors = async (req, res) => {
  const params = req.query;
  try {
    const result = await authorService.getAuthors(params);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Unable to get Authors",
    });
  }
};

const updateAuthor = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, age } = req.body;
  try {
    const result = await authorService.updateAuthor(id, {
      name,
      email,
      phone,
      age,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Unable to update Author",
    });
  }
};

const deleteAuthor = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await authorService.deleteAuthor(id);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Unable to delete Author",
    });
  }
};

export {
  createAuthor,
  getAuthor,
  getAuthors,
  updateAuthor,
  deleteAuthor,
};
