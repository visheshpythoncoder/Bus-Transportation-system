const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Data = require('./login');
const Busstop = require('./busstop');
const add_bus=require('./add_bus');
const route = require('./route');
const student = require('./student')
const teacher = require('./teacher')


const app = express();
const port = 5340;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});



// POST route to add data
app.post('/api/register', async (req, res) => {
  const { fullname,email,phone,password1,password2} = req.body;
  if (password1 !== password2) {
      return res.status(400).json({ message: 'Passwords do not match' });
  }

  const hashedPassword = await bcrypt.hash(password1, 10);

  try {
  const newData = new Data({  fullname,email,phone,password1:hashedPassword,password2});

      const savedData = await newData.save();
      res.status(201).json(savedData);
      res.json({ success: true });
  } catch (error) {
      res.status(402).json({ message: error.message });
  }
});

///api for teacher data 
app.post('/api/teacher-register', async (req, res) => {

  try {

    const form = new teacher(req.body);
    await form.save();
    res.status(201).send(form);
} catch (err) {
    res.status(400).send(err);
}
});


// api for transportpage1
app.post('/api/transportpage1', async (req, res) => {
    // const { stopname,geolocation,distance} = req.body;

    const newStop = new Busstop(req.body);
    try {
        await newStop.save();
        res.json({ success: true });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//api for transportpage2
app.post('/api/transportpage2', async (req, res) => {
  try {
    const form = new add_bus(req.body);
    await form.save();
    res.status(201).send(form);
} catch (err) {
    res.status(400).send(err);
}
});

//api for transportpage3
app.post('/api/transportpage3', async (req, res) => {
    try {
      const form = new route(req.body);
      await form.save();
      res.status(201).send(form);
  } catch (err) {
      res.status(400).send(err);
  }
});

//api for get data of routeselect
app.get('/api/Busstop', async (req, res) => {
    try {
      const items = await Busstop.find();
      res.json(items);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  app.get('/api/stopselect', async (req, res) => {
    try {
      const items = await route.find();
      res.json(items);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
//api for get data of routeselect
app.get('/api/routeselect', async (req, res) => {
  try {
    const items = await route.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//api for log in page 
app.post('/api/login', async (req, res) => {
    const { email, password1 } = req.body;

    try {
        const user = await Data.findOne({ email });

        if (!user) {
            return res.status(403).json({ msg: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password1, user.password1);

        if (!isMatch) {
            return res.status(403).json({ msg: 'Invalid credentials' });
        }
         
        const payload = { userId: user.id };

        jwt.sign(payload, 'mysecretkey', { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

////api for teacher log in 
app.post('/api/teacher', async (req, res) => {
  const { teacherid, password } = req.body;

  try {
      const user = await teacher.findOne({ teacherid });

      if (!user) {
          return res.status(403).json({ msg: 'User not found' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
          return res.status(403).json({ msg: 'Invalid credentials' });
      }
       
      const payload = { userId: user.id };

      jwt.sign(payload, 'mysecretkey', { expiresIn: '1h' }, (err, token) => {
          if (err) throw err;
          res.json({ token });
      });
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
  }
});

//api for forget password
app.post('/update-password', async (req, res) => {
    const { email, phone, newPassword } = req.body;
  
    try {
      // Hash the new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);
  
      // Update the password
      const result = await Data.findOneAndUpdate(
        { $or: [{ email }, { phone }] },
        { password1: hashedPassword },
        { new: true }
      );
  
      if (result) {
        res.status(200).send('Password updated successfully');
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      res.status(500).send('Server error');
    }
  });

// api for busselect type
app.post('/api/busselect', async (req, res) => {
  const {selectedBus } = req.body;

  const newData = new student({ form2Data:{selectedBus}});
  try {
      const savedData = await newData.save();
      res.status(202).json(savedData);
      res.json({ success: true });
  } catch (error) {
      res.status(400).json({ message: error.message });
  }

});





app.post('/submitForm', async (req, res) => {
  try {
      const form = new student(req.body);
      await form.save();
      res.status(201).send(form);
  } catch (err) {
      res.status(400).send(err);
  }
});

app.get('/person/:name', async (req, res) => {
  try {
    const name = req.params.name;
    const person = await student.findOne({ 'form1.name': name });
    if (person) {
      res.json(person);
    } else {
      res.status(404).json({ message: 'Person not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

 //////////////dammy//////////
 
 

// server starting point is here
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
