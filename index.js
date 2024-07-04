const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./sequelize'); // Import the Sequelize instance
const NewTable = require('./models/NewTable'); // Import the NewTable model
const Table2 = require('./models/Table2'); // Import the Table2 model

const app = express();
const port = 3000;

app.use(bodyParser.json());

// CRUD operations for new_table

// Create a new entry in new_table
app.post('/new_table', async (req, res) => {
  try {
    const entry = await NewTable.create(req.body);
    res.status(201).json(entry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all entries from new_table
app.get('/new_table', async (req, res) => {
  try {
    const entries = await NewTable.findAll();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single entry by ID from new_table
app.get('/new_table/:id', async (req, res) => {
  try {
    const entry = await NewTable.findByPk(req.params.id);
    if (entry) {
      res.status(200).json(entry);
    } else {
      res.status(404).json({ error: 'Entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an entry by ID in new_table
app.put('/new_table/:id', async (req, res) => {
  try {
    const entry = await NewTable.findByPk(req.params.id);
    if (entry) {
      await entry.update(req.body);
      res.status(200).json(entry);
    } else {
      res.status(404).json({ error: 'Entry not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an entry by ID from new_table
app.delete('/new_table/:id', async (req, res) => {
  try {
    const entry = await NewTable.findByPk(req.params.id);
    if (entry) {
      await entry.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CRUD operations for table2 (RentCar)

// Create a new entry in table2
app.post('/table2', async (req, res) => {
  try {
    const entry = await Table2.create(req.body);
    res.status(201).json(entry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all entries from table2
app.get('/table2', async (req, res) => {
  try {
    const entries = await Table2.findAll();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single entry by ID from table2
app.get('/table2/:id', async (req, res) => {
  try {
    const entry = await Table2.findByPk(req.params.id);
    if (entry) {
      res.status(200).json(entry);
    } else {
      res.status(404).json({ error: 'Entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an entry by ID in table2
app.put('/table2/:id', async (req, res) => {
  try {
    const entry = await Table2.findByPk(req.params.id);
    if (entry) {
      await entry.update(req.body);
      res.status(200).json(entry);
    } else {
      res.status(404).json({ error: 'Entry not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an entry by ID from table2
app.delete('/table2/:id', async (req, res) => {
  try {
    const entry = await Table2.findByPk(req.params.id);
    if (entry) {
      await entry.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});
