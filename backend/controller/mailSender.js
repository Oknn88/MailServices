const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config();

const test = async (req, res) => {
  const { email, emailVerificationCode } = req.body;
  try {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAILUSER,
        pass: process.env.EMAILPASS,
      },
    });

    var mailOptions = {
      from: "youremail@gmail.com",
      to: email,
      subject: "Sending Email using Node.js",
      html: `
      <head>
    <style>
        * {
    box-sizing: border-box;
}

body {
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
}

.c-email {
    width: 40vw;
    border-radius: 40px;
    overflow: hidden;
    box-shadow: 0px 7px 22px 0px rgba(0, 0, 0, .1);
}

    .c-email-header {
        background-color: #0fd59f;
        width: 100%;
        height: 60px;
    }

        .c-email-header-title {
            font-size: 40px;
            height: 100px;
            line-height: 60px;
            margin: 0;
            text-align: center;
            color: white;
        }
    

    .c-email-content {
        width: 100%;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        background-color: #fff;
        padding: 15px
    }

    .c-email-content-text-text-title {
            font-size: 20px;
            text-align: center;
            color: #343434;
            margin-top: 0;

        }

    .c-email-code {
        display: block;
        width: 60%;
        margin: 30px auto;
        background-color: #ddd;
        border-radius: 40px;
        padding: 20px;
        text-align: center;
        font-size: 36px;
        letter-spacing: 10px;
        box-shadow: 0px 7px 22px 0px rgba(0, 0, 0, .1);
    }

    .c-email-footer {
        width: 100%;
        height: 60px;
        background-color: #fff;
    }


.text-center {
    text-align: center;
}

.text-italic {
    font-style: italic;
}

.opacity-30 {
    opacity: 0.3;
}

.mb-0 {
    margin-bottom: 0;
}
    </style>
</head>

<body>

    <div class="c-email">
        <div class="c-email-header">
            <h1 class="c-email-header-title">Your Verification Code</h1>
        </div>
        <div class="c-email-content">
            <p class="c-email-content-text-text-title">
                Enter this verification code in field:
            </p>
            <div class="c-email-code">
                <span class="c-email-code-text">${emailVerificationCode}</span>
            </div>
        </div>
        <div class="c-email-footer">Araç Takip Sistemi</div>
    </div>
</body>
`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    console.log(error);
  }
  res.send("OK.");
};

module.exports = { test };
